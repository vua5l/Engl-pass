#!/usr/bin/env node
'use strict';
/*
 * content-check.js - automated content checker for the English Passport static site.
 *
 *   node content-check.js [siteRoot] [--unit N] [--quiet]
 *   node content-check.js [siteRoot] --map [--unit N]
 *
 *   siteRoot  folder that holds index.html (default: current directory)
 *   --unit N  check only unit N (0 = Foundation Week): its lessons, unit test and pre-test
 *   --quiet   hide INFO lines (counts and reports), print only ERROR / WARN and the summary
 *   --map     print ONE JSON object describing the course state for a dashboard (units, planned / built / open
 *             lessons, unit tests, pre-tests and their version, finding counts) and nothing else
 *
 * Plain Node (22), no browser, no npm packages.
 *
 * How it works
 *   1. Reads index.html, runs content.js and the lesson files (in the listed order) in a vm
 *      sandbox with a few stub globals, and obtains the data object (DATA) and LESSONS.
 *   2. Cuts the site's own answer checker (fixQuotes, norm, exactNorm, typedLooseOK, typedExactOK,
 *      typedOK) out of the app.js source text and evaluates it in the same sandbox, so the checks
 *      always use the same logic as the live site.
 *   3. Checks every lesson, every unit test and every pre-test, and prints one line per finding:
 *        ERROR|WARN|INFO  file | lesson id | field[item index] | message
 *      then a summary. Exit code 1 if there is at least one ERROR, otherwise 0.
 *
 * Checks (numbers follow the course checklist)
 *   1  required fields          2  vocab count 6-8          3  grammar count per group (16 = 4x4)
 *   4  every accepted answer passes the site checker (bare, whole sentence, curly apostrophe)
 *   5  cue giveaway / two-option cue                        6  one string accepted for >= 50% of typed items
 *   7  MCQ answer index and unique options                  8  explanation examples reused in exercises
 *   9  legal-vocabulary share                               10 listening rules (url, no transcript, targetSeconds)
 *   11 writing requires >= 4 sentences                      12 quiz present (count reported)
 *   Unit tests: count, typed answers, MCQ validity, sentences reused from the unit's lessons.
 *   Pre-tests: item count, typed share, checks 4-7, version field.
 *   Cross-lesson (course order, per unit): vocab introduced as new twice, exercise / quiz / test sentences repeated
 *   across lessons, and an INFO recycling report (vocab of earlier lessons of the unit and of the previous unit that
 *   reappears in the lesson). INFO lines never change the exit code.
 *   Extras: site wiring (index.html / unit lists), errCat names, hint-vs-answer, word-order chips, emoji.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ------------------------------------------------------------------ settings
const CFG = {
  vocabMin: 6, vocabMax: 8,            // check 2
  grammarPerGroup: 4,                  // check 3 (course decision: 4 per group, 16 per lesson)
  unitTestQuestions: 20,               // expected for numbered units (unit 0 is only reported)
  preTestItems: 10, preTestTypedMin: 0.8,
  singleAnswerShare: 0.5,              // check 6
  legalShareMax: 0.3,                  // check 9
  jaccardWarn: 0.8, minTokens: 3,      // check 8 and the unit-test reuse rule
  minSentences: 4,                     // check 11
  audioHosts: /(^|\.)(britishcouncil\.org|elllo\.org|bbc\.co\.uk|bbc\.com)$/i,   // README: approved listening sources
};
// Words that make a sentence "legal" (check 9). "sign" and "case" get extra rules below.
const LEGAL_RE = new RegExp('\\b(?:laws?|legal(?:ly)?|illegal|lawyers?|attorneys?|courts?|courtroom|judges?|contracts?|rights|' +
  'the right to|a right to|police|crimes?|criminal|signs?|signed|signing|witness(?:es)?|trial|lawsuit|sue[ds]?|verdict|' +
  'prosecutor|defendant|plaintiff|evidence|arrest(?:ed)?|guilty|innocent)\\b', 'i');
const NOT_LEGAL_SIGN_RE = /\b(?:road|traffic|street|stop|warning|exit|shop)\s+signs?\b|\bsign\s+(?:up|in|out|language)\b/gi;
const LEGAL_CASE_RE = /\b(?:court|legal|criminal|civil|law|lawyer's|client's)\s+cases?\b|\bcases?\s+(?:file|number|against)\b/i;
const EMOJI_RE = /\p{Emoji_Presentation}|\p{Extended_Pictographic}\uFE0F/u;

// ------------------------------------------------------------------ CLI
const USAGE = 'Usage: node content-check.js [siteRoot] [--unit N] [--quiet]\n' +
  '       node content-check.js [siteRoot] --map [--unit N]\n' +
  '  siteRoot  folder with index.html (default: current directory)\n' +
  '  --unit N  check only unit N (0 = Foundation Week)\n' +
  '  --quiet   hide INFO lines\n' +
  '  --map     print one JSON object with the state of the course (for a dashboard)';
const OPT = { quiet: false, map: false, unit: null, root: '.' };
{
  const argv = process.argv.slice(2), positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') { console.log(USAGE); process.exit(0); }
    else if (a === '-q' || a === '--quiet') OPT.quiet = true;
    else if (a === '--map') OPT.map = true;
    else if (a === '-u' || a === '--unit') OPT.unit = argv[++i];
    else if (a.startsWith('--unit=')) OPT.unit = a.slice(7);
    else if (a.startsWith('-')) { console.error(`unknown option ${a}\n${USAGE}`); process.exit(2); }
    else positional.push(a);
  }
  if (OPT.unit != null) {
    if (!/^\d+$/.test(String(OPT.unit))) { console.error(`--unit needs a unit number (0, 1, 2, ...)\n${USAGE}`); process.exit(2); }
    OPT.unit = Number(OPT.unit);
  }
  OPT.root = positional[0] || '.';
}
const QUIET = OPT.quiet;
const ROOT = path.resolve(OPT.root);
const num = v => (v !== null && v !== '' && Number.isFinite(Number(v)) ? Number(v) : 1e9);     // sort key for unit / lesson numbers
const inScope = u => OPT.unit == null || Number(u) === OPT.unit;                              // --unit filter

// ------------------------------------------------------------------ reporting
const results = [];
const counts = { ERROR: 0, WARN: 0, INFO: 0 };
class Fatal extends Error {}
/* One logger per file/id (and unit); each call adds a line "LEVEL file | id | field | message".
   head() puts INFO lines in front of this logger's other lines (in the order they were added). */
function logger(file, id, unit) {
  const start = results.length;
  let heads = 0;
  const entryOf = (level, field, msg) => ({
    level, unit: Number.isInteger(unit) ? unit : null,
    line: `${level.padEnd(5)} ${[file, id, field].filter(Boolean).join(' | ') || 'site'} | ${msg}`,
  });
  const make = level => (field, msg) => { counts[level]++; results.push(entryOf(level, field, msg)); };
  return {
    error: make('ERROR'), warn: make('WARN'), info: make('INFO'),
    head: (field, msg) => { counts.INFO++; results.splice(start + heads++, 0, entryOf('INFO', field, msg)); },
  };
}

// ------------------------------------------------------------------ small helpers
const isStr = v => typeof v === 'string' && v.trim() !== '';
const isArr = Array.isArray;
/* Array of at least `min` non-empty strings with no holes (every() skips holes, so spread the array first). */
const strList = (v, min = 1) => isArr(v) && v.length >= min && [...v].every(isStr);
const clip = (s, n = 64) => { s = String(s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 3) + '...' : s; };
const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0) + '%';
const q = s => '"' + clip(s) + '"';

// ------------------------------------------------------------------ loading the site (vm sandbox)
/* Run content.js and the lesson scripts listed in index.html; return the sandbox and what it produced. */
function loadSite(root) {
  const indexPath = path.join(root, 'index.html');
  if (!fs.existsSync(indexPath)) throw new Fatal(`index.html not found in ${root}`);
  const html = fs.readFileSync(indexPath, 'utf8');
  const scripts = [...html.matchAll(/<script\b[^>]*?\bsrc\s*=\s*["']([^"']+)["']/gi)]
    .map(m => m[1].split(/[?#]/)[0]).filter(s => !/^(?:[a-z]+:)?\/\//i.test(s));   // local scripts only
  const engine = scripts.find(s => /(^|\/)app\.js$/i.test(s)) || 'app.js';          // the engine is not data
  const sandbox = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  sandbox.window = sandbox; sandbox.self = sandbox;                                  // minimal browser stubs
  vm.createContext(sandbox);
  const site = { root, scripts, engine, ctx: sandbox, lessonFile: {}, dataFile: null };
  const siteLog = logger('index.html', '');
  for (const rel of scripts.filter(s => s !== engine)) {
    const file = path.join(root, rel);
    if (!fs.existsSync(file)) { siteLog.error(rel, 'script listed in index.html does not exist'); continue; }
    const before = new Set(Object.keys(sandbox.LESSONS || {}));
    try { vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: rel }); }
    catch (e) { logger(rel, '').error('', 'script failed to run: ' + e.message); continue; }
    for (const id of Object.keys(sandbox.LESSONS || {})) if (!before.has(id)) site.lessonFile[id] = rel;
    if (!site.dataFile && sandbox.DATA) site.dataFile = rel;
  }
  site.LESSONS = {};                                                        // keep only entries that are real objects
  const rawLessons = sandbox.LESSONS && typeof sandbox.LESSONS === 'object' ? sandbox.LESSONS : {};
  for (const id of Object.keys(rawLessons)) {
    const L = rawLessons[id];
    if (L && typeof L === 'object' && !Array.isArray(L)) site.LESSONS[id] = L;
    else logger(site.lessonFile[id] || site.dataFile || '?', id).error('', 'LESSONS entry is not an object');
  }
  site.DATA = sandbox.DATA && typeof sandbox.DATA === 'object' ? sandbox.DATA : null;
  if (!site.DATA) siteLog.error('DATA', 'no global DATA object after loading the scripts (expected "var DATA = window.DATA = {...}" in content.js)');
  site.dataFile = site.dataFile || 'content.js';
  const enginePath = path.join(root, engine);
  if (!fs.existsSync(enginePath)) throw new Fatal(`${engine} not found (needed for the site's answer checker)`);
  site.appSrc = fs.readFileSync(enginePath, 'utf8');
  return site;
}

// ------------------------------------------------------------------ taking the site's own checker out of app.js
/* Return the shortest piece of source starting at `start` and ending with `endChar` that compiles on its own. */
function scanUntilCompiles(src, start, endChar) {
  for (let pos = src.indexOf(endChar, start); pos >= 0; pos = src.indexOf(endChar, pos + 1)) {
    const cand = src.slice(start, pos + 1);
    try { new vm.Script(cand); return cand; } catch (_) { /* not complete yet, keep scanning */ }
  }
  return null;
}
/* Source of "function name(...){...}" or "var name = ...;" from app.js, or null. */
function extractDecl(src, name) {
  const last = re => { let m = null; for (const x of src.matchAll(re)) m = x; return m; };   // the last definition wins, as in the page
  for (const indent of ['', '[ \\t]*']) {                                                      // top-level first, then indented
    let m = last(new RegExp('(?:^|\\n)' + indent + '(function\\s+' + name + '\\s*\\()', 'g'));
    if (m) return scanUntilCompiles(src, m.index + m[0].indexOf('function'), '}');
    m = last(new RegExp('(?:^|\\n)' + indent + '((?:var|let|const)\\s+' + name + '\\s*=)', 'g'));
    if (m) return scanUntilCompiles(src, m.index + m[0].indexOf(m[1]), ';');
  }
  return null;
}
/* Load the answer-checker functions (and any helper they need, e.g. APOS_RE) into the sandbox. */
function loadChecker(site) {
  const ctx = site.ctx, loaded = new Set();
  const load = name => {
    if (loaded.has(name)) return true;
    const code = extractDecl(site.appSrc, name);
    if (!code) return false;
    vm.runInContext(code, ctx, { filename: site.engine + ':' + name });
    loaded.add(name);
    return true;
  };
  for (const n of ['fixQuotes', 'norm', 'exactNorm', 'typedLooseOK', 'typedExactOK', 'typedOK'])
    if (!load(n)) throw new Fatal(`cannot find "${n}" in ${site.engine} (the answer checker moved or was renamed; update content-check.js)`);
  // Smoke test: whatever the functions reference that is still undefined (a helper constant/function) is cut out of app.js too.
  const smoke = "typedOK({pre:'a',post:'b.',ans:['c']},\"a c b\")&&typedOK({pre:'a',post:'b.',ans:['C'],exact:true},'a C b.')&&norm('It\\u2019s')";
  for (let i = 0; i < 12; i++) {
    try { vm.runInContext(smoke, ctx); break; }
    catch (e) {
      const m = /(\w+) is not defined/.exec(e.message);
      if (!m || !load(m[1])) throw new Fatal('answer checker from app.js does not run in the sandbox: ' + e.message);
    }
  }
  const fx = vm.runInContext('({fixQuotes, norm, exactNorm, typedLooseOK, typedExactOK, typedOK})', ctx);
  // Optional pieces: category names and the default writing checks (missing ones only disable the matching extra check).
  const opt = name => (load(name) ? vm.runInContext(name, ctx) : null);
  site.fx = fx;
  site.errCats = (o => (o && typeof o === 'object' ? new Set(Object.keys(o)) : null))(opt('ERR_CATS'));
  site.defaultChecks = (c => (isArr(c) ? c : null))(opt('CHECKS'));
  // Can the engine show a typed question inside a unit test? (stUnitTestQ renders multiple choice only today.) null = unknown.
  const utq = extractDecl(site.appSrc, 'stUnitTestQ');
  site.unitTestTyping = utq == null ? null : /\bTyping\s*\(/.test(utq);
  return loaded;
}

// ------------------------------------------------------------------ text helpers (sentence comparison)
let fx;                                                 // the site's functions, set in main()
/* Canonical token list of a sentence: site normalisation + contractions spelled out. */
function tokensOf(s) {
  let t = fx.norm(s);
  t = t.replace(/\bcan't\b|\bcannot\b/g, 'can not').replace(/\bwon't\b/g, 'will not').replace(/\bshan't\b/g, 'shall not')
    .replace(/\blet's\b/g, 'let us').replace(/\bi'm\b/g, 'i am')
    .replace(/\b([a-z]+)n't\b/g, '$1 not').replace(/\b([a-z]+)'re\b/g, '$1 are').replace(/\b([a-z]+)'ve\b/g, '$1 have')
    .replace(/\b([a-z]+)'ll\b/g, '$1 will').replace(/\b([a-z]+)'d\b/g, '$1 would')
    .replace(/\b(he|she|it|that|there|here|what|who|where|how)'s\b/g, '$1 is');
  return t.replace(/'/g, '').split(/\s+/).filter(Boolean);
}
function jaccard(a, b) {                                 // a, b: Sets
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
}
/* Build a comparable entry {text, src, tokens, key, set} (null if the sentence is too short to compare). */
function entry(text, src, extra) {
  const tokens = tokensOf(text);
  if (tokens.length < CFG.minTokens) return null;
  return Object.assign({ text, src, tokens, key: tokens.join(' '), set: new Set(tokens) }, extra);
}
/* Exact normalised match first, then the best Jaccard >= 0.8. */
function bestOverlap(text, pool) {
  const e = entry(text, '');
  if (!e) return null;
  let best = null;
  for (const p of pool) {
    if (p.key === e.key) return { exact: true, p, jac: 1 };
    const j = jaccard(e.set, p.set);
    if (j >= CFG.jaccardWarn && (!best || j > best.jac)) best = { exact: false, p, jac: j };
  }
  return best;
}
const ABBR_RE = /\b(?:Mr|Mrs|Ms|Dr|Prof|St|vs|etc|e\.g|i\.e)\./g;
function splitSentences(text) {
  return String(text).replace(ABBR_RE, m => m.replace(/\./g, '\u0001'))
    .split(/(?<=[.!?])\s+(?=\S)|(?<=[.!?])(?=[A-Z])|\n+/).map(s => s.replace(/\u0001/g, '.').trim()).filter(Boolean);
}
function decodeEntities(s) {
  return s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&');
}
/* English sentences inside a piece of lesson HTML (block tags and Arabic runs split the text). */
function htmlSentences(html) {
  const text = decodeEntities(String(html || '')
    .replace(/<\/?(?:p|div|li|ul|ol|td|th|tr|table|thead|tbody|h[1-6]|text|small|svg|br|pre|section)\b[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, ''));
  const out = [];
  for (const line of text.split(/\n+/))
    for (const piece of line.split(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+/))
      for (const part of piece.split(/\s[·•|]\s|[·•]/))
        for (const s of splitSentences(part.replace(/[✓✔✗✘✕→←↔⇒]/g, ' ').replace(/\([^)]*\)/g, ' ').replace(/^[\s\d.)\-–—:]+/, ' ')))
          out.push(s);
  return out;
}
/* Plain sentences from a string that may hold " · " separated examples. */
function plainSentences(text) {
  return String(text || '').split(/\s[·•]\s/).flatMap(splitSentences);
}
/* Reading passages carry markup: [[word|arabic]], {shown|lemma}, <<s:...>>, <br>. Return plain English. */
function unmark(s) {
  let t = String(s), prev;
  do {
    prev = t;
    t = t.replace(/\[\[([^\[\]|]*)\|[^\[\]]*\]\]/g, '$1').replace(/\{([^{}|]*)\|[^{}]*\}/g, '$1').replace(/\{([^{}]*)\}/g, '$1')
      .replace(/<<[a-z]+:/g, '').replace(/>>/g, '');
  } while (t !== prev);
  return t.replace(/<br\s*\/?>/gi, ' ');
}
/* pre + answer + post as the learner would read it; glue=true attaches a contraction ('s) to the previous word. */
function wholeSentence(x, a, glue) {
  const pre = isStr(x.pre) && x.pre !== '___' ? x.pre : '';
  const post = x.post || '';
  const left = glue && a.startsWith("'") ? pre + a : [pre, a].filter(Boolean).join(' ');
  return (left + (post && !/^[.!?,]/.test(post) ? ' ' : '') + post).trim();
}
/* Can the chips be arranged (joined with single spaces) into exactly `ans`? Same comparison as the engine's Builder. */
function canOrder(chips, ans) {
  const used = chips.map(() => false);
  const rec = rest => {
    if (rest === '') return used.every(Boolean);
    for (let i = 0; i < chips.length; i++) {
      if (used[i]) continue;
      if (rest === chips[i] || rest.startsWith(chips[i] + ' ')) {
        used[i] = true;
        if (rec(rest === chips[i] ? '' : rest.slice(chips[i].length + 1))) return true;
        used[i] = false;
      }
    }
    return false;
  };
  return rec(ans);
}
/* The sentence(s) an exercise item shows when answered correctly (used by checks 8 and 9 and the unit-test rule). */
function mcqSentences(x) {
  const stem = isStr(x.s) ? x.s : isStr(x.prompt) ? x.prompt : x.q;
  const right = isArr(x.opts) ? x.opts[x.a] : null;
  if (!isStr(stem) || !isStr(right)) return [];
  if (stem.includes('___')) return [stem.replace('___', right)];          // gap sentence completed with the right option
  return tokensOf(right).length >= 4 ? [right] : [];                      // options that are whole sentences
}
function itemSentences(kind, x) {
  switch (kind) {
    case 'recall': return isArr(x.ans) && isStr(x.ans[0]) ? [wholeSentence({ pre: x.sentPre, post: x.sentPost }, x.ans[0], true)] : [];
    case 'typing': return isArr(x.ans) ? x.ans.filter(isStr).slice(0, 3).map(a => wholeSentence(x, a, true)) : [];
    case 'gB': return [x.s, x.fix].filter(isStr);
    case 'gD': return [x.ans].filter(isStr);
    default: return mcqSentences(x);
  }
}

// ------------------------------------------------------------------ generic item checks
function need(log, field, obj, key, level) {
  if (!obj || !isStr(obj[key])) { log[level || 'error'](field, `missing "${key}"`); return false; }
  return true;
}
/* Warn when the English or Arabic explanation is missing (the learner sees an empty feedback card). */
function needWhy(log, field, x) {
  if (!isStr(x.whyEn)) log.warn(field, 'missing "whyEn" (English explanation)');
  if (!isStr(x.why)) log.warn(field, 'missing "why" (Arabic explanation)');
}
function checkErrCat(log, field, x, S) {
  if (x.errCat != null && S.errCats && !S.errCats.has(x.errCat))
    log.warn(field, `errCat "${x.errCat}" has no entry in ERR_CATS (app.js), so it is shown as "general"`);
}
/* Check 7: answer index in range, options unique. `keys` renames the stem/options fields (reading questions use q). */
function checkMcq(log, field, x, keys) {
  const k = Object.assign({ stem: 's', opts: 'opts' }, keys);
  if (!isStr(x[k.stem])) log.error(field, `missing "${k.stem}" (question text)`);
  const opts = x[k.opts];
  if (!strList(opts, 2)) { log.error(field, `"${k.opts}" must be an array of at least 2 non-empty strings`); return false; }
  if (!Number.isInteger(x.a) || x.a < 0 || x.a >= opts.length) log.error(field, `answer index a=${JSON.stringify(x.a)} is out of range (valid: 0..${opts.length - 1})`);
  const seen = new Map();
  opts.forEach((o, i) => {
    const key = o.trim().replace(/\s+/g, ' ');              // case-sensitive: "english" and "English" are different options
    if (seen.has(key)) log.error(field, `options ${seen.get(key)} and ${i} are identical (${q(o)})`);
    else seen.set(key, i);
  });
  return true;
}

// ------------------------------------------------------------------ typed items (checks 4, 5, 6)
/* Typed entry: {x, field, recall}. Recall items only compare the typed word (no pre/post stripping), so they are
   checked through typedOK with empty pre/post, which is exactly what RecallTyping does. */
const asChecker = t => (t.recall ? { ans: t.x.ans, exact: t.x.exact, pre: '', post: '' } : t.x);
const hasAns = t => strList(t.x.ans, 1);
/* 's after any word is natural ("the baby's"); 'm 're 've 'll 'd only after a pronoun ("I'm", "they're"). */
function naturalContraction(pre, a) {
  const last = String(pre || '').trim().split(/\s+/).pop().toLowerCase().replace(/[^a-z']/g, '');
  return /^'s/i.test(a) ? !!last : /^(?:i|you|we|they|he|she|it|there|that|who|what|here|where)$/.test(last);
}
/* Check 4: every accepted answer must pass the site checker in every way a learner may type it. */
function checkAcceptedAnswers(log, t) {
  const x = t.x, cx = asChecker(t);
  if (!hasAns(t)) { log.error(t.field, '"ans" must be a non-empty array of non-empty strings'); return; }
  const bad = [], soft = [];
  for (const a of x.ans) {
    const forms = [['answer', a]];
    if (!x.exact && a !== a.toLowerCase()) forms.push(['lower-case answer', a.toLowerCase()]);
    if (!t.recall) forms.push(['whole sentence', wholeSentence(x, a, false)]);
    for (const [how, v] of forms.slice()) if (v.includes("'")) forms.push([how + ' with curly apostrophe', v.replace(/'/g, '\u2019')]);
    for (const [how, v] of forms) if (!fx.typedOK(cx, v)) bad.push(`${how} ${q(v)}`);
    if (!t.recall && a.startsWith("'") && naturalContraction(x.pre, a)) {      // "The baby's sleeping." typed in full
      const v = wholeSentence(x, a, true);
      if (!fx.typedOK(cx, v)) soft.push(q(v));
    }
    // Capital-letter items must not also accept the lower-case form.
    if (x.exact && a !== a.toLowerCase() && fx.typedOK(cx, a.toLowerCase()))
      log.error(t.field, `exact:true item also accepts the lower-case ${q(a.toLowerCase())}`);
  }
  if (bad.length) log.error(t.field, `accepted answer rejected by the site checker: ${bad.slice(0, 3).join('; ')}${bad.length > 3 ? `; (+${bad.length - 3} more)` : ''}`);
  if (soft.length) log.warn(t.field, `whole sentence with the contraction glued to the previous word is rejected: ${soft[0]}`);
  // A mid-sentence capital (I, names) without exact:true accepts lower case, so the capital is not tested.
  const pre = t.recall ? x.sentPre : x.pre;
  if (!x.exact && isStr(pre) && !/[.!?]\s*$/.test(pre) && x.ans.some(a => /^[A-Z]/.test(a)) && x.ans.every(a => /^[A-Z]/.test(a)))
    log.warn(t.field, `answer starts with a capital in the middle of a sentence but exact:true is not set (lower case would be accepted)`);
}
/* Check 5: the visible cue must not hand over the answer. */
function checkCue(log, t) {
  const x = t.x;
  if (!hasAns(t)) return;
  const cx = asChecker(t);
  const exact = !!x.exact;
  const same = (f, a) => (exact ? fx.exactNorm(f) === fx.exactNorm(a) : fx.norm(f) !== '' && fx.norm(f) === fx.norm(a));
  const cues = t.recall ? [x.promptEn, x.cueEn] : [x.verb, x.cue, x.cueEn];
  for (const cue of cues.filter(isStr)) {
    // Forms of the cue a learner could copy: whole cue, without (notes), after "label:", before " - note".
    const noParen = cue.replace(/\([^)]*\)/g, ' ');
    const forms = new Set([cue, noParen]);
    if (cue.includes(':')) forms.add(cue.split(':').slice(1).join(':'));
    const dash = noParen.split(/\s[—–-]\s/); if (dash.length > 1) forms.add(dash[0]);
    let hit = null, shuffled = null;
    for (const f of [...forms].map(s => s.trim()).filter(Boolean)) {
      for (const a of x.ans) {
        if (same(f, a)) hit = hit || [f, a];
        else if (!exact && fx.norm(a).split(' ').length >= 2 && fx.norm(f).split(' ').sort().join(' ') === fx.norm(a).split(' ').sort().join(' ')) shuffled = shuffled || [f, a];
      }
    }
    if (hit) { log.error(t.field, `cue ${q(cue)} equals the accepted answer ${q(hit[1])} (the learner can copy it)`); return; }
    if (shuffled) log.warn(t.field, `cue ${q(cue)} has the same words as the accepted answer ${q(shuffled[1])} in another order`);
    // Two options "a / b" where the answer is one of them: a choice disguised as typing.
    if (!t.recall) {
      for (const f of new Set([cue, ...(cue.includes(':') ? [cue.split(':').slice(1).join(':')] : [])])) {
        if (!f.includes('/')) continue;
        const parts = f.split('/').map(p => fx.norm(p)).filter(Boolean);
        const ans = x.ans.find(a => parts.includes(fx.norm(a)));
        if (parts.length >= 2 && ans) {
          log.warn(t.field, `cue ${q(cue)} lists ${parts.length === 2 ? 'two options' : parts.length + ' options'} and the answer ${q(ans)} is one of them (a choice disguised as typing)`);
          return;
        }
      }
    }
  }
}
/* Check 6: one string that most typed items would accept (e.g. "that" for every relative-clause item). */
function checkSingleAnswer(log, field, list) {
  const typed = list.filter(hasAns);
  if (typed.length < 2) return;
  const cands = new Set();
  typed.forEach(t => t.x.ans.forEach(a => cands.add(a)));
  const found = new Map();                                            // "hit indexes" -> {c, hits}
  for (const c of cands) {
    const hits = typed.filter(t => fx.typedOK(asChecker(t), c));
    if (hits.length / typed.length >= CFG.singleAnswerShare) {
      const key = hits.map(t => t.field).join(',') + '|' + fx.norm(c);
      if (!found.has(key)) found.set(key, { c, hits });
    }
  }
  const sorted = [...found.values()].sort((a, b) => b.hits.length - a.hits.length);
  sorted.slice(0, 3).forEach(r => log.warn(field,
    `the single string ${q(r.c)} would be accepted for ${r.hits.length} of ${typed.length} typed items (${pct(r.hits.length, typed.length)}): ${r.hits.map(t => t.field.replace(/^.*\[(\d+)\]$/, '$1')).join(', ')}`));
  if (sorted.length > 3) log.warn(field, `(+${sorted.length - 3} more strings reach ${pct(1, 2)} or more)`);
}
function checkTypedGroup(log, field, list) {
  list.forEach(t => { checkAcceptedAnswers(log, t); checkCue(log, t); });
  checkSingleAnswer(log, field, list);
}
/* Recall hint such as "s _ _ _ g (8 letters)" must fit at least one accepted answer. */
function checkRecallHint(log, field, x) {
  const m = /^\s*((?:[A-Za-z_]\s+)*[A-Za-z_])\s*\((\d+)\s+letters?/i.exec(typeof x.hint === 'string' ? x.hint : '');
  if (!m || !strList(x.ans)) return;
  const pattern = m[1].replace(/\s+/g, ''), len = Number(m[2]);
  const fits = x.ans.some(a => {
    const w = a.replace(/\s+/g, '');
    return w.length === len && pattern.length === len && [...pattern].every((c, i) => c === '_' || c === w[i]);
  });
  if (!fits) log.warn(field, `hint ${q(x.hint)} does not fit any accepted answer (${x.ans.map(q).join(', ')})`);
}

// ------------------------------------------------------------------ lesson checks
function exerciseItems(L) {                                              // every graded sentence of a lesson
  const items = [];
  const add = (key, kind) => (isArr(L[key]) ? L[key] : []).forEach((x, i) => items.push({ field: `${key}[${i}]`, kind, x }));
  add('recall', 'recall'); add('vocabGaps', 'mcq'); add('gA', 'mcq'); add('gB', 'gB'); add('gC', 'typing'); add('gD', 'gD'); add('quiz', 'mcq');
  return items;
}
/* Example sentences the learner has just been shown: grammar cards (primary), vocab and insight examples (secondary). */
function explanationExamples(L) {
  const out = [];
  const push = (text, src, primary) => { const e = entry(text, src, { primary }); if (e) out.push(e); };
  (isArr(L.gCards) ? L.gCards : []).forEach((c, i) => {
    if (!c || typeof c !== 'object') return;
    for (const [k, v] of Object.entries(c)) {
      if (/^(enHtml|html|arHtml)$/.test(k) && isStr(v)) htmlSentences(v).forEach(s => push(s, `gCards[${i}]`, true));
      else if (/^ex/i.test(k) && isStr(v)) plainSentences(v).forEach(s => push(s, `gCards[${i}].${k}`, true));
      else if (/^ex/i.test(k) && isArr(v)) v.filter(isStr).forEach(s => plainSentences(s).forEach(p => push(p, `gCards[${i}].${k}`, true)));
    }
  });
  (isArr(L.vocab) ? L.vocab : []).forEach((v, i) => plainSentences(v && v.ex).forEach(s => push(s, `vocab[${i}].ex`, false)));
  if (L.legalPhrase) plainSentences(L.legalPhrase.ex).forEach(s => push(s, 'legalPhrase.ex', false));
  for (const part of [L.reading, L.listening]) if (part && part.insight)
    for (const k of Object.keys(part.insight)) if (/^ex\d*$/.test(k)) plainSentences(part.insight[k]).forEach(s => push(s, `${part === L.reading ? 'reading' : 'listening'}.insight.${k}`, false));
  return out;
}
/* Check 8: exercises, quiz items must not reuse an explanation example. */
function checkExampleReuse(log, L) {
  const examples = explanationExamples(L);
  for (const it of exerciseItems(L)) {
    const seen = new Set();
    for (const s of itemSentences(it.kind, it.x)) {
      const m = bestOverlap(s, examples);
      if (!m) continue;
      const key = m.p.src + '|' + m.p.key;
      if (seen.has(key)) continue;
      seen.add(key);
      const what = `${q(s)} ${m.exact ? 'repeats' : `overlaps (Jaccard ${m.jac.toFixed(2)}) with`} the ${m.p.primary ? 'explanation' : 'lesson'} example ${q(m.p.text)} (${m.p.src})`;
      if (m.exact && m.p.primary) log.error(it.field, what);
      else log.warn(it.field, what);
    }
  }
}
/* Check 9: share of exercise + quiz items that use legal vocabulary. */
function legalShare(L) {
  const items = exerciseItems(L);
  let legal = 0;
  for (const it of items) {
    const texts = itemSentences(it.kind, it.x);
    if (it.kind === 'mcq' && isArr(it.x.opts) && isStr(it.x.s) && !it.x.s.includes('___')) texts.push(it.x.s + ' ' + it.x.opts.join(' '));
    if (it.kind === 'typing' && isStr(it.x.pre)) texts.push(it.x.pre + ' ' + (it.x.post || ''));
    if (texts.some(t => { const s = String(t).replace(NOT_LEGAL_SIGN_RE, ' '); return LEGAL_RE.test(s) || LEGAL_CASE_RE.test(s); })) legal++;
  }
  return { legal, total: items.length, share: items.length ? legal / items.length : 0 };
}
/* The sentence count the lesson's writing checks really enforce (probe the site's own ok() function). */
function enforcedSentences(checks) {
  const c = checks.find(c => c && c.k === 'sentences') || checks.find(c => c && /sentence/i.test(c.tEn || ''));
  if (!c || typeof c.ok !== 'function') return null;
  for (let n = 0; n <= 12; n++) {
    const text = Array(n).fill('This is a short sample sentence.').join(' ');       // some checks also read the text itself
    try { if (c.ok({ words: 6 * n, sentences: n, runOn: false, cont: 0, sig: 0, used: [] }, text)) return n; } catch (_) { return null; }
  }
  return null;
}
const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8 };
function statedSentences(text) {
  const m = /\b(\d+|one|two|three|four|five|six|seven|eight)\s+(?:separate\s+|short\s+|full\s+|clear\s+)?sentences\b/i.exec(text || '');
  return m ? (NUMBER_WORDS[m[1].toLowerCase()] || Number(m[1])) : null;
}
function checkWriting(log, L, S) {
  const W = L.writing;
  if (!W || typeof W !== 'object') return;
  need(log, 'writing', W, 'taskEn'); need(log, 'writing', W, 'task', 'warn');
  if (!need(log, 'writing', W, 'model')) { /* reported */ }
  const own = isArr(W.checks);
  const checks = own ? W.checks : S.defaultChecks;
  const enforced = checks ? enforcedSentences(checks) : null;
  const stated = statedSentences(W.taskEn);
  if (enforced == null) log.warn('writing', checks ? 'the writing checks do not enforce a minimum number of sentences' : 'cannot tell how many sentences the writing task requires (no checks and no default CHECKS in app.js)');
  else if (enforced < CFG.minSentences) log.warn('writing.checks', `the checks accept ${enforced} sentences; the course needs at least ${CFG.minSentences}`);
  if (stated == null) log.warn('writing.taskEn', `the task text does not state a number of sentences (needs "at least ${CFG.minSentences}")`);
  else if (stated < CFG.minSentences) log.warn('writing.taskEn', `the task asks for ${stated} sentences; the course needs at least ${CFG.minSentences}`);
  if (enforced != null && stated != null && enforced !== stated) log.warn('writing', `task text says ${stated} sentences but the checks enforce ${enforced}`);
  if (isStr(W.model)) {
    const n = splitSentences(W.model).filter(s => (s.match(/[A-Za-z']+/g) || []).length >= 3).length;
    if (n < Math.max(CFG.minSentences, enforced || 0)) log.warn('writing.model', `the model answer has only ${n} sentences`);
  }
  return { enforced, stated, own };
}
function checkListening(log, L) {
  const A = L.listening;
  if (!A) return;
  need(log, 'listening', A, 'title');
  if (!isStr(A.url) || !/^https?:\/\//i.test(A.url)) log.error('listening.url', 'missing or not an http(s) address (listening lessons must link to the real recording)');
  else {
    try {
      const u = new URL(A.url);
      if (!CFG.audioHosts.test(u.hostname)) log.warn('listening.url', `host ${u.hostname} is not one of the approved sources (LearnEnglish / BBC / ELLLO)`);
      if (u.pathname.split('/').filter(Boolean).length < 2) log.warn('listening.url', 'looks like an index page; it must open the clip page itself');
    } catch (_) { log.error('listening.url', 'not a valid URL'); }
  }
  for (const k of ['transcriptParas', 'transcript', 'paras'])           // the engine reads all three as a transcript
    if (A[k] != null) log.error(`listening.${k}`, 'the recording transcript must not be copied into the site (copyright); remove it');
  if (L.transcriptParas != null) log.error('transcriptParas', 'the recording transcript must not be copied into the site (copyright); remove it');
  if (!(Number(A.targetSeconds) > 0)) log.warn('listening.targetSeconds', 'missing or invalid (the timer falls back to 90 seconds)');
  if (L.reading) log.warn('reading', 'lesson has both reading and listening');
}
function checkComprehension(log, part, name) {                           // reading or listening questions + predict question
  if (!part) return;
  if (!isArr(part.questions) || !part.questions.length) log.error(`${name}.questions`, 'missing or empty');
  else part.questions.forEach((x, i) => {
    const f = `${name}.questions[${i}]`;
    if (x.tf) {                                                          // true/false question: a is a boolean
      need(log, f, x, 'q');
      if (typeof x.a !== 'boolean') log.error(f, 'true/false question needs "a" to be true or false');
    } else checkMcq(log, f, x, { stem: 'q' });
    needWhy(log, f, x);
  });
  const p = part.predict;
  if (!p) log.warn(`${name}.predict`, 'missing the main-idea (predict) question');
  else {
    checkMcq(log, `${name}.predict`, { s: p.qEn, opts: p.optsEn, a: p.a });
    if (isArr(p.opts) && isArr(p.optsEn) && p.opts.length !== p.optsEn.length) log.warn(`${name}.predict`, 'Arabic and English option counts differ');
  }
}

function checkLesson(id, L, S) {
  const file = S.lessonFile[id] || '?';
  const log = logger(file, id, L.unit);
  // 1. required fields
  if (L.id !== id) log.error('id', `lesson id ${q(L.id)} does not match LESSONS key ${q(id)}`);
  for (const k of ['unit', 'n']) if (!Number.isInteger(L[k])) log.error(k, 'missing or not an integer');
  for (const k of ['mode', 'en', 'ar']) need(log, k, L, k);
  for (const k of ['recall', 'vocab', 'vocabGaps', 'gCards', 'gA', 'gB', 'gC', 'gD', 'quiz'])
    if (!isArr(L[k]) || !L[k].length) log.error(k, 'missing or empty array');
  for (const k of ['legalPhrase', 'writing']) if (!L[k] || typeof L[k] !== 'object') log.error(k, 'missing');
  if (!L.reading && !L.listening) log.error('reading', 'lesson has neither "reading" nor "listening"');
  if (L.mode && !['reading', 'listening'].includes(L.mode)) log.warn('mode', `unexpected mode ${q(L.mode)}`);
  if (L.mode === 'reading' && !L.reading) log.error('reading', 'mode is "reading" but there is no "reading" object');
  if (L.mode === 'listening' && !L.listening) log.error('listening', 'mode is "listening" but there is no "listening" object');
  const A = k => (isArr(L[k]) ? L[k] : []);

  // recall (typed): fields + checks 4-6
  A('recall').forEach((x, i) => {
    const f = `recall[${i}]`;
    if (!isStr(x.promptEn) && !isStr(x.promptAr)) log.warn(f, 'no prompt (promptEn / promptAr)');
    if (x.sentPre == null && x.sentPost == null) log.error(f, 'no sentence around the blank (sentPre / sentPost)');
    if (!isStr(x.spellNoteEn) && !isStr(x.spellNote) && !isStr(x.spellNoteAr)) log.warn(f, 'no spelling note');
    checkRecallHint(log, f, x); checkErrCat(log, f, x, S);
  });
  checkTypedGroup(log, 'recall', A('recall').map((x, i) => ({ x, field: `recall[${i}]`, recall: true })));

  // vocab (check 2) and the legal phrase
  A('vocab').forEach((v, i) => {
    const f = `vocab[${i}]`;
    for (const k of ['en', 'ar', 'ex']) need(log, f, v, k);
    for (const k of ['pos', 'say', 'exAr', 'tipEn', 'tip']) need(log, f, v, k, 'warn');
  });
  if (A('vocab').length && (A('vocab').length < CFG.vocabMin || A('vocab').length > CFG.vocabMax))
    log.warn('vocab', `${A('vocab').length} vocab items; the course uses ${CFG.vocabMin}-${CFG.vocabMax}`);
  if (L.legalPhrase) {
    for (const k of ['en', 'ar', 'ex']) need(log, 'legalPhrase', L.legalPhrase, k);
    for (const k of ['exAr', 'tipEn', 'tip']) need(log, 'legalPhrase', L.legalPhrase, k, 'warn');
  }
  A('vocabGaps').forEach((x, i) => { checkMcq(log, `vocabGaps[${i}]`, x); needWhy(log, `vocabGaps[${i}]`, x); checkErrCat(log, `vocabGaps[${i}]`, x, S); });

  // grammar cards and the four exercise groups (check 3)
  A('gCards').forEach((c, i) => {
    need(log, `gCards[${i}]`, c, 'tEn');
    if (!isStr(c.enHtml) && !isStr(c.html)) log.error(`gCards[${i}]`, 'missing "enHtml"');
    if (!c.bilingual && !isStr(c.arHtml)) log.warn(`gCards[${i}]`, 'no "arHtml" (and not marked bilingual)');
  });
  A('gA').forEach((x, i) => { checkMcq(log, `gA[${i}]`, x); needWhy(log, `gA[${i}]`, x); checkErrCat(log, `gA[${i}]`, x, S); });
  A('gB').forEach((x, i) => {
    const f = `gB[${i}]`;
    need(log, f, x, 's');
    if (typeof x.ok !== 'boolean') log.error(f, '"ok" must be true or false');
    else if (!x.ok) {
      if (!isStr(x.fix)) log.error(f, 'item with a mistake needs "fix" (the corrected sentence)');
      else if (x.fix.trim().replace(/\s+/g, ' ') === x.s.trim().replace(/\s+/g, ' ')) log.error(f, '"fix" is the same as "s" (nothing to correct)');
    }
    needWhy(log, f, x); checkErrCat(log, f, x, S);
  });
  if (A('gB').length >= 3 && A('gB').every(x => x.ok === A('gB')[0].ok))
    log.warn('gB', `all ${A('gB').length} items have ok:${A('gB')[0].ok} (always the same answer)`);
  A('gC').forEach((x, i) => {
    const f = `gC[${i}]`;
    for (const k of ['pre', 'post']) if (typeof x[k] !== 'string') log.error(f, `missing "${k}" (use "" when empty)`);
    need(log, f, x, 'verb'); needWhy(log, f, x); checkErrCat(log, f, x, S);
  });
  checkTypedGroup(log, 'gC', A('gC').map((x, i) => ({ x, field: `gC[${i}]`, recall: false })));
  A('gD').forEach((x, i) => {
    const f = `gD[${i}]`;
    if (!strList(x.chips, 3)) { log.error(f, '"chips" must be an array of at least 3 non-empty strings'); return; }
    if (!isStr(x.ans)) log.error(f, 'missing "ans" (the correct sentence)');
    else if (!canOrder(x.chips, x.ans)) log.error(f, 'no order of the chips produces "ans" (the learner can never be right)');
    else if (x.chips.join(' ') === x.ans) log.warn(f, 'chips are already in the correct order');
    needWhy(log, f, x); checkErrCat(log, f, x, S);
  });
  const g = ['gA', 'gB', 'gC', 'gD'].map(k => A(k).length), gTotal = g.reduce((a, b) => a + b, 0);
  if (g.some(n => n !== CFG.grammarPerGroup)) log.warn('grammar', `${gTotal} grammar exercises (gA=${g[0]} gB=${g[1]} gC=${g[2]} gD=${g[3]}); the course decision is ${CFG.grammarPerGroup * 4} (${CFG.grammarPerGroup} per group)`);

  // reading / listening (check 10), writing (check 11), quiz (check 12)
  if (L.reading) {
    need(log, 'reading', L.reading, 'title');
    if (!isArr(L.reading.paras) || !L.reading.paras.length) log.error('reading.paras', 'missing or empty');
  }
  checkComprehension(log, L.reading, 'reading');
  checkListening(log, L);
  checkComprehension(log, L.listening, 'listening');
  const w = checkWriting(log, L, S) || {};
  A('quiz').forEach((x, i) => { checkMcq(log, `quiz[${i}]`, x); needWhy(log, `quiz[${i}]`, x); checkErrCat(log, `quiz[${i}]`, x, S); });

  // 8. explanation examples reused in exercises; 9. legal share
  checkExampleReuse(log, L);
  const recycling = checkAcrossLessons(log, id, S);                          // cross-lesson checks + recycling report
  const ls = legalShare(L);
  if (ls.share > CFG.legalShareMax) log.warn('legal', `${ls.legal} of ${ls.total} exercise + quiz items (${pct(ls.legal, ls.total)}) use legal vocabulary; the limit is ${pct(CFG.legalShareMax * 100, 100)}`);

  log.head('counts', `mode=${L.mode} recall=${A('recall').length} vocab=${A('vocab').length} vocabGaps=${A('vocabGaps').length} gCards=${A('gCards').length} ` +
    `grammar=${gTotal} (gA=${g[0]} gB=${g[1]} gC=${g[2]} gD=${g[3]}) quiz=${A('quiz').length} | ` +
    `${L.reading ? 'reading' : 'listening'} questions=${((L.reading || L.listening || {}).questions || []).length} | ` +
    `writing needs ${w.enforced != null ? w.enforced : '?'} sentences (${w.own ? 'own checks' : 'default checks'}) | legal share ${pct(ls.legal, ls.total)} (${ls.legal}/${ls.total})`);
  recycling.forEach(([field, msg]) => log.head(field, msg));                 // INFO lines right after the counts line
  // emoji anywhere in the lesson text
  scanEmoji(log, L, '');
}
function scanEmoji(log, obj, p, depth = 0) {
  if (depth > 8 || obj == null) return;
  if (typeof obj === 'string') { const m = EMOJI_RE.exec(obj); if (m) log.warn(p, `emoji ${m[0]} in text (${q(obj)})`); return; }
  if (typeof obj !== 'object') return;
  for (const k of Object.keys(obj)) scanEmoji(log, obj[k], p ? (isArr(obj) ? `${p}[${k}]` : `${p}.${k}`) : k, depth + 1);
}

// ------------------------------------------------------------------ cross-lesson checks (course order) and recycling report
/* Lesson ids in course order: unit, then lesson number n, then id. */
function orderedLessonIds(LESSONS) {
  return Object.keys(LESSONS).sort((a, b) => num(LESSONS[a].unit) - num(LESSONS[b].unit) || num(LESSONS[a].n) - num(LESSONS[b].n) || a.localeCompare(b));
}
/* Vocab key: normalised words, light plural strip on the last word ("lawyers" = "lawyer"). */
function vocabKey(en) {
  const t = fx.norm(String(en).replace(/\([^)]*\)/g, ' ')).split(' ').filter(Boolean);
  if (t.length) t[t.length - 1] = t[t.length - 1].replace(/(?<=.{3})ies$/, 'y').replace(/(?<=.{3}[^s])s$/, '');
  return t.join(' ');
}
const STOP_WORDS = new Set('a an the to of in on at for with from by and or be is are am your my his her their our someone something somebody sb sth up'.split(' '));
/* Inflected spellings of one word: lawyer -> lawyers; study -> studies, studying; write -> writing; stop -> stopping. */
function wordForms(w) {
  const f = new Set([w, w + 's', w + 'es', w + 'ed', w + 'd', w + 'ing', w + 'er']);
  if (/e$/.test(w)) { f.add(w.slice(0, -1) + 'ing'); f.add(w.slice(0, -1) + 'er'); }
  if (/[^aeiou]y$/.test(w)) ['ies', 'ied', 'ier'].forEach(e => f.add(w.slice(0, -1) + e));
  if (/[^aeiou][aeiou][^aeiouwxy]$/.test(w)) ['ing', 'ed', 'er'].forEach(e => f.add(w + w.slice(-1) + e));
  return f;
}
/* A vocab item counts as "used" in a sentence when every content word of it is there (in some inflected form). */
function vocabNeeds(en) {
  const words = fx.norm(String(en).replace(/\([^)]*\)/g, ' ')).split(' ').filter(Boolean);
  const content = words.filter(w => !STOP_WORDS.has(w));
  return (content.length ? content : words).map(wordForms);
}
/* Items a lesson introduces as new: its vocab list and its legal phrase. */
function vocabItemsOf(id, L) {
  const out = [];
  const add = (en, field) => { if (isStr(en)) { const key = vocabKey(en); if (key) out.push({ en, key, lesson: id, field, need: vocabNeeds(en) }); } };
  (isArr(L.vocab) ? L.vocab : []).forEach((v, i) => add(v && v.en, `vocab[${i}]`));
  if (L.legalPhrase) add(L.legalPhrase.en, 'legalPhrase');
  return out;
}
/* Graded sentences of a lesson (recall, vocab gaps, gA-gD, quiz) as comparable entries. */
function exerciseEntriesOf(id, L) {
  const out = [];
  for (const it of exerciseItems(L)) {
    const seen = new Set();
    for (const s of itemSentences(it.kind, it.x)) {
      const e = entry(s, `${id} ${it.field}`, { field: it.field });
      if (e && !seen.has(e.key)) { seen.add(e.key); out.push(e); }
    }
  }
  return out;
}
function buildCross(S) {
  const order = orderedLessonIds(S.LESSONS), info = {};
  order.forEach(id => { info[id] = { vocab: vocabItemsOf(id, S.LESSONS[id]), entries: exerciseEntriesOf(id, S.LESSONS[id]), segments: null }; });
  return { order, info };
}
/* Everything the learner reads in a lesson, by kind, each segment split into sentences of word tokens. */
function exerciseText(it) {
  const x = it.x, list = v => (isArr(v) ? v : []);
  const parts = it.kind === 'mcq' ? [x.s, ...list(x.opts)] : it.kind === 'recall' ? [x.promptEn, ...itemSentences('recall', x)]
    : it.kind === 'typing' ? [...itemSentences('typing', x), x.verb] : itemSentences(it.kind, x);
  return parts.filter(isStr).join('. ');
}
function lessonSegments(L) {
  const seg = { text: [], exercises: [], examples: [] };
  const add = (cat, label, str) => {
    if (!isStr(str)) return;
    const sents = splitSentences(str).map(s => fx.norm(s).split(' ').map(t => t.replace(/'s$/, '').replace(/'/g, '')).filter(Boolean)).filter(t => t.length);
    if (sents.length) seg[cat].push({ label, sents });
  };
  for (const [name, part] of [['reading', L.reading], ['listening', L.listening]]) {
    if (!part) continue;
    add('text', `${name}.introEn`, part.introEn);
    (isArr(part.paras) ? part.paras : []).forEach((p, i) => add('text', `${name}.paras[${i}]`, unmark(p)));
    (isArr(part.questions) ? part.questions : []).forEach((x, i) => add('text', `${name}.questions[${i}]`, [x.q].concat(isArr(x.opts) ? x.opts : []).join('. ')));
    if (part.predict) add('text', `${name}.predict`, [part.predict.qEn].concat(isArr(part.predict.optsEn) ? part.predict.optsEn : []).join('. '));
    if (part.insight) for (const k of Object.keys(part.insight)) if (/^(l\d+En|ex\d*)$/.test(k)) add('text', `${name}.insight.${k}`, part.insight[k]);
  }
  if (L.writing) { add('text', 'writing.taskEn', L.writing.taskEn); add('text', 'writing.model', L.writing.model); }
  for (const it of exerciseItems(L)) add('exercises', it.field, exerciseText(it));
  (isArr(L.gCards) ? L.gCards : []).forEach((c, i) => c && add('examples', `gCards[${i}]`, htmlSentences(c.enHtml || c.html).join('. ')));
  (isArr(L.vocab) ? L.vocab : []).forEach((v, i) => v && add('examples', `vocab[${i}].ex`, v.ex));
  if (L.legalPhrase) add('examples', 'legalPhrase.ex', L.legalPhrase.ex);
  return seg;
}
const clipList = (a, max) => a.slice(0, max).join('; ') + (a.length > max ? `; (+${a.length - max} more)` : '');
/* INFO lines: which vocab of earlier lessons (same unit) and of the previous unit reappears in this lesson. */
function recyclingReport(S, id) {
  const { order, info } = S.cross, u = num(S.LESSONS[id].unit), pos = order.indexOf(id);
  const poolIds = order.filter((x, i) => (num(S.LESSONS[x].unit) === u && i < pos) || num(S.LESSONS[x].unit) === u - 1);
  const pool = poolIds.flatMap(x => info[x].vocab);
  if (!pool.length) return [['recycling', 'no earlier lesson in this unit or the previous unit to recycle vocabulary from']];
  const me = info[id];
  if (!me.segments) me.segments = lessonSegments(S.LESSONS[id]);
  const used = [], unused = [];
  for (const v of pool) {
    const n = { text: 0, exercises: 0, examples: 0 };
    for (const cat of Object.keys(n))
      for (const seg of me.segments[cat]) n[cat] += seg.sents.filter(toks => v.need.every(forms => toks.some(t => forms.has(t)))).length;
    (n.text + n.exercises + n.examples ? used : unused).push({ v, n });
  }
  const tag = x => `${x.v.en} (${x.v.lesson})`;
  const lines = [['recycling', `${used.length} of ${pool.length} vocab items from earlier lessons reappear (looked at: ${poolIds.join(', ')})`]];
  if (used.length) lines.push(['recycling', 'reappear: ' + clipList(used.map(x => `${tag(x)} ${['text', 'exercises', 'examples'].filter(c => x.n[c]).map(c => `${c} ${x.n[c]}`).join(', ')}`), 30)]);
  if (unused.length) lines.push(['recycling', 'not used again: ' + clipList(unused.map(tag), 40)]);
  return lines;
}
/* WARNs: vocab introduced as new in two lessons; exercise / quiz sentences repeated across lessons of one unit.
   Returns the recycling INFO lines (printed by checkLesson after the counts line). */
function checkAcrossLessons(log, id, S) {
  const { order, info } = S.cross, L = S.LESSONS[id], me = info[id], pos = order.indexOf(id), u = num(L.unit);
  const seen = new Map();                                                    // vocab key -> first item that introduced it
  order.slice(0, pos).forEach(x => info[x].vocab.forEach(v => { if (!seen.has(v.key)) seen.set(v.key, v); }));
  me.vocab.forEach(v => {
    const first = seen.get(v.key);
    if (!first) { seen.set(v.key, v); return; }
    const other = num(S.LESSONS[first.lesson].unit) !== u ? ` (unit ${S.LESSONS[first.lesson].unit})` : '';
    log.warn(v.field, `${q(v.en)} is introduced as new here but was already introduced as new in ${first.lesson} ${first.field}${other}`);
  });
  const pool = order.slice(0, pos).filter(x => num(S.LESSONS[x].unit) === u).flatMap(x => info[x].entries);
  const reported = new Set();
  for (const e of me.entries) {
    const m = bestOverlap(e.text, pool);
    if (!m || reported.has(e.field + '|' + m.p.src)) continue;
    reported.add(e.field + '|' + m.p.src);
    log.warn(e.field, `sentence ${q(e.text)} ${m.exact ? 'repeats' : `overlaps (Jaccard ${m.jac.toFixed(2)}) with`} ${q(m.p.text)} in ${m.p.src} (earlier lesson of the same unit)`);
  }
  return recyclingReport(S, id);
}

// ------------------------------------------------------------------ unit tests and pre-tests
const isTypedQ = x => !!x && (x.type === 'typing' || (isArr(x.ans) && !isArr(x.opts)));
/* All sentences the learner met in one unit's lessons (for the "no reused question" rule). */
function unitPool(S, unit) {
  const pool = [];
  const push = (text, src) => { const e = entry(text, src); if (e) pool.push(e); };
  for (const [id, L] of Object.entries(S.LESSONS)) {
    if (L.unit !== unit) continue;
    explanationExamples(L).forEach(e => pool.push(Object.assign({}, e, { src: `${id} ${e.src}` })));
    for (const it of exerciseItems(L)) itemSentences(it.kind, it.x).forEach(s => push(s, `${id} ${it.field}`));
    for (const part of [L.reading, L.listening]) if (part) {
      (isArr(part.paras) ? part.paras : []).forEach((p, i) => splitSentences(unmark(p)).forEach(s => push(s, `${id} reading.paras[${i}]`)));
      (isArr(part.questions) ? part.questions : []).forEach((x, i) => { push(x.q, `${id} questions[${i}]`); mcqSentences(x).forEach(s => push(s, `${id} questions[${i}]`)); });
    }
    if (L.writing) splitSentences(L.writing.model || '').forEach(s => push(s, `${id} writing.model`));
  }
  return pool;
}
function checkReuse(log, field, sentences, pool) {
  const seen = new Set();
  for (const s of sentences) {
    const m = bestOverlap(s, pool);
    if (!m || seen.has(m.p.src + m.p.key)) continue;
    seen.add(m.p.src + m.p.key);
    const msg = `question sentence ${q(s)} ${m.exact ? 'repeats' : `overlaps (Jaccard ${m.jac.toFixed(2)}) with`} ${q(m.p.text)} from ${m.p.src}`;
    (m.exact ? log.error : log.warn)(field, msg);
  }
}
function checkAppliedTask(log, ut) {
  const t = ut.appliedTask;
  if (!t) return;
  if (!isStr(t.promptEn)) log.error('appliedTask', 'missing "promptEn"');
  const stated = statedSentences(t.promptEn), min = t.minSentences || 3;       // the engine defaults to 3
  if (stated != null && stated !== min) log.warn('appliedTask', `prompt asks for ${stated} sentences but the engine will require ${min} (set minSentences: ${stated})`);
}

function checkUnitTest(S, u, ut) {
  const log = logger(S.dataFile, `unitTests[${u}]`, Number(u));
  const qs = ut && ut.questions;
  if (!isArr(qs) || !qs.length) { log.error('questions', 'missing or empty'); return; }
  const unit = Number(u);
  need(log, 'titleEn', ut, 'titleEn'); need(log, 'titleAr', ut, 'titleAr', 'warn');
  for (const k of ['masteryPct', 'passPct']) if (typeof ut[k] !== 'number') log.warn(k, 'missing or not a number (the engine defaults to 90 / 80)');
  const byLesson = {};
  qs.forEach(x => { byLesson[x.lesson || '?'] = (byLesson[x.lesson || '?'] || 0) + 1; });
  log.head('counts', `questions=${qs.length}, typed=${qs.filter(isTypedQ).length}, by lesson: ${Object.entries(byLesson).map(([k, n]) => `${k}=${n}`).join(' ')}`);
  if (unit >= 1 && qs.length !== CFG.unitTestQuestions) log.warn('questions', `${qs.length} questions; numbered unit tests have ${CFG.unitTestQuestions}`);
  const typedList = [];
  qs.forEach((x, i) => {
    const f = `questions[${i}]`;
    if (isTypedQ(x)) {
      if (S.unitTestTyping === false) log.error(f, 'typed question in a unit test: the engine (stUnitTestQ) renders unit-test questions as multiple choice only');
      else if (S.unitTestTyping == null) log.warn(f, 'typed question in a unit test: stUnitTestQ was not found in app.js, so support for typed questions is unconfirmed');
      typedList.push({ x, field: f, recall: false });
    } else checkMcq(log, f, x);
    needWhy(log, f, x); checkErrCat(log, f, x, S);
    if (x.lesson && !S.LESSONS[x.lesson] && !(S.DATA && isArr(S.DATA[`unit${u}Lessons`]) ? S.DATA[`unit${u}Lessons`] : []).some(l => l && l.id === x.lesson))
      log.warn(f, `lesson ${q(x.lesson)} is not a lesson of this unit`);
  });
  if (typedList.length) checkTypedGroup(log, 'questions', typedList);
  const pool = unitPool(S, unit);
  if (!pool.length) log.info('reuse', `no built lessons for unit ${u}; sentence-reuse check skipped`);
  else {
    qs.forEach((x, i) => checkReuse(log, `questions[${i}]`, itemSentences(isTypedQ(x) ? 'typing' : 'mcq', x), pool));
    ((ut.legalCorner && ut.legalCorner.terms) || []).forEach((t, i) => checkReuse(log, `legalCorner.terms[${i}].ex`, plainSentences(t.ex), pool));
  }
  // The same sentence twice in one test (two questions that differ only in a word or two count as well).
  const own = [];
  qs.forEach((x, i) => itemSentences(isTypedQ(x) ? 'typing' : 'mcq', x).forEach(s => { const e = entry(s, `questions[${i}]`, { i }); if (e) own.push(e); }));
  const done = new Set();
  own.forEach(e => {
    const m = bestOverlap(e.text, own.filter(p => p.i < e.i));
    if (!m || done.has(e.i + '|' + m.p.i)) return;
    done.add(e.i + '|' + m.p.i);
    log.warn(`questions[${e.i}]`, `sentence ${q(e.text)} ${m.exact ? 'repeats' : `overlaps (Jaccard ${m.jac.toFixed(2)}) with`} ${q(m.p.text)} in ${m.p.src}`);
  });
  checkAppliedTask(log, ut);
  scanEmoji(log, ut, '');
}

function checkPreTest(S, u, pt) {
  const log = logger(S.dataFile, `preTests[${u}]`, Number(u));
  const items = pt && pt.items;
  if (!isArr(items) || !items.length) { log.error('items', 'missing or empty'); return; }
  if (pt.unit !== Number(u)) log.warn('unit', `"unit" is ${JSON.stringify(pt.unit)} but the test is stored under ${u}`);
  need(log, 'en', pt, 'en'); need(log, 'ar', pt, 'ar', 'warn');
  const typed = items.filter(isTypedQ), mcq = items.filter(x => !isTypedQ(x));
  const share = typed.length / items.length;
  log.head('counts', `items=${items.length}, typed=${typed.length} (${pct(typed.length, items.length)}), mcq=${mcq.length}`);
  if (items.length !== CFG.preTestItems || typed.length !== 8)
    log.warn('items', `${items.length} items, ${typed.length} typed; the intro screen in app.js promises ${CFG.preTestItems} questions (8 typing + 2 multiple choice)`);
  if (share < CFG.preTestTypedMin) log.warn('items', `only ${pct(typed.length, items.length)} of the items are typed (production); the target is ${pct(CFG.preTestTypedMin * 100, 100)} or more`);
  if (pt.version == null || pt.version === '') log.warn('version', 'no "version" field (saved attempts cannot be matched to the content they were taken on)');
  const typedList = [];
  items.forEach((x, i) => {
    const f = `items[${i}]`;
    if (isTypedQ(x)) {
      typedList.push({ x, field: f, recall: false });
      if (x.type !== 'typing') log.error(f, 'has "ans" but type is not "typing": the engine (stPreTestQ) would show it as multiple choice and fail');
      for (const k of ['pre', 'post']) if (typeof x[k] !== 'string') log.error(f, `missing "${k}" (use "" when empty)`);
      need(log, f, x, 'verb');
    } else checkMcq(log, f, x);
    needWhy(log, f, x);
  });
  checkTypedGroup(log, 'items', typedList);
  scanEmoji(log, pt, '');
}

// ------------------------------------------------------------------ site wiring (index.html, unit lists)
function checkWiring(S) {
  let onDisk = [];
  try { onDisk = fs.readdirSync(path.join(S.root, 'lessons'), { recursive: true }).filter(f => /\.js$/.test(f)).map(f => 'lessons/' + String(f).replace(/\\/g, '/')); } catch (_) { /* no lessons folder */ }
  for (const f of onDisk) {
    const m = /^lessons\/u(\d+)\//.exec(f);
    if (!S.scripts.includes(f) && (!m || inScope(m[1]))) logger('index.html', '', m ? Number(m[1]) : null).warn(f, 'lesson file exists but index.html does not load it');
  }
  const listed = new Set();
  for (const key of Object.keys(S.DATA || {}).filter(k => /^unit\d+Lessons$/.test(k))) {
    const un = Number(/^unit(\d+)Lessons$/.exec(key)[1]), log = logger('index.html', '', un);
    for (const l of Array.isArray(S.DATA[key]) ? S.DATA[key] : []) {
      if (!l || l.test) continue;
      listed.add(l.id);
      if (!inScope(un)) continue;
      if (l.open && !S.LESSONS[l.id]) log.error(`content.js ${key}`, `${l.id} is open:true but no lesson data was loaded for it`);
      if (!l.open && S.LESSONS[l.id]) log.warn(`content.js ${key}`, `${l.id} has lesson data but is not open:true in the list`);
    }
  }
  for (const id of Object.keys(S.LESSONS))
    if (!listed.has(id) && inScope(S.LESSONS[id].unit)) logger('index.html', '', S.LESSONS[id].unit).warn('content.js', `${id} has lesson data but is not in any unitNLessons list`);
}

// ------------------------------------------------------------------ course map (--map)
/* English / Arabic title of a unit: DATA.units, else the Cambly card, else a plain default. */
function unitTitles(D, n) {
  const u = (Array.isArray(D.units) ? D.units : []).find(x => x && x.n === n);
  if (u) return { en: u.en, ar: u.ar, grammarEn: u.gEn || null };
  const c = (D.camblyUnits || {})[n];
  if (c && c.titleEn) return { en: String(c.titleEn).replace(/^Unit\s+\d+\s*[\u00B7:-]\s*/, '').replace(/\s*\(.*$/, ''), ar: String(c.titleAr || '').split(' \u00B7 ')[0], grammarEn: null };
  return { en: n === 0 ? 'Foundation Week' : `Unit ${n}`, ar: n === 0 ? 'الأسبوع التأسيسي' : `الوحدة ${n}`, grammarEn: null };
}
/* One JSON-ready object: every unit 0-12 (and any other unit found in the data) with planned / built / open lessons. */
function buildMap(S) {
  const D = S.DATA || {}, ids = orderedLessonIds(S.LESSONS);
  const units = new Set();
  for (let n = 0; n <= 12; n++) units.add(n);
  (Array.isArray(D.units) ? D.units : []).forEach(u => u && Number.isInteger(u.n) && units.add(u.n));
  Object.keys(D).forEach(k => { const m = /^unit(\d+)Lessons$/.exec(k); if (m) units.add(Number(m[1])); });
  ['unitTests', 'preTests', 'camblyUnits'].forEach(k => Object.keys(D[k] || {}).forEach(u => /^\d+$/.test(u) && units.add(Number(u))));
  ids.forEach(id => Number.isInteger(S.LESSONS[id].unit) && units.add(S.LESSONS[id].unit));
  const found = {};
  results.forEach(r => { if (r.unit != null && r.level !== 'INFO') { const f = found[r.unit] || (found[r.unit] = { errors: 0, warnings: 0 }); f[r.level === 'ERROR' ? 'errors' : 'warnings']++; } });
  const rows = [...units].filter(inScope).sort((a, b) => a - b).map(n => {
    const t = unitTitles(D, n), meta = (Array.isArray(D.units) ? D.units : []).find(x => x && x.n === n) || {};
    const list = D['unit' + n + 'Lessons'], entries = Array.isArray(list) ? list.filter(l => l && typeof l === 'object') : null;
    const planned = entries ? entries.filter(l => !l.test) : null;
    const built = ids.filter(id => S.LESSONS[id].unit === n);
    const open = planned ? planned.filter(l => l.open).map(l => l.id) : [];
    const lessons = (entries || []).map(l => ({ id: l.id, n: l.n, titleEn: l.en || null, open: !!l.open, test: !!l.test, listed: true, built: !l.test && !!S.LESSONS[l.id], file: S.lessonFile[l.id] || null }));
    built.filter(id => !(entries || []).some(l => l.id === id)).forEach(id => lessons.push({ id, n: S.LESSONS[id].n, titleEn: S.LESSONS[id].en || null, open: false, test: false, listed: false, built: true, file: S.lessonFile[id] || null }));
    const ut = (D.unitTests || {})[n], pt = (D.preTests || {})[n];
    const status = !entries && !built.length ? 'not-started' : !built.length ? 'planned'
      : planned && planned.length && planned.every(l => built.includes(l.id)) ? 'built' : 'in-progress';
    return {
      unit: n, titleEn: t.en, titleAr: t.ar, grammarEn: t.grammarEn, open: !!meta.open || open.length > 0, status,
      plannedLessons: planned ? planned.length : null,                      // null = no unitNLessons list yet
      plannedEntries: entries ? entries.length : null,                      // includes the review / test entry
      lessonsBuilt: built.length, builtIds: built, lessonFiles: [...new Set(built.map(id => S.lessonFile[id]).filter(Boolean))],
      lessonsOpen: open.length, openIds: open,
      builtNotOpen: built.filter(id => !open.includes(id)), openNotBuilt: open.filter(id => !built.includes(id)),
      lessons,
      unitTest: { exists: !!ut, questions: ut && Array.isArray(ut.questions) ? ut.questions.length : 0, appliedTask: !!(ut && ut.appliedTask) },
      preTest: { exists: !!pt, version: pt && pt.version != null ? pt.version : null, items: pt && Array.isArray(pt.items) ? pt.items.length : 0 },
      findings: found[n] || { errors: 0, warnings: 0 },
    };
  });
  const sum = f => rows.reduce((a, r) => a + f(r), 0);
  return {
    ok: true, site: path.basename(ROOT), scope: OPT.unit == null ? 'course' : `unit ${OPT.unit}`, units: rows,
    totals: {
      units: rows.length, unitsWithLessonList: rows.filter(r => r.plannedLessons != null).length,
      plannedLessons: sum(r => r.plannedLessons || 0), lessonsBuilt: sum(r => r.lessonsBuilt), lessonsOpen: sum(r => r.lessonsOpen),
      lessonFiles: new Set(rows.flatMap(r => r.lessonFiles)).size,
      unitTests: sum(r => (r.unitTest.exists ? 1 : 0)), preTests: sum(r => (r.preTest.exists ? 1 : 0)), preTestsWithVersion: sum(r => (r.preTest.version != null ? 1 : 0)),
      errors: sum(r => r.findings.errors), warnings: sum(r => r.findings.warnings),
    },
  };
}

// ------------------------------------------------------------------ robustness
/* Item arrays may hold null or a non-object after a bad edit. Report each one and put {} in its place,
   so that the checks below report missing fields instead of crashing. */
function sanitizeItems(S) {
  const fix = (log, field, arr) => {
    if (!Array.isArray(arr)) return;
    arr.forEach((x, i) => {
      if (x && typeof x === 'object' && !Array.isArray(x)) return;
      if (log) log.error(`${field}[${i}]`, `item is not an object (${x === null ? 'null' : Array.isArray(x) ? 'array' : typeof x})`);
      arr[i] = {};
    });
  };
  for (const [id, L] of Object.entries(S.LESSONS)) {
    const log = inScope(L.unit) ? logger(S.lessonFile[id] || '?', id, L.unit) : null;
    ['recall', 'vocab', 'vocabGaps', 'gCards', 'gA', 'gB', 'gC', 'gD', 'quiz'].forEach(k => fix(log, k, L[k]));
    ['reading', 'listening'].forEach(k => { if (L[k] && typeof L[k] === 'object') fix(log, `${k}.questions`, L[k].questions); });
  }
  const D = S.DATA || {};
  for (const [u, ut] of Object.entries(D.unitTests && typeof D.unitTests === 'object' ? D.unitTests : {}))
    if (ut && typeof ut === 'object') fix(inScope(u) ? logger(S.dataFile, `unitTests[${u}]`, Number(u)) : null, 'questions', ut.questions);
  for (const [u, pt] of Object.entries(D.preTests && typeof D.preTests === 'object' ? D.preTests : {}))
    if (pt && typeof pt === 'object') fix(inScope(u) ? logger(S.dataFile, `preTests[${u}]`, Number(u)) : null, 'items', pt.items);
}

// ------------------------------------------------------------------ main
function main() {
  const S = loadSite(ROOT);
  const loaded = loadChecker(S);
  fx = S.fx;
  sanitizeItems(S);
  S.cross = buildCross(S);
  const head = logger('', '');
  head.info('', `site ${ROOT}: ${Object.keys(S.LESSONS).length} lessons from ${new Set(Object.values(S.lessonFile)).size} files, data in ${S.dataFile}`);
  head.info('', `answer checker taken from ${S.engine}: ${[...loaded].join(', ')}`);
  checkWiring(S);
  const ids = S.cross.order.filter(id => inScope(S.LESSONS[id].unit));
  ids.forEach(id => checkLesson(id, S.LESSONS[id], S));
  const ut = (S.DATA && S.DATA.unitTests) || {}, pre = (S.DATA && S.DATA.preTests) || {};
  const uKeys = Object.keys(ut).filter(inScope), pKeys = Object.keys(pre).filter(inScope);
  uKeys.forEach(u => checkUnitTest(S, u, ut[u]));
  pKeys.forEach(u => checkPreTest(S, u, pre[u]));
  if (OPT.unit != null && !ids.length && !uKeys.length && !pKeys.length)
    logger('', '', OPT.unit).info('', `unit ${OPT.unit} has no built lessons, no unit test and no pre-test yet; nothing to check`);
  return { S, lessons: ids.length, unitTests: uKeys.length, preTests: pKeys.length };
}

let run = { S: null, lessons: 0, unitTests: 0, preTests: 0 }, fatal = null;
try { run = main(); }
catch (e) {
  if (e instanceof Fatal) { fatal = e.message; logger('', '').error('', e.message); }
  else { console.error(e && e.stack || e); process.exitCode = 2; }
}
if (OPT.map) {
  // Dashboard mode: exactly one JSON object on stdout.
  let out;
  try { out = fatal ? { ok: false, error: fatal } : buildMap(run.S); } catch (e) { out = { ok: false, error: 'cannot build the course map: ' + e.message }; process.exitCode = 2; }
  console.log(JSON.stringify(out, null, 2));
  if (fatal && !process.exitCode) process.exitCode = 1;
} else {
  for (const r of results) if (!(QUIET && r.level === 'INFO')) console.log(r.line);
  console.log(`\nSUMMARY: ${counts.ERROR} ERROR, ${counts.WARN} WARN, ${counts.INFO} INFO ` +
    `(checked ${run.lessons} lessons, ${run.unitTests} unit tests, ${run.preTests} pre-tests${OPT.unit != null ? `, unit ${OPT.unit} only` : ''} in ${ROOT})`);
  if (counts.ERROR > 0 && !process.exitCode) process.exitCode = 1;
}
