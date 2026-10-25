#!/usr/bin/env node
'use strict';
/*
 * content-check.js - automated content checker for the English Passport static site.
 *
 *   node content-check.js [siteRoot] [--unit N] [--quiet]
 *   node content-check.js [siteRoot] --map [--unit N]
 *
 *   siteRoot  folder that holds content.js, app.js and lessons/ (default: current directory)
 *   --unit N  check only unit N (0 = Foundation Week): its lessons, unit test and pre-test
 *   --quiet   hide INFO lines (counts and reports), print only ERROR / WARN and the summary
 *   --map     print ONE JSON object describing the course state for a dashboard (units, planned / built / open
 *             lessons, unit tests, pre-tests and their version, finding counts) and nothing else
 *
 * Plain Node (22), no browser, no npm packages.
 *
 * How it works
 *   1. Runs content.js in a vm sandbox with a few stub globals and obtains the data object (DATA). The lessons come
 *      from its unit lists (unit0Lessons, unit1Lessons, ... in unit order, entries in list order, test entries skipped):
 *      lesson id u<U>l<N> is the file lessons/u<U>/l<N>.js, run in the same sandbox when it exists (LESSONS).
 *      index.html is not read (a separate tool keeps its script tags in step with these lists).
 *   2. Cuts the site's own answer checker (fixQuotes, norm, exactNorm, typedLooseOK, typedExactOK, typedOK) and its
 *      writing evaluation (analyze, the default CHECKS, buildIndex for the lesson words) out of the app.js source
 *      text and evaluates them in the same sandbox, so the checks always use the same logic as the live site.
 *   3. Checks every lesson, every unit test and every pre-test, and prints one line per finding:
 *        ERROR|WARN|INFO  file | lesson id | field[item index] | message
 *      then a summary. Exit code 1 if there is at least one ERROR, otherwise 0.
 *
 * Checks (numbers follow the course checklist). ERROR = a reason to fail the lesson ("high" in LESSON-BRIEF.md section 9).
 *   1  required fields
 *   2  new items (vocab + legal phrase) outside 6-8: ERROR
 *   3  grammar cards other than 6, or any of gA, gB, gC, gD other than 4 exercises (16 in all): ERROR
 *   4  every accepted answer passes the site checker (bare, whole sentence, curly apostrophe)
 *   5  cue giveaway / two-option cue                        6  one string accepted for >= 50% of typed items
 *   7  MCQ answer index and unique options                  8  explanation examples reused in exercises
 *   9  legal-vocabulary share above 25%: WARN
 *   10 listening rules (url, no transcript, targetSeconds); reading or listening questions other than 8: ERROR
 *   11 writing, each an ERROR: checks that enforce fewer than 4 sentences or whose sentence rule cannot be found;
 *      taskEn that does not state at least 4 sentences; a model with fewer sentences than required; checks (the
 *      lesson's own, else the default CHECKS) that reject writing.model or an entry of the optional array
 *      writing.acceptExamples, run through the engine's analyze() as the writing screen does, together with the
 *      sentence rule of its "finish" button. "Task says N sentences but the checks enforce M" stays a WARN.
 *   12 lesson quiz other than 10 questions: ERROR
 *   Unit tests: numbered units other than 20 questions (ERROR), typed answers, MCQ validity, sentences reused from the
 *   unit's lessons.
 *   Pre-tests: item count, typed share, checks 4-7, version field.
 *   Cross-lesson (course order): an item introduced as new that an earlier lesson of the course already introduced as
 *   new (ERROR); exercise / quiz sentences repeated (Jaccard >= 0.8) from earlier lessons of the same unit or from any
 *   lesson of the previous unit (WARN); INFO lines for near-overlaps with the same lessons (Jaccard 0.6 up to the
 *   WARN threshold, at most 5 per lesson) for the reviewer to compare; and an INFO recycling report (vocab of earlier
 *   lessons of the unit and of the previous unit that reappears in the lesson). INFO lines never change the exit code.
 *   Wiring (content.js lists and lessons/): a lesson file that no unit list mentions (ERROR), an open:true entry whose
 *   file or data is missing (ERROR), lesson data that is not open:true or not listed (WARN).
 *   Extras: errCat names, hint-vs-answer, word-order chips, emoji.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ------------------------------------------------------------------ settings
const CFG = {
  vocabMin: 6, vocabMax: 8,            // check 2: new items per lesson (vocab 5-7 + the legal phrase)
  gCards: 6,                           // check 3: grammar cards (4 explanation cards, common mistakes, summary)
  grammarPerGroup: 4,                  // check 3 (course decision: 4 per group, 16 per lesson)
  comprehensionQuestions: 8,           // check 10: reading or listening questions per lesson
  quizQuestions: 10,                   // check 12: lesson quiz (pass = 8 of 10)
  unitTestQuestions: 20,               // numbered unit tests (the unit 0 test is only reported)
  preTestItems: 10, preTestTypedMin: 0.8,
  singleAnswerShare: 0.5,              // check 6
  legalShareMax: 0.25,                 // check 9 (the brief: legal content a quarter or less)
  jaccardWarn: 0.8, minTokens: 3,      // check 8, cross-lesson repeats and the unit-test reuse rule
  jaccardNear: 0.5, nearMax: 5,        // cross-lesson near-overlap INFO lines (below jaccardWarn), at most nearMax per lesson
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
  '  siteRoot  folder with content.js, app.js and lessons/ (default: current directory)\n' +
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
const LESSON_ID_RE = /^u(\d+)l(\d+)$/;                                   // lesson id u<U>l<N> = file lessons/u<U>/l<N>.js
const LESSON_FILE_RE = /^lessons\/u(\d+)\/l(\d+)\.js$/;
const unitOfListKey = k => Number(/^unit(\d+)Lessons$/.exec(k)[1]);
/* Run content.js, then the lesson files named by its unit lists; return the sandbox and what it produced.
   content.js is the single source of lessons: unit<N>Lessons in unit order (0, 1, 2, ...), entries in list order,
   entries with test:true skipped. Every other entry is kept in site.listed (for the wiring checks), and its file
   lessons/u<U>/l<N>.js is run when it exists. index.html is not read. */
function loadSite(root) {
  const dataFile = 'content.js', engine = 'app.js';                       // the engine is not data
  const dataPath = path.join(root, dataFile);
  if (!fs.existsSync(dataPath)) throw new Fatal(`${dataFile} not found in ${root}`);
  const sandbox = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  sandbox.window = sandbox; sandbox.self = sandbox;                                  // minimal browser stubs
  vm.createContext(sandbox);
  const site = { root, engine, ctx: sandbox, lessonFile: {}, dataFile, listed: [], failed: new Set(), testIds: new Set() };
  const dataLog = logger(dataFile, '');
  const runFile = (rel, log) => {                                         // run one script; map new LESSONS keys to it
    const before = Object.assign({}, sandbox.LESSONS || {});
    try { vm.runInContext(fs.readFileSync(path.join(root, rel), 'utf8'), sandbox, { filename: rel }); }
    catch (e) { log.error('', 'script failed to run: ' + e.message); site.failed.add(rel); return; }
    for (const id of Object.keys(sandbox.LESSONS || {})) {
      if (!(id in before)) site.lessonFile[id] = rel;
      else if (sandbox.LESSONS[id] !== before[id]) log.warn('', `replaces LESSONS.${id}, which ${site.lessonFile[id] || 'an earlier file'} already defined (the site would show this file's version)`);
    }
  };
  runFile(dataFile, dataLog);
  site.DATA = sandbox.DATA && typeof sandbox.DATA === 'object' ? sandbox.DATA : null;
  if (!site.DATA) dataLog.error('DATA', `no global DATA object after running ${dataFile} (expected "var DATA = window.DATA = {...}")`);
  const keys = Object.keys(site.DATA || {}).filter(k => /^unit\d+Lessons$/.test(k)).sort((a, b) => unitOfListKey(a) - unitOfListKey(b));
  const ran = new Set();
  for (const key of keys) {
    const unit = unitOfListKey(key), list = site.DATA[key];
    if (!Array.isArray(list)) { logger(dataFile, '', unit).error(key, 'is not an array, so no lesson can be read from it'); continue; }
    list.forEach((l, index) => {
      if (l && typeof l === 'object' && l.test && typeof l.id === 'string') site.testIds.add(l.id);
      if (!l || typeof l !== 'object' || l.test) return;
      const m = LESSON_ID_RE.exec(typeof l.id === 'string' ? l.id : '');
      const file = m ? `lessons/u${m[1]}/l${m[2]}.js` : null;
      const exists = !!file && fs.existsSync(path.join(root, file)) && fs.statSync(path.join(root, file)).isFile();
      site.listed.push({ id: l.id, key, index, unit, open: !!l.open, file, exists });
      if (exists && !ran.has(file)) { ran.add(file); runFile(file, logger(file, l.id, unit)); }
    });
  }
  site.LESSONS = {};                                                        // keep only entries that are real objects
  const rawLessons = sandbox.LESSONS && typeof sandbox.LESSONS === 'object' ? sandbox.LESSONS : {};
  for (const id of Object.keys(rawLessons)) {
    const L = rawLessons[id];
    if (L && typeof L === 'object' && !Array.isArray(L)) site.LESSONS[id] = L;
    else logger(site.lessonFile[id] || site.dataFile || '?', id).error('', 'LESSONS entry is not an object');
  }
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
  // The engine helpers get their own context: a lesson's writing checks run in the lessons' context, as on the page,
  // where app.js helpers such as fixQuotes are not visible to lesson code.
  const ctx = site.engineCtx = vm.createContext({ console: { log() {}, info() {}, warn() {}, error() {} } }), loaded = new Set();
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
  site.load = load;
  site.errCats = (o => (o && typeof o === 'object' ? new Set(Object.keys(o)) : null))(opt('ERR_CATS'));
  site.defaultChecks = (c => (isArr(c) ? c : null))(opt('CHECKS'));
  // Can the engine show a typed question inside a unit test? (stUnitTestQ renders multiple choice only today.) null = unknown.
  const utq = extractDecl(site.appSrc, 'stUnitTestQ');
  site.unitTestTyping = utq == null ? null : /\bTyping\s*\(/.test(utq);
  site.checkerNames = [...loaded];
  loadWritingEngine(site);
  site.writingNames = [...loaded].filter(n => !site.checkerNames.includes(n));
  return loaded;
}
/* Call fn(); while it fails with "X is not defined" and X can be cut out of app.js, load X and call fn again
   (a helper that a function reaches only for some inputs is loaded the first time it is needed). */
function engineCall(site, fn) {
  for (let i = 0; ; i++) {
    try { return fn(); }
    catch (e) {
      const m = /^([\w$]+) is not defined$/.exec((e && e.message) || '');
      if (i >= 12 || !m || !site.load(m[1])) throw e;
    }
  }
}
/* The engine's evaluation of a writing answer (check 11): analyze(text), which counts sentences and finds the lesson
   words in ALL_VOCAB, and buildIndex(lesson), which makes that word list for the lesson on screen. The page sets
   ALL_VOCAB per lesson (rebuildLessonIndex); the checker does the same before each call. On failure site.writing
   stays null and site.writingWhy says why (main() then prints one WARN and the model check is skipped). */
function loadWritingEngine(site) {
  const ctx = site.engineCtx;
  site.writing = null; site.writingWhy = null;
  try {
    if (!site.load('analyze')) throw new Error('function "analyze" not found');
    // ALL_VOCAB is the page's per-lesson word list; the checker declares it and sets it for each lesson, as the page does.
    const setVocab = vm.runInContext('var ALL_VOCAB = []; (function (v) { ALL_VOCAB = v; })', ctx, { filename: 'content-check:ALL_VOCAB' });
    const analyze = vm.runInContext('analyze', ctx);
    setVocab([{ en: 'lawyer' }, { en: 'zz', headword: 'zz' }]);                       // smoke test over every branch
    const a = engineCall(site, () => analyze("I'm working with a lawyer every day. She usually helps me in the morning. Is it hard?"));
    if (!a || typeof a.sentences !== 'number' || !isArr(a.used)) throw new Error('analyze() did not return {sentences, used, ...}');
    if (a.used.length !== 1) throw new Error(`analyze() does not read the lesson words from ALL_VOCAB (found ${a.used.length} of 1)`);
    setVocab([]);
    let buildIndex = site.load('buildIndex') ? vm.runInContext('buildIndex', ctx) : null;
    const probe = { vocab: [{ en: 'a' }], legalPhrase: { en: 'b' }, recall: [{}], vocabGaps: [{}], gA: [{}], gB: [{}], gC: [{ verb: 'go' }], gD: [{}],
      reading: { questions: [{}, { tf: true }] }, listening: { questions: [{}, { tf: true }] }, quiz: [{}], gCards: [] };   // every branch
    try { if (buildIndex && !isArr(engineCall(site, () => buildIndex(probe).ALL_VOCAB))) buildIndex = null; }
    catch (_) { buildIndex = null; }                                                 // the word list is then made as below
    site.writing = { analyze, buildIndex, setVocab };
  } catch (e) { site.writingWhy = e.message; }
}
/* The lesson words the writing screen gives analyze(): buildIndex(lessonData(id)).ALL_VOCAB, i.e. the vocab list and
   the legal phrase (lessonData() in app.js lays the lesson over DATA). */
function lessonVocab(S, L) {
  if (S.writing.buildIndex) {
    try { const v = engineCall(S, () => S.writing.buildIndex(Object.assign({}, S.DATA || {}, L)).ALL_VOCAB); if (isArr(v)) return v; }
    catch (_) { /* malformed lesson: same rule below */ }
  }
  const v = (isArr(L.vocab) ? L.vocab : []).filter(x => x && typeof x === 'object');
  if (L.legalPhrase && typeof L.legalPhrase === 'object') v.push(Object.assign({ isLegal: true }, L.legalPhrase));
  return v;
}
/* Run the engine's evaluation of one writing answer exactly as the writing screen does: a = analyze(text) with the
   lesson words, then c.ok(a, fixQuotes(text)) for every active check. Returns {a, bad}: bad has a label for each check
   that rejects the text (or throws inside ok(), which would break the screen). Throws when analyze() cannot run. */
function rejectingChecks(S, L, checks, text) {
  S.writing.setVocab(lessonVocab(S, L));
  let a;
  try { a = engineCall(S, () => S.writing.analyze(text)); } finally { S.writing.setVocab([]); }
  const t = fx.fixQuotes(text), bad = [];
  if (!a || typeof a.sentences !== 'number') throw new Error('analyze() returned no sentence count');
  [...checks].forEach((c, i) => {
    const name = c && isStr(c.k) ? `"${c.k}"` : `checks[${i}]`;
    if (!c || typeof c.ok !== 'function') { bad.push(`${name} (has no ok function)`); return; }
    let ok;
    try { ok = c.ok(a, t); } catch (e) { bad.push(`${name} (ok() throws: ${clip(e && e.message, 60)})`); return; }
    if (!ok) bad.push(name + (isStr(c.tEn) ? ` (${clip(c.tEn, 56)})` : ''));
  });
  return { a, bad };
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
    .split(/(?<=[.!?]["'’”)\]]*)\s+(?=\S)|(?<=[.!?])(?=[A-Z])|\n+/).map(s => s.replace(/\u0001/g, '.').trim()).filter(Boolean);
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
/* The sentence count the lesson's writing checks really enforce (probe the site's own ok() function):
   {n} or {n: null, why} when the rule cannot be found or read. The rule is the check with k:"sentences", else one whose
   tEn speaks of "separate sentences" (a check such as "2 sentences with am / is / are" is not a count rule). */
function enforcedSentences(checks) {
  const list = [...checks];
  const c = list.find(c => c && c.k === 'sentences') || list.find(c => c && /\bseparate\s+sentences\b/i.test(c.tEn || ''));
  if (!c) return { n: null, why: 'no check with k:"sentences" or a tEn about "separate sentences"' };
  if (typeof c.ok !== 'function') return { n: null, why: 'the "sentences" check has no ok function' };
  for (let n = 0; n <= 12; n++) {
    const text = Array(n).fill('This is a short sample sentence.').join(' ');       // some checks also read the text itself
    try { if (c.ok({ words: 6 * n, sentences: n, runOn: false, cont: 0, sig: 0, used: [] }, text)) return { n }; }
    catch (e) { return { n: null, why: `the "sentences" check throws: ${clip(e && e.message, 60)}` }; }
  }
  return { n: null, why: 'the "sentences" check accepts no count from 0 to 12' };
}
const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8 };
/* The number of sentences a task text asks for: the first "at least N sentences", else the largest "N sentences" it
   states (the parts of a task, such as "2 sentences using am / is / are", are smaller than its total). null when it
   states none. */
function statedSentences(text) {
  let atLeast = null, largest = null;
  for (const m of String(text || '').matchAll(/\b(at\s+least\s+)?(\d+|one|two|three|four|five|six|seven|eight)(\+|\s+or\s+more)?\s+(?:(?:separate|short|full|clear|complete|simple)\s+){0,2}sentences\b/gi)) {
    const n = NUMBER_WORDS[m[2].toLowerCase()] || Number(m[2]);
    if ((m[1] || m[3]) && atLeast == null) atLeast = n;
    if (largest == null || n > largest) largest = n;
  }
  return atLeast != null ? atLeast : largest;
}
function checkWriting(log, L, S) {
  const W = L.writing;
  if (!W || typeof W !== 'object') return;
  need(log, 'writing', W, 'taskEn'); need(log, 'writing', W, 'task', 'warn');
  if (!need(log, 'writing', W, 'model')) { /* reported */ }
  const own = isArr(W.checks);
  const checks = own ? W.checks : S.defaultChecks;
  const probe = checks ? enforcedSentences(checks) : { n: null }, enforced = probe.n;
  const stated = statedSentences(W.taskEn);
  if (W.checks != null && !own) log.warn('writing.checks', 'is not an array, so the engine ignores it and uses the default CHECKS');
  if (enforced == null) log.error('writing', checks ? `cannot tell how many sentences the writing checks require (${probe.why}); they must enforce at least ${CFG.minSentences}` : 'cannot tell how many sentences the writing task requires (no checks and no default CHECKS in app.js)');
  else if (enforced < CFG.minSentences) log.error('writing.checks', `the checks accept ${enforced} sentences; the course needs at least ${CFG.minSentences}`);
  if (isStr(W.taskEn)) {                                                   // a missing taskEn is reported above
    if (stated == null) log.error('writing.taskEn', `the task text does not state a number of sentences (needs "at least ${CFG.minSentences} separate sentences")`);
    else if (stated < CFG.minSentences) log.error('writing.taskEn', `the task text asks for ${stated} sentences; it must ask for at least ${CFG.minSentences} separate sentences`);
  }
  if (enforced != null && stated != null && enforced !== stated) log.warn('writing', `task text says ${stated} sentences but the checks enforce ${enforced}`);
  if (isStr(W.model)) {
    const n = splitSentences(W.model).filter(s => (s.match(/[A-Za-z']+/g) || []).length >= 3).length, required = Math.max(CFG.minSentences, enforced || 0);
    if (n < required) log.error('writing.model', `the model answer has only ${n} sentences; at least ${required} are required`);
  }
  checkWritingAnswers(log, L, S, checks, own);
  return { enforced, stated, own };
}
/* The fewest separate sentences (as analyze() counts them) the writing screen's finish button accepts: stWriting
   shows a toast instead of finishing when a.sentences < N. null when that rule cannot be found in app.js. */
function finishMinimum(S) {
  if (S.finishMin === undefined) {
    const src = extractDecl(S.appSrc, 'stWriting') || '', m = /\ba\.sentences\s*<\s*(\d+)/.exec(src);
    S.finishMin = m ? Number(m[1]) : null;
  }
  return S.finishMin;
}
/* One site-level WARN when the engine's writing evaluation cannot be found or run (main() calls it once); the model
   check is then skipped for every lesson. */
function writingUnavailable(why) {
  logger('', '').warn('', `writing.model and writing.acceptExamples could not be verified against the writing checks (${why}); compare them with the checks by hand`);
}
/* Check 11: the active writing checks (the lesson's own, else the default CHECKS) must accept writing.model and every
   entry of the optional array writing.acceptExamples (more correct answers a reviewer may add), and so must the
   finish button. Each answer is evaluated with the engine's own analyze() and ok(a, text), as the writing screen does. */
function checkWritingAnswers(log, L, S, checks, own) {
  const W = L.writing, answers = [];
  if (isStr(W.model)) answers.push(['writing.model', W.model]);
  if (W.acceptExamples != null) {
    if (!isArr(W.acceptExamples)) log.error('writing.acceptExamples', 'must be an array of correct answers (strings)');
    else [...W.acceptExamples].forEach((t, i) => {
      if (isStr(t)) answers.push([`writing.acceptExamples[${i}]`, t]);
      else log.error(`writing.acceptExamples[${i}]`, 'must be a non-empty string (a correct answer to the writing task)');
    });
  }
  if (!answers.length || !checks || !S.writing) return;                    // no checks: reported above; no engine: one WARN
  const min = finishMinimum(S), which = own ? "the lesson's writing.checks" : `the default CHECKS of ${S.engine}`;
  for (const [field, text] of answers) {
    let r;
    try { r = rejectingChecks(S, L, checks, text); }
    catch (e) {                                                            // the engine ran in the smoke test, so this is about this lesson
      log.warn(field,`could not be verified against the writing checks: analyze() from ${S.engine} fails on it with this lesson's words (${clip(e && e.message, 80)})`);
      continue;
    }
    const why = [];
    if (r.bad.length) why.push(`rejected by ${which}: ${r.bad.join('; ')}`);
    if (min != null && r.a.sentences < min) why.push(`the finish button of the writing screen needs ${min} separate sentences and analyze() counts ${r.a.sentences}`);
    if (why.length) log.error(field, why.join('; also '));
  }
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
  else if (part.questions.length !== CFG.comprehensionQuestions)
    log.error(`${name}.questions`, `${part.questions.length} questions; the course needs ${CFG.comprehensionQuestions} ${name} questions`);
  if (isArr(part.questions)) part.questions.forEach((x, i) => {
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
  // The plan counts the legal phrase inside the 6-8 new items (vocab 5-7 + legalPhrase).
  const nNew = A('vocab').length + (L.legalPhrase ? 1 : 0);
  if (A('vocab').length && (nNew < CFG.vocabMin || nNew > CFG.vocabMax))
    log.error('vocab', `${nNew} new items (${A('vocab').length} vocab + ${L.legalPhrase ? 1 : 0} legal phrase); the course needs ${CFG.vocabMin}-${CFG.vocabMax} in total`);
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
  if (A('gCards').length && A('gCards').length !== CFG.gCards)
    log.error('gCards', `${A('gCards').length} grammar cards; the course needs ${CFG.gCards} (4 explanation cards, common mistakes, summary)`);
  // Counts the brief fixes by convention (section 3): a departure is a WARN for the reviewer, not a reason to fail.
  for (const [k, n] of [['recall', 5], ['vocabGaps', 8], ['goals', 4]]) if (A(k).length && A(k).length !== n) log.warn(k, `${A(k).length} items; the brief has ${n}`);
  if (L.writing && isArr(L.writing.checks) && L.writing.checks.length !== 4)
    log.warn('writing.checks', `${L.writing.checks.length} checks; the brief has 4 (the first "sentences", the last "vocab")`);
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
  ['gA', 'gB', 'gC', 'gD'].forEach((k, i) => {                                // an empty group is already an ERROR above
    if (g[i] && g[i] !== CFG.grammarPerGroup)
      log.error(k, `${g[i]} exercises; the course needs ${CFG.grammarPerGroup} in each of gA, gB, gC, gD (${CFG.grammarPerGroup * 4} in all; now gA=${g[0]} gB=${g[1]} gC=${g[2]} gD=${g[3]})`);
  });

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
  if (A('quiz').length && A('quiz').length !== CFG.quizQuestions)
    log.error('quiz', `${A('quiz').length} questions; the lesson quiz has exactly ${CFG.quizQuestions} (pass = ${Math.ceil(CFG.quizQuestions * 0.8)})`);

  // 8. explanation examples reused in exercises; 9. legal share
  checkExampleReuse(log, L);
  const recycling = checkAcrossLessons(log, id, S);                          // cross-lesson checks + recycling report
  const ls = legalShare(L);
  if (ls.share > CFG.legalShareMax) log.warn('legal', `${ls.legal} of ${ls.total} exercise + quiz items (${pct(ls.legal, ls.total)}) use legal vocabulary; the limit is ${pct(CFG.legalShareMax * 100, 100)} (a quarter)`);
  // From unit 2 on a lesson brings its own "Ask the Teacher" suggestions; without them the engine shows unit 1's chips.
  if (num(L.unit) >= 2 && !(isArr(L.askChips) && L.askChips.filter(isStr).length >= 4))
    log.warn('askChips', 'lessons from unit 2 on need 4 "askChips" (short Arabic questions about this lesson\'s grammar); without them "Ask the Teacher" suggests unit 1 questions');

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
      const e = entry(s, `${id} ${it.field}`, { field: it.field, lesson: id });
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
/* Exercise / quiz sentences of the lessons in `pool` (entries) that come closest to `e` with CFG.jaccardNear <= Jaccard
   < CFG.jaccardWarn (exact repeats and pairs at the WARN threshold are reported by bestOverlap instead). */
function nearOverlaps(e, pool) {
  const out = [];
  for (const p of pool) {
    if (p.key === e.key) continue;
    const j = jaccard(e.set, p.set);
    if (j >= CFG.jaccardNear && j < CFG.jaccardWarn) out.push({ e, p, jac: j });
  }
  return out;
}
/* ERROR: an item introduced as new that an earlier lesson of the course already introduced as new.
   WARN: exercise / quiz sentences repeated from earlier lessons of the same unit or from any lesson of the previous unit.
   INFO: near-overlaps with the same lessons, for the reviewer to compare (Jaccard from CFG.jaccardNear up to the WARN
   threshold, at most CFG.nearMax per lesson, most similar first; LESSON-BRIEF.md section 10 notes that reviewers found
   lightly edited sentences at 0.5-0.6).
   Returns the recycling and near-overlap INFO lines (printed by checkLesson after the counts line). */
function checkAcrossLessons(log, id, S) {
  const { order, info } = S.cross, L = S.LESSONS[id], me = info[id], pos = order.indexOf(id), u = num(L.unit);
  const seen = new Map();                                                    // vocab key -> first item that introduced it
  order.slice(0, pos).forEach(x => info[x].vocab.forEach(v => { if (!seen.has(v.key)) seen.set(v.key, v); }));
  me.vocab.forEach(v => {
    const first = seen.get(v.key);
    if (!first) { seen.set(v.key, v); return; }
    if (first.lesson === id) { log.warn(v.field, `${q(v.en)} is introduced as new twice in this lesson (also ${first.field})`); return; }
    const other = num(S.LESSONS[first.lesson].unit) !== u ? ` (unit ${S.LESSONS[first.lesson].unit})` : '';
    log.error(v.field, `${q(v.en)} is introduced as new here but was already introduced as new in ${first.lesson} ${first.field}${other}; recycle it instead (a new item is new once in the course)`);
  });
  // Earlier lessons of the same unit, then every lesson of the previous unit (course order).
  const poolIds = order.filter((x, i) => (num(S.LESSONS[x].unit) === u && i < pos) || num(S.LESSONS[x].unit) === u - 1);
  const pool = poolIds.flatMap(x => info[x].entries);
  const where = p => (num(S.LESSONS[p.lesson].unit) === u ? 'earlier lesson of the same unit' : 'lesson of the previous unit');
  const reported = new Set(), near = [];
  for (const e of me.entries) {
    near.push(...nearOverlaps(e, pool));
    const m = bestOverlap(e.text, pool);
    if (!m || reported.has(e.field + '|' + m.p.src)) continue;
    reported.add(e.field + '|' + m.p.src);
    log.warn(e.field, `sentence ${q(e.text)} ${m.exact ? 'repeats' : `overlaps (Jaccard ${m.jac.toFixed(2)}) with`} ${q(m.p.text)} in ${m.p.src} (${where(m.p)})`);
  }
  const pairs = new Set();
  const nearLines = near.sort((a, b) => b.jac - a.jac || a.e.field.localeCompare(b.e.field) || a.p.src.localeCompare(b.p.src))
    .filter(n => { const k = n.e.field + '|' + n.p.src; if (pairs.has(k)) return false; pairs.add(k); return true; })
    .slice(0, CFG.nearMax)
    .map(n => [n.e.field, `near-overlap for the reviewer to compare (Jaccard ${n.jac.toFixed(2)}): ${q(n.e.text)} and ${q(n.p.text)} in ${n.p.src} (${where(n.p)})`]);
  return recyclingReport(S, id).concat(nearLines);
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
  if (unit >= 1 && qs.length !== CFG.unitTestQuestions) log.error('questions', `${qs.length} questions; numbered unit tests have exactly ${CFG.unitTestQuestions}`);
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

// ------------------------------------------------------------------ site wiring (content.js unit lists, lessons/)
/* The unit lists in content.js are the single source of lessons (see loadSite). Whether index.html loads the same
   files is not checked here: a separate tool keeps its script tags in step with the lists. */
function checkWiring(S) {
  if (!S.DATA) return;                                                     // already an ERROR; every file would look unlisted
  let onDisk = [];
  try { onDisk = fs.readdirSync(path.join(S.root, 'lessons'), { recursive: true }).map(f => String(f).replace(/\\/g, '/')).filter(f => /\.js$/.test(f)).map(f => 'lessons/' + f).sort(); } catch (_) { /* no lessons folder */ }
  const named = new Set(S.listed.map(l => l.file).filter(Boolean));
  for (const f of onDisk) {
    if (named.has(f)) continue;
    const m = LESSON_FILE_RE.exec(f), u = /^lessons\/u(\d+)\//.exec(f);
    if (u && !inScope(u[1])) continue;
    const log = logger(f, '', u ? Number(u[1]) : null);
    const id = m ? `u${m[1]}l${m[2]}` : null;
    if (m) log.error('', S.testIds.has(id) ? `lesson file exists but ${id} is a test entry (test:true) in content.js, which has no lesson file, so it is never loaded or checked`
      : `lesson file exists but no unit list in content.js names ${id}, so it is never loaded or checked`);
    else log.warn('', 'file under lessons/ does not follow lessons/u<U>/l<N>.js, so no unit list in content.js can name it and it is never loaded or checked');
  }
  const seen = new Map();
  for (const l of S.listed) {
    if (!inScope(l.unit)) continue;
    const log = logger(S.dataFile, '', l.unit), field = `${l.key}[${l.index}]`;
    if (!l.file) { log.warn(field, `lesson id ${q(l.id)} does not have the form u<U>l<N>, so no lesson file can be found for it`); }
    if (seen.has(l.id)) log.warn(field, `${l.id} is listed twice (also ${seen.get(l.id)})`);
    else seen.set(l.id, field);
    const why = !l.file ? 'no lesson file for this id' : !l.exists ? `${l.file} does not exist` : S.failed.has(l.file) ? `${l.file} failed to run` : `${l.file} does not define LESSONS.${l.id}`;
    if (l.open && !S.LESSONS[l.id]) log.error(field, `${l.id} is open:true but no lesson data was loaded for it (${why})`);
    else if (!l.open && S.LESSONS[l.id]) log.warn(field, `${l.id} has lesson data but is not open:true in the list`);
    else if (!l.open && l.exists && !S.failed.has(l.file)) log.warn(field, `${l.file} exists but does not define LESSONS.${l.id}`);
  }
  // A unit with open lessons whose units[] entry is not open:true shows on Home but stays locked on the Lessons tab.
  const unitsArr = Array.isArray(S.DATA.units) ? S.DATA.units : [];
  for (const un of new Set(S.listed.filter(l => l.open && Number(l.unit) >= 1).map(l => Number(l.unit)))) {
    if (!inScope(un)) continue;
    const ent = unitsArr.find(x => x && x.n === un);
    if (!ent || !ent.open) logger(S.dataFile, '', un).warn('units', `unit ${un} has open lessons in unit${un}Lessons but its units[] entry is not open:true, so the Lessons tab shows it locked`);
  }
  const listed = new Set(S.listed.map(l => l.id));
  for (const id of Object.keys(S.LESSONS))
    if (!listed.has(id) && inScope(S.LESSONS[id].unit)) logger(S.lessonFile[id] || S.dataFile, '', S.LESSONS[id].unit).warn('', `${id} has lesson data but is not in any unitNLessons list of content.js`);
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
  loadChecker(S);
  fx = S.fx;
  sanitizeItems(S);
  S.cross = buildCross(S);
  const head = logger('', '');
  head.info('', `site ${ROOT}: ${Object.keys(S.LESSONS).length} lessons from ${new Set(Object.values(S.lessonFile)).size} files (named by the unit lists in ${S.dataFile}), data in ${S.dataFile}`);
  head.info('', `answer checker taken from ${S.engine}: ${S.checkerNames.join(', ')}` +
    (S.writing ? `; writing evaluation: ${S.writingNames.join(', ')}` : ''));
  if (!S.writing) writingUnavailable(`cannot use analyze() from ${S.engine}: ${S.writingWhy || 'unknown reason'}`);
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
