#!/usr/bin/env node
'use strict';
/*
 * night-guard.js - keeps unattended nightly work inside its lane.
 *
 *   node tools/night-guard.js [base]        base: the git ref the branch is compared with (default origin/main)
 *
 * The nightly job builds lessons on branches named claude/night-<something>. This guard lists the files the current
 * branch changed since it left the base (git diff <base>...HEAD; a rename counts as a delete plus an add) and fails
 * when any of them is outside what nightly work may change:
 *   allowed    lessons/**   content.js   night-reports/**
 *   forbidden  everything else: app.js, app.css, index.html, tests/**, tools/**, maps/**, .github/**, README.md,
 *              LESSON-BRIEF.md, CLAUDE.md, CHANGELOG.md, ...
 * Inside the allowed paths only plain files are accepted (a symlink or a submodule fails too).
 * Lesson files and content.js run inside the site, next to the GitHub key the progress sync keeps in the browser
 * (localStorage ep4.sync). So every line the branch adds to a .js file in the allowed paths is scanned, with its
 * quoted strings blanked first: code that reaches the network, browser storage, the page, timers or eval fails too.
 * Warnings, which do not fail the guard: a lesson file that already exists on the base and was modified or deleted
 * rather than added; a lesson file the branch adds while the base has meanwhile added the same file; a file under
 * lessons/ that is not named lessons/u<unit>/l<n>.js; a deleted content.js; uncommitted changes (only commits are
 * checked).
 *
 * Output: one line per changed file, "ERROR|WARN|INFO  path | message", a summary line, then the forbidden files once
 * more in one block. On GitHub Actions the findings are also shown as annotations.
 * Exit code: 0 = only allowed changes, 1 = forbidden changes, 2 = bad usage or a git problem (e.g. base not fetched).
 * Plain Node 22, no npm packages; needs git.
 */
const { spawnSync } = require('child_process');

const ALLOWED_TEXT = 'lessons/**, content.js, night-reports/**';
const isAllowed = p => p === 'content.js' || p.startsWith('lessons/') || p.startsWith('night-reports/');
const LESSON_FILE_RE = /^lessons\/u\d+\/l\d+\.js$/;
const PLAIN_FILE_MODES = new Set(['100644', '100755']);
const STATUS = { A: 'added', M: 'modified', D: 'deleted', T: 'type changed', U: 'unmerged', X: 'unknown change' };
const MODE = { '120000': 'a symlink', '160000': 'a submodule', '040000': 'a folder' };

// ------------------------------------------------------------------ CLI
const USAGE = 'Usage: node tools/night-guard.js [base]\n' +
  '  base  git ref the branch is compared with, as in git diff <base>...HEAD (default origin/main)\n' +
  `Exit 1 when the branch changes files outside ${ALLOWED_TEXT}; 2 on a git problem.`;
const argv = process.argv.slice(2);
if (argv.includes('-h') || argv.includes('--help')) { console.log(USAGE); process.exit(0); }
{
  const bad = argv.find(a => a.startsWith('-'));
  if (bad) { console.error(`unknown option ${bad}\n${USAGE}`); process.exit(2); }
  if (argv.length > 1) { console.error(`give at most one base ref\n${USAGE}`); process.exit(2); }
}
const BASE = argv[0] || 'origin/main';

// ------------------------------------------------------------------ git
class GitProblem extends Error {}
let repo = process.cwd();
function git(args, allowFail) {
  const r = spawnSync('git', args, { cwd: repo, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  if (r.error) throw new GitProblem(`cannot run git: ${r.error.message}`);
  if (r.status !== 0 && !allowFail) throw new GitProblem(`git ${args.join(' ')} failed: ${String(r.stderr || '').trim() || `exit code ${r.status}`}`);
  return r;
}
/* Changed files of base...HEAD from "git diff --raw -z": { path, status (A/M/D/T...), dstMode }. */
function changedFiles() {
  const out = git(['diff', '--raw', '-z', '--no-renames', '--no-abbrev', '--no-ext-diff', '--no-color', '--no-relative', `${BASE}...HEAD`]).stdout;
  const parts = out.split('\0'), list = [];
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i].startsWith(':')) continue;
    const meta = parts[i].slice(1).split(' ');            // srcMode dstMode srcSha dstSha status
    list.push({ path: parts[++i], dstMode: meta[1], status: String(meta[4] || 'X').charAt(0) });
  }
  return list;
}

/* Added lines of one file (git diff -U0) that call or touch something lesson data never needs: the network,
   browser storage, the page, timers, eval. Quoted strings are blanked first, so words in lesson text don't count. */
const STRING_RE = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g;
const RISKY_RE = /(?<![\w$.])(?:fetch|XMLHttpRequest|sendBeacon|WebSocket|eval|Function|setTimeout|setInterval|import)\s*\(|(?<![\w$.])(?:localStorage|sessionStorage|indexedDB|document|navigator|location|window|globalThis|self|top|parent|opener)\s*[.\[]|\bnew\s+(?:Image|Worker|Audio)\b/;
function riskyLines(file) {
  const out = git(['diff', '-U0', '--no-color', '--no-ext-diff', '--no-renames', `${BASE}...HEAD`, '--', file]).stdout.split('\n');
  const hits = [];
  let n = 0;
  for (const line of out) {
    const h = /^@@ -\d+(?:,\d+)? \+(\d+)/.exec(line);
    if (h) { n = Number(h[1]); continue; }
    if (line.startsWith('+++')) continue;
    if (line.startsWith('+')) {
      if (RISKY_RE.test(line.slice(1).replace(STRING_RE, '""'))) hits.push({ n, text: line.slice(1).trim() });
      n++;
    }
  }
  return hits;
}

// ------------------------------------------------------------------ reporting
const lines = [], counts = { ERROR: 0, WARN: 0, INFO: 0 }, annotations = [];
function report(level, file, msg) {
  counts[level]++;
  lines.push(`${level.padEnd(5)} ${file} | ${msg}`);
  if (level !== 'INFO') annotations.push({ level, file, msg });
}
const esc = s => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
const escProp = s => esc(s).replace(/:/g, '%3A').replace(/,/g, '%2C');
const short = sha => String(sha).slice(0, 7);

// ------------------------------------------------------------------ main
function main() {
  repo = git(['rev-parse', '--show-toplevel']).stdout.trim();
  const base = git(['rev-parse', '--verify', '--quiet', `${BASE}^{commit}`], true);
  if (base.status !== 0) throw new GitProblem(`base "${BASE}" was not found. Fetch it first, for example: git fetch origin main`);
  const baseSha = base.stdout.trim();
  const headSha = git(['rev-parse', '--verify', 'HEAD^{commit}']).stdout.trim();
  const mb = git(['merge-base', BASE, 'HEAD'], true);
  if (mb.status !== 0 || !mb.stdout.trim()) {
    const shallow = git(['rev-parse', '--is-shallow-repository'], true).stdout.trim() === 'true';
    throw new GitProblem(shallow
      ? `no merge base of "${BASE}" and HEAD in this shallow clone; fetch the full history (actions/checkout with fetch-depth: 0, or git fetch --unshallow)`
      : `"${BASE}" and HEAD share no history (no merge base), so there is nothing to compare`);
  }
  const mergeBase = mb.stdout.trim().split('\n')[0];
  // On GitHub the checkout is a detached HEAD: the branch name comes from the event (PR head, or the pushed branch).
  const branch = process.env.GITHUB_HEAD_REF || (process.env.GITHUB_REF_TYPE === 'branch' && process.env.GITHUB_REF_NAME) ||
    git(['rev-parse', '--abbrev-ref', 'HEAD'], true).stdout.trim() || 'HEAD';
  const changes = changedFiles();
  // Lesson files on the base as it is now (it may have moved on since this branch started).
  const onBase = new Set(git(['ls-tree', '-r', '-z', '--name-only', '--full-name', baseSha, '--', 'lessons']).stdout.split('\0').filter(Boolean));

  const forbidden = [];
  for (const c of changes) {
    const what = STATUS[c.status] || `changed (${c.status})`;
    if (!isAllowed(c.path)) {
      report('ERROR', c.path, `${what}: outside what nightly work may change (${ALLOWED_TEXT})`);
      forbidden.push(c);
      continue;
    }
    if (c.status !== 'D' && !PLAIN_FILE_MODES.has(c.dstMode)) {
      report('ERROR', c.path, `${what}: ${MODE[c.dstMode] || `file mode ${c.dstMode}`}, but nightly work may only add or edit plain files`);
      forbidden.push(c);
      continue;
    }
    if (c.status !== 'D' && /\.js$/.test(c.path)) {
      const hits = riskyLines(c.path);
      if (hits.length) {
        report('ERROR', c.path, `${what}: adds code that could reach the network, browser storage or the page ` +
          `(${hits.length} ${hits.length === 1 ? 'line' : 'lines'}), e.g. line ${hits[0].n}: ${hits[0].text.slice(0, 140)}`);
        forbidden.push(c);
        continue;
      }
    }
    let flagged = false;
    if (c.path === 'content.js' && c.status === 'D') {
      report('WARN', c.path, 'deleted: the site cannot run without content.js (allowed path, but surely a mistake)');
      flagged = true;
    }
    if (c.path.startsWith('lessons/')) {
      const where = onBase.has(c.path) ? `already exists on ${BASE}` : `existed on ${BASE} when this branch started`;
      if (c.status === 'M' || c.status === 'T') {
        report('WARN', c.path, `${what}: this lesson file ${where}; nightly work should add new lessons, so a change to an existing lesson needs a human review`);
        flagged = true;
      } else if (c.status === 'D') {
        report('WARN', c.path, `deleted: this lesson file ${where}; a deleted lesson needs a human review`);
        flagged = true;
      } else if (c.status === 'A' && onBase.has(c.path)) {
        report('WARN', c.path, `added here, but ${BASE} has meanwhile added this file too, so this branch's version would replace it`);
        flagged = true;
      }
      if (c.status !== 'D' && !LESSON_FILE_RE.test(c.path)) {
        report('WARN', c.path, `${what}: unexpected name under lessons/ (lesson files are lessons/u<unit>/l<n>.js)`);
        flagged = true;
      }
    }
    if (!flagged) report('INFO', c.path, what);
  }
  const dirty = git(['status', '--porcelain', '-z', '--untracked-files=all'], true);
  if (dirty.status === 0 && dirty.stdout.replace(/\0/g, '').trim())
    report('WARN', '(working tree)', 'there are uncommitted changes; only commits are checked, so commit them and run the guard again');

  console.log(`night-guard: ${branch} (${short(headSha)}) compared with ${BASE} (${short(baseSha)}), merge base ${short(mergeBase)}; allowed: ${ALLOWED_TEXT}`);
  if (!changes.length) console.log(`INFO  (branch) | no files changed on this branch since it left ${BASE}`);
  for (const l of lines) console.log(l);
  console.log(`\nSUMMARY: ${counts.ERROR} ERROR, ${counts.WARN} WARN, ${counts.INFO} INFO (${changes.length} ${changes.length === 1 ? 'file' : 'files'} changed on ${branch} since it left ${BASE})`);
  if (forbidden.length) {
    console.log(`\nNIGHT GUARD FAILED: ${forbidden.length} changed ${forbidden.length === 1 ? 'file is' : 'files are'} not allowed for nightly work:`);
    const w = Math.max(...forbidden.map(c => (STATUS[c.status] || c.status).length));
    for (const c of forbidden) console.log(`  ${(STATUS[c.status] || c.status).padEnd(w)}  ${c.path}`);
    console.log(`Nightly work may only change ${ALLOWED_TEXT} (plain files). Undo these changes on the branch;` +
      ` if they came from ${BASE} itself, fetch it first (git fetch origin main) and run the guard again.`);
  } else console.log(`\nnight-guard: OK, every change is inside ${ALLOWED_TEXT}${counts.WARN ? ' (see the warnings above)' : ''}`);
  if (process.env.GITHUB_ACTIONS === 'true')
    for (const a of annotations) {
      const file = a.file.startsWith('(') ? '' : `file=${escProp(a.file)},`;    // "(working tree)" is not a file
      console.log(`::${a.level === 'ERROR' ? 'error' : 'warning'} ${file}title=night-guard::${esc(a.msg)}`);
    }
  return forbidden.length ? 1 : 0;
}

try { process.exitCode = main(); }
catch (e) {
  if (e instanceof GitProblem) {
    console.error(`night-guard: ${e.message}`);
    if (process.env.GITHUB_ACTIONS === 'true') console.log(`::error title=night-guard::${esc(e.message)}`);
  } else console.error((e && e.stack) || e);
  process.exitCode = 2;
}
