#!/usr/bin/env node
'use strict';
/*
 * register-lessons.js - writes the lesson <script> lines and the ?v= versions of index.html
 * from content.js and the files on disk (English Passport static site).
 *
 *   node tools/register-lessons.js [siteRoot]           update index.html and print the lines that changed
 *   node tools/register-lessons.js [siteRoot] --check   write nothing; exit 1 and print the differences
 *                                                       if index.html is not exactly what would be written
 *
 *   siteRoot  folder with index.html and content.js (default: the site this tool belongs to, the folder above tools/)
 *
 * content.js is the single source of the lesson list, so adding a lesson needs no hand edit in index.html:
 *   1. content.js runs in a vm sandbox with a few stub globals (as in tests/content-check.js). The lists
 *      unit0Lessons, unit1Lessons, ... are read in unit order (0, 1, 2, ...), entries in list order,
 *      skipping test:true entries.
 *   2. Lesson id u<U>l<N> is the file lessons/u<U>/l<N>.js, and a lesson is loaded only if its file exists
 *      (WARN for an open:true lesson without a file, and for a lesson file that no list names).
 *   3. Everything between the lines <!-- lessons:start --> and <!-- lessons:end --> of index.html is replaced
 *      by one <script> line per lesson, in that order (the block sits between content.js and app.js).
 *   4. Every local file index.html loads (app.css, content.js, each lesson, app.js) gets ?v=<the first 8 hex
 *      characters of the SHA-256 of the file>: an edited file always gets a new version, and an unchanged
 *      file keeps its version, so the phone downloads only what changed.
 * Nothing else in index.html changes, and a second run changes nothing.
 *
 * Plain Node (22), no npm packages. Exit code: 0 written or up to date, 1 --check found differences, 2 error.
 * Other scripts: require('../tools/register-lessons.js').generateIndexHtml(root) returns the text this tool
 * would write, without writing it (tests/site.test.js serves it, so a branch with new lessons can be tested
 * before index.html is updated); collectLessons(root) returns { DATA, lessons, warnings }.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const START = '<!-- lessons:start -->';
const END = '<!-- lessons:end -->';
const USAGE = 'Usage: node tools/register-lessons.js [siteRoot] [--check]\n' +
  '  siteRoot  folder with index.html and content.js (default: the folder above tools/)\n' +
  '  --check   write nothing; exit 1 and print the differences if index.html is not up to date';

const isFile = p => { const st = fs.statSync(p, { throwIfNoEntry: false }); return !!st && st.isFile(); };

// ------------------------------------------------------------------ the lesson list (content.js)
/* Run content.js in a vm sandbox with minimal browser stubs (as tests/content-check.js loads it); return DATA. */
function loadContent(root) {
  const file = path.join(root, 'content.js');
  if (!isFile(file)) throw new Error(`content.js not found in ${root}`);
  const sandbox = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  sandbox.window = sandbox; sandbox.self = sandbox;
  vm.createContext(sandbox);
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: 'content.js' }); }
  catch (e) { throw new Error(`content.js failed to run: ${e.message}`); }
  if (!sandbox.DATA || typeof sandbox.DATA !== 'object') throw new Error('content.js defines no DATA object');
  return sandbox.DATA;
}

/* The lessons index.html loads, in course order: { DATA, lessons: [{ id, unit, n, open, file }], warnings }. */
function collectLessons(rootDir) {
  const root = path.resolve(rootDir), DATA = loadContent(root);
  const lessons = [], warnings = [], seen = new Set();
  const lists = Object.keys(DATA).map(k => /^unit(\d+)Lessons$/.exec(k)).filter(Boolean).sort((a, b) => a[1] - b[1]);
  for (const [key] of lists) {
    if (!Array.isArray(DATA[key])) { warnings.push(`content.js ${key} is not a list; skipped`); continue; }
    for (const l of DATA[key]) {
      if (!l || typeof l !== 'object' || l.test) continue;
      const m = /^u(\d+)l(\d+)$/.exec(typeof l.id === 'string' ? l.id : '');
      if (!m) { warnings.push(`content.js ${key}: lesson id ${JSON.stringify(l.id)} is not u<unit>l<number>; skipped`); continue; }
      if (seen.has(l.id)) { warnings.push(`content.js ${key}: ${l.id} is listed twice; loaded once`); continue; }
      seen.add(l.id);
      const file = `lessons/u${m[1]}/l${m[2]}.js`;
      if (isFile(path.join(root, file))) lessons.push({ id: l.id, unit: Number(m[1]), n: Number(m[2]), open: !!l.open, file });
      else if (l.open) warnings.push(`content.js ${key}: ${l.id} is open:true but ${file} does not exist; not loaded`);
    }
  }
  const loaded = new Set(lessons.map(l => l.file));
  let onDisk = [];
  try { onDisk = fs.readdirSync(path.join(root, 'lessons'), { recursive: true }).map(f => 'lessons/' + String(f).replace(/\\/g, '/')); } catch (_) { /* no lessons folder */ }
  for (const f of onDisk.filter(f => /^lessons\/u\d+\/l\d+\.js$/.test(f) && !loaded.has(f)).sort())
    warnings.push(`${f} exists but no unit<N>Lessons list in content.js names it; not loaded`);
  return { DATA, lessons, warnings };
}

// ------------------------------------------------------------------ versions (?v=)
/* Every <script src> and <link href> that points at a local file gets ?v=<8 hex of its SHA-256>;
   other URLs (https:, data:, //host) are left alone. */
const TAG_RE = /<(script|link)\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi;
function versionAssets(html, root) {
  return html.replace(TAG_RE, (tag, name) => {
    const attr = name.toLowerCase() === 'script' ? 'src' : 'href';
    return tag.replace(new RegExp(`(\\s${attr}\\s*=\\s*)(["'])(.*?)\\2`, 'i'), (all, pre, q, url) =>
      (!url || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url) ? all : pre + q + withVersion(url, fileHash(root, url)) + q));
  });
}
function fileHash(root, url) {
  const rel = decodeURIComponent(url.split(/[?#]/)[0]), file = path.resolve(root, rel.replace(/^\/+/, ''));
  if (!file.startsWith(root + path.sep)) throw new Error(`index.html: ${url} points outside the site folder`);
  if (!isFile(file)) throw new Error(`index.html loads ${rel}, which does not exist`);
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 8);
}
function withVersion(url, v) {
  const [, file, query, frag] = /^([^?#]*)(?:\?([^#]*))?(#.*)?$/.exec(url);
  const parts = query ? query.split('&') : [], i = parts.findIndex(p => /^v(?:=|$)/.test(p));
  if (i >= 0) parts[i] = 'v=' + v; else parts.push('v=' + v);
  return file + '?' + parts.join('&') + (frag || '');
}

// ------------------------------------------------------------------ index.html
function build(rootDir) {
  const root = path.resolve(rootDir), { lessons, warnings } = collectLessons(root);
  const indexPath = path.join(root, 'index.html');
  if (!isFile(indexPath)) throw new Error(`index.html not found in ${root}`);
  const before = fs.readFileSync(indexPath, 'utf8'), eol = before.includes('\r\n') ? '\r\n' : '\n';
  const lines = before.split(/\r?\n/);
  const find = mark => lines.flatMap((l, i) => (l.trim() === mark ? [i] : []));
  const s = find(START), e = find(END);
  if (s.length !== 1 || e.length !== 1 || s[0] > e[0])
    throw new Error(`index.html needs one line ${START} and, after it, one line ${END} around the lesson <script> lines`);
  lines.forEach((l, i) => {
    if ((i < s[0] || i > e[0]) && /<script\b[^>]*\bsrc\s*=\s*["'](?:\.\/)?lessons\//i.test(l))
      warnings.push(`index.html line ${i + 1} loads a lesson outside the lessons block; delete that line (the block is written from content.js)`);
  });
  const indent = /^\s*/.exec(lines[s[0]])[0];
  const block = lessons.map(l => `${indent}<script src="${l.file}"></script>`);
  const html = versionAssets([...lines.slice(0, s[0] + 1), ...block, ...lines.slice(e[0])].join(eol), root);
  return { root, indexPath, before, html, lessons, warnings };
}

/* The index.html text this tool would write for the site in rootDir (writes nothing). */
function generateIndexHtml(rootDir) { return build(rootDir).html; }

/* Lines that differ between two texts (longest common subsequence), as "-L12 old" / "+L12 new". */
function lineDiff(a, b) {
  const A = a.split(/\r?\n/), B = b.split(/\r?\n/), n = A.length, m = B.length;
  const L = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = [];
  for (let i = 0, j = 0; i < n || j < m;) {
    if (i < n && j < m && A[i] === B[j]) { i++; j++; }
    else if (i < n && (j === m || L[i + 1][j] >= L[i][j + 1])) out.push(`-L${i + 1} ${A[i++]}`);
    else out.push(`+L${j + 1} ${B[j++]}`);
  }
  return out.length || a === b ? out : ['(only the line endings differ)'];
}

// ------------------------------------------------------------------ CLI
function main(argv) {
  let check = false, root = path.join(__dirname, '..');
  for (const a of argv) {
    if (a === '-h' || a === '--help') { console.log(USAGE); return 0; }
    if (a === '--check') check = true;
    else if (a.startsWith('-')) { console.error(`unknown option ${a}\n${USAGE}`); return 2; }
    else root = a;
  }
  let r;
  try { r = build(root); } catch (e) { console.error(`ERROR ${e.message}`); return 2; }
  for (const w of r.warnings) console.error(`WARN  ${w}`);
  if (r.html === r.before) { console.log(`index.html is up to date (${r.lessons.length} lessons)`); return 0; }
  const diff = lineDiff(r.before, r.html);
  if (check) {
    console.log(`index.html is not up to date (${diff.length} lines differ); run: node tools/register-lessons.js`);
    diff.forEach(d => console.log('  ' + d));
    return 1;
  }
  fs.writeFileSync(r.indexPath, r.html);
  console.log(`index.html updated (${r.lessons.length} lessons, ${diff.length} lines changed):`);
  diff.forEach(d => console.log('  ' + d));
  return 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { generateIndexHtml, collectLessons };
