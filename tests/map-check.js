#!/usr/bin/env node
'use strict';
/*
 * map-check.js - compares every built lesson with its row in the unit map (maps/u<N>.json).
 *
 *   node tests/map-check.js [siteRoot] [--unit N] [--quiet]
 *
 *   siteRoot  folder that holds content.js, lessons/ and maps/ (default: current directory)
 *   --unit N  check only unit N: maps/uN.json and the lesson files in lessons/uN/
 *   --quiet   hide INFO lines, print only ERROR / WARN and the summary
 *
 * Plain Node (22), no browser, no npm packages. Same output as content-check.js:
 *   ERROR|WARN|INFO  file | lesson id | field | message
 * then a summary line. Exit code 1 if there is at least one ERROR, 2 on a usage error, otherwise 0.
 *
 * How it works
 *   Runs content.js in a vm sandbox with a few stub globals, then, for every row of every map, the lesson file
 *   that the row's id names (u1l2 -> lessons/u1/l2.js; the file does not have to be listed in index.html yet).
 *   Each lesson file sets LESSONS.<id> inside an IIFE; the checker records what each file sets.
 *
 * Checks for every map row whose lesson file exists
 *   ERROR  new items: every map vocab entry and the map's legal phrase must be in the lesson (vocab[].en and
 *          legalPhrase.en), and the lesson must not add any. Both sides are compared after normalising:
 *          lower case, the part in (parentheses) removed, apostrophes unified, punctuation and spaces trimmed.
 *   ERROR  mode differs from the map: the lesson's mode field, or the part the site will show (the engine shows
 *          listening only when the lesson has "listening" and no "reading").
 *   ERROR  a listening lesson's listening.url differs from the map's clip.url.
 *   WARN   a recycled word appears nowhere in the learner-facing text: reading paragraphs, exercises (recall,
 *          vocabGaps, gA-gD), reading or listening questions and the predict question, quiz, writing model.
 *          Case-insensitive whole words with simple inflections (-s -es -ed -ing and their spelling changes, plus
 *          a few common irregular verbs); in a phrase every word may be inflected ("get home" finds "gets home"),
 *          except small function words (a, the, to, on, up ...); "a / b" passes when either one appears.
 *          Explanations (whyEn, grammar cards, vocab examples) do not count; the message says if the word is there.
 *   WARN   the lesson title (en) differs from the map title; listening.targetSeconds differs from clip.targetSeconds.
 *   INFO   one summary line per lesson.
 *   The map itself is validated: ERROR for a field the checks need (id, mode, clip.url, vocab, legalPhrase) when it
 *   is missing, invalid or unfinished ("…"); WARN for a descriptive field (title, text, grammarFocus, recall, topics,
 *   clip.title) and for recycled words that cannot be checked. Lesson files of a mapped unit without a row: WARN.
 *   Units with lesson files but no map: WARN (INFO for unit 0, which was built before unit maps existed).
 *   Left to the reviewer (needs judgment): grammar focus, sentence topics, quality of recycling, recall items.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ------------------------------------------------------------------ CLI (same options as content-check.js)
const USAGE = 'Usage: node map-check.js [siteRoot] [--unit N] [--quiet]\n' +
  '  siteRoot  folder with content.js, lessons/ and maps/ (default: current directory)\n' +
  '  --unit N  check only unit N (maps/uN.json and lessons/uN/)\n' +
  '  --quiet   hide INFO lines';
const OPT = { quiet: false, unit: null, root: '.' };
{
  const argv = process.argv.slice(2), positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') { console.log(USAGE); process.exit(0); }
    else if (a === '-q' || a === '--quiet') OPT.quiet = true;
    else if (a === '-u' || a === '--unit') OPT.unit = argv[++i];
    else if (a.startsWith('--unit=')) OPT.unit = a.slice(7);
    else if (a.startsWith('-')) { console.error(`unknown option ${a}\n${USAGE}`); process.exit(2); }
    else positional.push(a);
  }
  if (OPT.unit != null) {
    if (!/^\d+$/.test(String(OPT.unit))) { console.error(`--unit needs a unit number (0, 1, 2, ...)\n${USAGE}`); process.exit(2); }
    OPT.unit = Number(OPT.unit);
  }
  if (positional.length > 1) { console.error(`only one siteRoot can be given\n${USAGE}`); process.exit(2); }
  OPT.root = positional[0] || '.';
}
const ROOT = path.resolve(OPT.root);
const inScope = u => OPT.unit == null || Number(u) === OPT.unit;

// ------------------------------------------------------------------ reporting (line format of content-check.js)
const results = [];
const counts = { ERROR: 0, WARN: 0, INFO: 0 };
class Fatal extends Error {}
/* One logger per file/id; head() puts an INFO line in front of this logger's other lines. */
function logger(file, id) {
  const start = results.length;
  let heads = 0;
  const entryOf = (level, field, msg) => ({ level, line: `${level.padEnd(5)} ${[file, id, field].filter(Boolean).join(' | ') || 'site'} | ${msg}` });
  const make = level => (field, msg) => { counts[level]++; results.push(entryOf(level, field, msg)); };
  return {
    error: make('ERROR'), warn: make('WARN'), info: make('INFO'),
    head: (field, msg) => { counts.INFO++; results.splice(start + heads++, 0, entryOf('INFO', field, msg)); },
  };
}

// ------------------------------------------------------------------ small helpers
const isStr = v => typeof v === 'string' && v.trim() !== '';
const isArr = Array.isArray;
const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const list = v => (isArr(v) ? v : []);
const clip = (s, n = 70) => { s = String(s).replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 3) + '...' : s; };
const q = s => '"' + clip(s) + '"';
const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const ARABIC_RE = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
const UNFINISHED_RE = /\u2026|\.\.\./;                       // LESSON-BRIEF: "…" in a row means "stop and ask the coordinator"
const UNFINISHED = 'not finished ("…"): the writer stops and asks the coordinator';

/* Apostrophes: curly quotes, modifier letter, backtick, acute accent and prime all become '. */
const unifyApos = s => String(s).replace(/[\u2018\u2019\u201A\u201B\u2032\u02BC\u0060\u00B4]/g, "'");
/* The text outside (notes), nested notes included. */
function outsideNotes(s) {
  let t = String(s == null ? '' : s), prev;
  do { prev = t; t = t.replace(/\([^()]*\)/g, ' '); } while (t !== prev);
  return t;
}
/* Key two new items are compared by: (notes) removed, lower case, apostrophes unified, spaces collapsed,
   punctuation and spaces trimmed at both ends. "Research (do research)" -> "research". */
const itemKey = s => unifyApos(outsideNotes(s)).toLowerCase().replace(/\s+/g, ' ').replace(/^[\s\p{P}\p{S}]+|[\s\p{P}\p{S}]+$/gu, '');
/* Why a word of the map cannot be compared with a lesson, or null. A word that is only "…" is a placeholder
   ("look forward to …" is a real phrase). */
function badItem(w) {
  const k = itemKey(w);
  if (!k) return UNFINISHED_RE.test(w) ? UNFINISHED : `${q(w)} has no word outside the (notes)`;
  if (ARABIC_RE.test(k)) return `${q(w)}: write the English word or phrase as the lesson will write it, and put Arabic only in (notes)`;
  return null;
}
/* A lesson item that looks like a map item written differently ("do research" for "research (do research)",
   "gifts" for "gift"). Only used to add a hint to an ERROR message. */
const hasWords = (hay, needle) => !!needle && new RegExp('(?<![\\p{L}\\p{N}])' + escapeRe(needle) + '(?![\\p{L}\\p{N}])', 'iu').test(hay);
const plural = (a, b) => a === b + 's' || a === b + 'es' || b === a + 's' || b === a + 'es';
const looksLike = (mapItem, lessonKey) => hasWords(unifyApos(mapItem).toLowerCase(), lessonKey) || hasWords(lessonKey, itemKey(mapItem)) || plural(itemKey(mapItem), lessonKey);
const titleKey = s => unifyApos(s).replace(/\s+/g, ' ').trim().toLowerCase();
/* Same page: scheme and host in lower case (URL does it), no fragment, no trailing slash. */
function urlKey(u) {
  try { const x = new URL(String(u).trim()); return `${x.protocol}//${x.host}${x.pathname.replace(/\/+$/, '')}${x.search}`; }
  catch (_) { return String(u).trim(); }
}
/* The English word of a vocab entry: "en" is the one the flashcard shows ("headword" is a shorter dictionary form). */
const HEAD_FIELDS = ['en', 'word', 'term', 'headword'];
function headOf(v) {
  if (isStr(v)) return v;
  if (!isObj(v)) return null;
  for (const k of HEAD_FIELDS) if (isStr(v[k])) return v[k];
  return null;
}

// ------------------------------------------------------------------ lesson text (what the learner reads)
function decodeEntities(s) {
  return s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&');
}
/* Reading markup: [[word|arabic]] -> word, {shown|key} -> shown, <<s:...>> -> ..., then HTML tags and entities. */
function plain(s) {
  let t = String(s), prev;
  do {
    prev = t;
    t = t.replace(/\[\[([^\[\]|]*)\|[^\[\]]*\]\]/g, '$1').replace(/\{([^{}|]*)\|[^{}]*\}/g, '$1').replace(/\{([^{}]*)\}/g, '$1')
      .replace(/<<[a-z]+:/g, '').replace(/>>/g, '');
  } while (t !== prev);
  return unifyApos(decodeEntities(t.replace(/<[^>]*>/g, ' '))).replace(/\s+/g, ' ').trim();
}
/* Learner-facing text in segments {label, text}. main: what counts as recycling; side: explanations (hint only). */
function learnerText(L) {
  const main = [], side = [];
  const put = (pool, label, v) => {
    if (isArr(v)) v.forEach(x => put(pool, label, x));
    else if (isStr(v)) { const text = plain(v); if (text) pool.push({ label, text }); }
  };
  const around = (pre, a, post) => [pre, a, post].filter(isStr).join(' ');
  const filled = x => (isStr(x.s) && /_{3,}/.test(x.s) && isArr(x.opts) && isStr(x.opts[x.a]) ? x.s.replace(/_{3,}/, x.opts[x.a]) : x.s);
  const R = isObj(L.reading) ? L.reading : null, A = isObj(L.listening) ? L.listening : null;
  if (R) list(R.paras).forEach((p, i) => put(main, `reading.paras[${i}]`, p));
  for (const [name, part] of [['reading', R], ['listening', A]]) {
    if (!part) continue;
    list(part.questions).forEach((x, i) => {
      if (!isObj(x)) return;
      put(main, `${name}.questions[${i}]`, [x.q, x.opts]);
      put(side, `${name}.questions[${i}].whyEn`, x.whyEn);
    });
    if (isObj(part.predict)) {
      put(main, `${name}.predict`, [part.predict.qEn, part.predict.optsEn]);
      put(side, `${name}.predict.revealEn`, part.predict.revealEn);
    }
    put(side, `${name}.introEn`, part.introEn);
    if (isObj(part.insight)) for (const k of Object.keys(part.insight)) if (/^(?:l\d+En|ex\d*)$/.test(k)) put(side, `${name}.insight.${k}`, part.insight[k]);
  }
  // Exercises and quiz: the sentence as the learner sees it (gap filled with the right answer) and every option.
  const each = (key, fn) => list(L[key]).forEach((x, i) => {
    if (!isObj(x)) return;
    put(main, `${key}[${i}]`, fn(x));
    put(side, `${key}[${i}].whyEn`, x.whyEn);
  });
  each('recall', x => [x.promptEn, ...list(x.ans).map(a => around(x.sentPre, a, x.sentPost))]);
  for (const key of ['vocabGaps', 'gA', 'quiz']) each(key, x => [filled(x), x.opts]);
  each('gB', x => [x.s, x.fix]);
  each('gC', x => [x.verb, ...list(x.ans).map(a => around(x.pre, a, x.post))]);
  each('gD', x => [x.ans, x.chips]);
  if (isObj(L.writing)) {
    put(main, 'writing.model', isStr(L.writing.model) ? L.writing.model : L.writing.modelMarked);
    put(side, 'writing.taskEn', L.writing.taskEn);
  }
  list(L.gCards).forEach((c, i) => { if (isObj(c)) put(side, `gCards[${i}]`, c.enHtml || c.html); });
  list(L.vocab).forEach((v, i) => { if (isObj(v)) put(side, `vocab[${i}].ex`, v.ex); });
  if (isObj(L.legalPhrase)) put(side, 'legalPhrase.ex', L.legalPhrase.ex);
  return { main, side };
}

// ------------------------------------------------------------------ recycled words: whole words with simple inflections
const IRREGULAR = Object.fromEntries(('be:am,is,are,was,were,been,being have:has,had,having do:does,did,done,doing go:goes,went,gone ' +
  'get:got,gotten eat:ate,eaten make:made take:took,taken come:came give:gave,given see:saw,seen know:knew,known think:thought ' +
  'buy:bought bring:brought write:wrote,written speak:spoke,spoken break:broke,broken wake:woke,woken find:found leave:left ' +
  'meet:met pay:paid say:said tell:told sleep:slept feel:felt keep:kept begin:began,begun drink:drank,drunk drive:drove,driven ' +
  'spend:spent send:sent teach:taught catch:caught sit:sat stand:stood understand:understood forget:forgot,forgotten ' +
  'choose:chose,chosen lose:lost win:won run:ran fly:flew,flown wear:wore,worn hear:heard build:built become:became')
  .split(' ').map(p => { const [base, forms] = p.split(':'); return [base, forms.split(',')]; }));
function wordForms(w) {
  const f = new Set([w, w + 's', w + 'es', w + 'ed', w + 'ing']);
  if (/e$/.test(w)) { f.add(w + 'd'); f.add(w.slice(0, -1) + 'ing'); }                                  // invite: invited, inviting
  if (/[^aeiou]y$/.test(w)) { f.add(w.slice(0, -1) + 'ies'); f.add(w.slice(0, -1) + 'ied'); }           // study: studies, studied
  if (/(?:^|[^aeiou])[aeiou][^aeiouwxy]$/.test(w)) { f.add(w + w.slice(-1) + 'ed'); f.add(w + w.slice(-1) + 'ing'); }  // stop: stopped
  (IRREGULAR[w] || []).forEach(x => f.add(x));
  return f;
}
/* Words of a phrase that keep their form ("a" must not find "as"); every other word may be inflected. */
const FUNCTION_WORDS = new Set('a an the to of in on at for with from by and or my your his her its our their up out off over down away back'.split(' '));
/* Case-insensitive whole-word pattern for a word or a phrase ("get home" also finds "gets home"). */
function phrasePattern(key) {
  const words = key.split(' ').filter(Boolean);
  if (!words.length) return null;
  const alt = w => (words.length > 1 && FUNCTION_WORDS.has(w) ? escapeRe(w)
    : '(?:' + [...wordForms(w)].sort((a, b) => b.length - a.length).map(escapeRe).join('|') + ')');
  return new RegExp('(?<![\\p{L}\\p{N}_])' + words.map(alt).join('\\s+') + '(?![\\p{L}\\p{N}_])', 'iu');
}

// ------------------------------------------------------------------ loading (vm sandbox, as content-check.js does)
function makeSite() {
  const ctx = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  ctx.window = ctx; ctx.self = ctx;                                          // minimal browser stubs
  vm.createContext(ctx);
  const site = { ctx, contentOk: false, cache: new Map() };
  const rel = 'content.js', file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) logger(rel, '').error('', 'not found (the lesson files are loaded after it, as on the site)');
  else {
    try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: rel, timeout: 10000 }); site.contentOk = true; }
    catch (e) { logger(rel, '').error('', 'script failed to run: ' + (e && e.message)); }
  }
  if (!isObj(ctx.LESSONS)) ctx.LESSONS = {};                                 // content.js normally defines it
  site.acc = ctx.LESSONS;
  return site;
}
/* Run one lesson file once; return {defined: {id: lesson}, error}. The file writes into a fresh object whose
   prototype holds the lessons loaded so far, so its own keys are exactly what this file sets. */
function runLessonFile(site, rel) {
  if (site.cache.has(rel)) return site.cache.get(rel);
  const res = { defined: Object.create(null), error: null };
  const fresh = Object.create(site.acc);
  site.ctx.LESSONS = fresh;
  try { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), site.ctx, { filename: rel, timeout: 10000 }); }
  catch (e) { res.error = (e && e.message) || String(e); }
  const after = site.ctx.LESSONS;                                            // a file may also replace LESSONS wholesale
  const target = after !== fresh && isObj(after) ? after : fresh;
  for (const k of Object.keys(target)) { res.defined[k] = target[k]; site.acc[k] = target[k]; }
  site.ctx.LESSONS = site.acc;
  site.cache.set(rel, res);
  return res;
}
/* Lesson files on disk: Map unit -> [{id, rel}] (lessons/u<U>/l<N>.js). */
function lessonFilesOnDisk() {
  const out = new Map();
  let dirs = [];
  try { dirs = fs.readdirSync(path.join(ROOT, 'lessons'), { withFileTypes: true }); } catch (_) { return out; }
  for (const d of dirs) {
    const m = /^u(\d+)$/.exec(d.name);
    if (!m || !d.isDirectory()) continue;
    const files = fs.readdirSync(path.join(ROOT, 'lessons', d.name)).map(f => /^l(\d+)\.js$/.exec(f)).filter(Boolean)
      .sort((a, b) => Number(a[1]) - Number(b[1])).map(x => ({ id: `u${m[1]}l${x[1]}`, rel: `lessons/${d.name}/${x[0]}` }));
    if (files.length) out.set(Number(m[1]), files);
  }
  return out;
}

// ------------------------------------------------------------------ the map file
const MODES = ['reading', 'listening'];
/* Validate maps/u<N>.json; return the usable rows. A row field the checks need is kept only when it is valid. */
function readMap(rel, map, unit) {
  const log = logger(rel, '');
  if (!isObj(map)) { log.error('', 'the file must hold one JSON object { unit, title, grammar, lessons: [...] }'); return []; }
  if (map.unit !== unit) log.error('unit', `is ${JSON.stringify(map.unit)} but the file name says unit ${unit}`);
  if (!isStr(map.title)) log.warn('title', 'missing (the unit topic)');
  if (!isStr(map.grammar)) log.warn('grammar', 'missing (the unit grammar)');
  if (!isArr(map.lessons) || !map.lessons.length) { log.error('lessons', 'missing or empty (one row per lesson)'); return []; }
  const rows = [], seen = new Set();
  map.lessons.forEach((r, i) => {
    if (!isObj(r)) { log.error(`lessons[${i}]`, 'row is not an object'); return; }
    const m = /^u(\d+)l(\d+)$/.exec(isStr(r.id) ? r.id : '');
    if (!m) { log.error(`lessons[${i}].id`, `${JSON.stringify(r.id)} is not a lesson id like "u${unit}l1"`); return; }
    const id = r.id, rl = logger(rel, id);
    if (Number(m[1]) !== unit) { rl.error('id', `belongs to unit ${m[1]}, not to unit ${unit}`); return; }
    if (seen.has(id)) { rl.error('id', 'has two rows in the map'); return; }
    seen.add(id);
    const row = { id, file: `lessons/u${m[1]}/l${m[2]}.js`, title: isStr(r.title) ? r.title : null, legal: undefined };
    // mode and clip
    if (MODES.includes(r.mode)) row.mode = r.mode;
    else rl.error('mode', isStr(r.mode) && UNFINISHED_RE.test(r.mode) ? UNFINISHED : `${JSON.stringify(r.mode)} must be "reading" or "listening"`);
    if (row.mode === 'listening') {
      const c = r.clip;
      if (!isObj(c) || !isStr(c.url)) rl.error('clip', 'a listening row needs clip: { url, title } with the address of the clip page');
      else if (UNFINISHED_RE.test(c.url)) rl.error('clip.url', UNFINISHED);
      else if (!/^https?:\/\/\S+$/i.test(c.url.trim())) rl.error('clip.url', `${q(c.url)} is not an http(s) address`);
      else row.clipUrl = c.url.trim();
      if (isObj(c)) {
        if (!isStr(c.title)) rl.warn('clip.title', 'missing (the name of the clip)');
        if (c.targetSeconds != null) {
          if (Number.isFinite(c.targetSeconds) && c.targetSeconds > 0) row.targetSeconds = c.targetSeconds;
          else rl.warn('clip.targetSeconds', 'must be a positive number of seconds');
        }
      }
    } else if (row.mode === 'reading') {
      if (r.clip != null) rl.warn('clip', 'a reading row has no clip: use null and put the topic of the text in "text" (or is the mode wrong?)');
      if (!isStr(r.text)) rl.warn('text', 'missing (the topic of the reading text)');
    }
    // new items
    if (!isArr(r.vocab) || !r.vocab.length || ![...r.vocab].every(isStr)) rl.error('vocab', 'must be a non-empty array of words, written as the lesson writes vocab[].en');
    else {
      const keys = new Map();
      let ok = true;
      r.vocab.forEach((w, j) => {
        const bad = badItem(w), k = itemKey(w);
        if (bad) { rl.error(`vocab[${j}]`, bad); ok = false; }
        else if (keys.has(k)) { rl.error(`vocab[${j}]`, `${q(w)} is the same item as vocab[${keys.get(k)}]`); ok = false; }
        else keys.set(k, j);
      });
      if (ok) row.vocab = r.vocab;
    }
    if (r.legalPhrase === null) row.legal = null;                             // the lesson has no legal phrase
    else if (!isStr(r.legalPhrase)) rl.error('legalPhrase', 'must be the legal phrase (a string), or null when the lesson has none');
    else if (badItem(r.legalPhrase)) rl.error('legalPhrase', badItem(r.legalPhrase));
    else row.legal = r.legalPhrase;
    if (row.vocab && isStr(row.legal) && row.vocab.some(v => itemKey(v) === itemKey(row.legal))) rl.error('legalPhrase', `${q(row.legal)} is also in vocab`);
    // recycling
    if (r.recycled == null) rl.warn('recycled', 'missing, so recycling is not checked (use [] when the row recycles nothing)');
    else if (!isArr(r.recycled) || ![...r.recycled].every(isStr)) rl.warn('recycled', 'must be an array of words, so recycling is not checked');
    else {
      const fresh = [...list(row.vocab), ...(isStr(row.legal) ? [row.legal] : [])].map(itemKey);
      row.recycled = r.recycled.filter((w, j) => {
        const bad = badItem(w);
        if (bad) { rl.warn(`recycled[${j}]`, bad + ' (not checked)'); return false; }
        if (fresh.includes(itemKey(w))) rl.warn(`recycled[${j}]`, `${q(w)} is a new item of this lesson, not a recycled one`);
        return true;
      });
    }
    // descriptive fields: for the writer and the reviewer, not compared with the lesson
    if (!row.title) rl.warn('title', 'missing (the lesson title, as in the lesson\'s "en")');
    if (!isStr(r.grammarFocus)) rl.warn('grammarFocus', 'missing');
    if (!isArr(r.topics) || !r.topics.length) rl.warn('topics', 'missing or empty');
    if (!isObj(r.recall) || !isStr(r.recall.from) || !isArr(r.recall.items)) rl.warn('recall', 'should be { from: "<lesson id>", items: [...] }');
    // A field that is only "…" is a placeholder ("How often…?" inside a sentence is not).
    const onlyDots = v => isStr(v) && UNFINISHED_RE.test(v) && v.replace(new RegExp(UNFINISHED_RE.source, 'g'), '').trim() === '';
    const descriptive = [['title', r.title], ['text', r.text], ['grammarFocus', r.grammarFocus], ['clip.title', isObj(r.clip) ? r.clip.title : null],
      ...list(r.topics).map((t, j) => [`topics[${j}]`, t]), ...(isObj(r.recall) ? [['recall.from', r.recall.from], ...list(r.recall.items).map((t, j) => [`recall.items[${j}]`, t])] : [])];
    descriptive.forEach(([field, v]) => { if (onlyDots(v)) rl.warn(field, UNFINISHED); });
    rows.push(row);
  });
  return rows;
}

// ------------------------------------------------------------------ one lesson against its row
function checkLesson(site, mapRel, row, stats) {
  if (!fs.existsSync(path.join(ROOT, row.file))) {
    logger(mapRel, row.id).info('lesson', `${row.file} does not exist yet; nothing to compare`);
    stats.notBuilt++;
    return;
  }
  const run = runLessonFile(site, row.file);
  const log = logger(row.file, row.id);
  const L = run.defined[row.id];
  if (run.error) {
    log.error('', 'lesson file failed to run: ' + run.error);
    if (L === undefined) { stats.broken++; return; }
  }
  if (L === undefined) {
    const other = Object.keys(run.defined).map(k => 'LESSONS.' + k);
    log.error('', `the file does not set LESSONS.${row.id}${other.length ? ` (it sets ${other.join(', ')})` : ''}`);
    stats.broken++;
    return;
  }
  if (!isObj(L)) { log.error('', `LESSONS.${row.id} is not an object`); stats.broken++; return; }
  stats.checked++;
  const parts = [];

  // 1. mode: the lesson's own field, then the part the engine will show
  if (row.mode) {
    const shown = isObj(L.listening) && !isObj(L.reading) ? 'listening' : isObj(L.reading) ? 'reading' : null;
    let ok = L.mode === row.mode;
    if (!ok) log.error('mode', `${L.mode === undefined ? 'missing' : q(L.mode)}, but the map row says ${q(row.mode)}`);
    else if (shown !== row.mode) {
      ok = false;
      if (shown) log.error(shown, `the lesson has a "${shown}" part${shown === 'reading' && isObj(L.listening) ? ' as well as "listening"' : ''}, so the site shows it as a ${shown} lesson; the map row says ${row.mode}`);
      else log.error(row.mode, `missing: the lesson has no "${row.mode}" part, and the map row says ${row.mode}`);
    }
    parts.push(ok ? `mode ${row.mode} ok` : `mode differs (map: ${row.mode})`);
  } else parts.push('mode not compared (map row invalid)');

  // 2. clip: the listening page and its timer
  if (row.mode === 'listening' && row.clipUrl && isObj(L.listening)) {
    const got = isStr(L.listening.url) ? L.listening.url.trim() : '';
    const ok = !!got && urlKey(got) === urlKey(row.clipUrl);
    if (!got) log.error('listening.url', `missing; the map clip is ${row.clipUrl}`);
    else if (!ok) log.error('listening.url', `${got} differs from the map clip ${row.clipUrl}`);
    parts.push(ok ? 'clip URL ok' : 'clip URL differs');
    if (row.targetSeconds != null && Number(L.listening.targetSeconds) !== row.targetSeconds)
      log.warn('listening.targetSeconds', `${JSON.stringify(L.listening.targetSeconds)}, but the map clip says ${row.targetSeconds}`);
  }

  // 3. new items: vocab[].en and legalPhrase.en against the row, nothing missing and nothing extra
  const lessonLegal = L.legalPhrase == null ? null : headOf(L.legalPhrase);
  const lessonLegalKey = lessonLegal ? itemKey(lessonLegal) : null;
  const mapLegalKey = isStr(row.legal) ? itemKey(row.legal) : null;
  let total = 0, found = 0, extra = 0;
  if (row.vocab) {
    const mine = new Map();                                                    // key -> {en, field}
    list(L.vocab).forEach((v, i) => {
      const en = headOf(v), key = itemKey(en || ''), field = `vocab[${i}]`;
      if (!key) { log.error(field, 'has no English word (en), so it cannot be compared with the map'); extra++; }
      else if (mine.has(key)) { log.error(field, `${q(en)} is listed twice (also ${mine.get(key).field})`); extra++; }
      else mine.set(key, { en, field });
    });
    const mapKeys = new Set(row.vocab.map(itemKey));
    const missing = row.vocab.filter(w => !mine.has(itemKey(w)));
    const extras = [...mine].filter(([key]) => !mapKeys.has(key)).map(([key, x]) => Object.assign({ key }, x));
    total += row.vocab.length;
    found += row.vocab.length - missing.length;
    for (const w of missing) {
      const near = extras.find(x => looksLike(w, x.key));
      log.error('vocab', `map item ${q(w)} is missing from the lesson` + (itemKey(w) === lessonLegalKey ? ' (the lesson has it as its legal phrase)'
        : near ? ` (the lesson has ${q(near.en)} in ${near.field})` : ''));
    }
    for (const x of extras) {
      extra++;
      const near = missing.find(w => looksLike(w, x.key));
      log.error(x.field, `${q(x.en)} is a new item that the map row does not list` + (x.key === mapLegalKey ? ' (the map row has it as the legal phrase)'
        : near ? ` (close to the map item ${q(near)})` : ''));
    }
  }
  if (row.legal !== undefined) {
    if (row.legal === null) {
      if (lessonLegal) { extra++; log.error('legalPhrase', `${q(lessonLegal)} is a new item, but the map row has no legal phrase`); }
    } else {
      total++;
      if (L.legalPhrase == null) log.error('legalPhrase', `missing; the map row says ${q(row.legal)}`);
      else if (!lessonLegalKey) log.error('legalPhrase', `has no English phrase (en); the map row says ${q(row.legal)}`);
      else if (lessonLegalKey === mapLegalKey) found++;
      else { extra++; log.error('legalPhrase', `${q(lessonLegal)}, but the map row says ${q(row.legal)}`); }
    }
  }
  parts.push(row.vocab || row.legal !== undefined ? `new items ${found}/${total} found, ${extra ? extra + ' not in the map' : 'none extra'}` : 'new items not compared (map row invalid)');

  // 4. title
  if (row.title && isStr(L.en) && titleKey(L.en) !== titleKey(row.title)) log.warn('en', `lesson title ${q(L.en)} differs from the map title ${q(row.title)}`);

  // 5. recycled words in the learner-facing text
  if (row.recycled) {
    const text = learnerText(L);
    const looked = isObj(L.reading) ? 'the reading text, exercises, questions, quiz or writing model' : 'the exercises, listening questions, quiz or writing model';
    let hits = 0;
    for (const w of row.recycled) {
      const res = itemKey(w).split(/\s*\/\s*/).map(phrasePattern).filter(Boolean);    // "a / b": either one counts
      const has = s => res.some(re => re.test(s.text));
      if (text.main.some(has)) { hits++; continue; }
      const side = text.side.find(has);
      log.warn('recycled', `${q(w)} does not appear in ${looked}` + (side ? ` (only in ${side.label}, an explanation)` : ''));
    }
    parts.push(row.recycled.length ? `recycled ${hits}/${row.recycled.length} found` : 'recycled: none listed');
  }
  log.head('map', parts.join(' · '));
}

// ------------------------------------------------------------------ main
function main() {
  if (!fs.existsSync(ROOT) || !fs.statSync(ROOT).isDirectory()) throw new Fatal(`site folder ${ROOT} not found`);
  const mapsDir = path.join(ROOT, 'maps');
  if (!fs.existsSync(mapsDir)) throw new Fatal(`no maps/ folder in ${ROOT} (unit maps are maps/u<N>.json)`);
  const mapFiles = fs.readdirSync(mapsDir).map(f => /^u(\d+)\.json$/.exec(f)).filter(Boolean)
    .map(m => ({ unit: Number(m[1]), rel: `maps/${m[0]}` })).filter(m => inScope(m.unit)).sort((a, b) => a.unit - b.unit);
  const head = logger('', '');
  const site = makeSite();
  const onDisk = lessonFilesOnDisk();
  head.info('', `site ${ROOT}: ${mapFiles.length ? mapFiles.map(m => m.rel).join(', ') : 'no unit map'}${OPT.unit != null ? ` (unit ${OPT.unit} only)` : ''}; content.js ${site.contentOk ? 'loaded' : 'not loaded'}`);
  const stats = { maps: 0, checked: 0, notBuilt: 0, broken: 0 };
  const rowsByUnit = new Map();                                               // unit -> Set of row ids (null: unreadable map)
  for (const mf of mapFiles) {
    let map;
    try { map = JSON.parse(fs.readFileSync(path.join(ROOT, mf.rel), 'utf8').replace(/^\uFEFF/, '')); }
    catch (e) { logger(mf.rel, '').error('', 'not valid JSON: ' + e.message); rowsByUnit.set(mf.unit, null); continue; }
    stats.maps++;
    const rows = readMap(mf.rel, map, mf.unit);
    rowsByUnit.set(mf.unit, new Set(rows.map(r => r.id)));
    rows.forEach(row => checkLesson(site, mf.rel, row, stats));
  }
  // Lesson files that no map row covers.
  for (const [unit, files] of onDisk) {
    if (!inScope(unit)) continue;
    if (!rowsByUnit.has(unit)) {
      const msg = `${files.length} lesson file${files.length > 1 ? 's' : ''} (${files.map(f => path.basename(f.rel)).join(', ')}) but no unit map maps/u${unit}.json, so not checked`;
      if (unit === 0) logger(`lessons/u${unit}/`, '').info('map', msg + ' (Foundation Week was built before unit maps existed)');
      else logger(`lessons/u${unit}/`, '').warn('map', msg);
    } else if (rowsByUnit.get(unit)) {
      files.filter(f => !rowsByUnit.get(unit).has(f.id)).forEach(f => logger(f.rel, f.id).warn('map', `lesson file exists but maps/u${unit}.json has no row for ${f.id}`));
    }
  }
  if (OPT.unit != null && !mapFiles.length && !onDisk.has(OPT.unit)) head.info('', `unit ${OPT.unit} has no map and no lesson files yet; nothing to check`);
  return stats;
}

let stats = { maps: 0, checked: 0, notBuilt: 0, broken: 0 };
try { stats = main(); }
catch (e) {
  if (e instanceof Fatal) logger('', '').error('', e.message);
  else { console.error((e && e.stack) || e); process.exitCode = 2; }
}
for (const r of results) if (!(OPT.quiet && r.level === 'INFO')) console.log(r.line);
console.log(`\nSUMMARY: ${counts.ERROR} ERROR, ${counts.WARN} WARN, ${counts.INFO} INFO ` +
  `(compared ${stats.checked} lesson${stats.checked === 1 ? '' : 's'} with ${stats.maps} unit map${stats.maps === 1 ? '' : 's'}` +
  `${stats.notBuilt ? `; ${stats.notBuilt} map row${stats.notBuilt === 1 ? '' : 's'} not built yet` : ''}` +
  `${stats.broken ? `; ${stats.broken} lesson file${stats.broken === 1 ? '' : 's'} could not be read` : ''}` +
  `${OPT.unit != null ? `, unit ${OPT.unit} only` : ''} in ${ROOT})`);
if (counts.ERROR > 0 && !process.exitCode) process.exitCode = 1;
