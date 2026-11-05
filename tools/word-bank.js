#!/usr/bin/env node
'use strict';
/*
 * word-bank.js - writes the word bank of content.js: the verified sound file and Oxford page of every word a
 * learner can tap that is not a lesson's vocabulary word.
 *
 *   node tools/word-bank.js [siteRoot]            add the words that have no entry yet, keep the rest
 *   node tools/word-bank.js [siteRoot] --refresh  look every word up again
 *   node tools/word-bank.js [siteRoot] --check    write nothing, ask no website; exit 1 and list the missing words
 *
 * Why it exists: the engine used to guess a file called En-us-<word>.ogg and an Oxford page called <word>.
 * Neither exists for many words (studying, raining), so the buttons were dead. The engine now guesses nothing:
 * a word gets a speaker button only if it has a known recording.
 *
 * Which words: recall answers, the tappable words of reading texts ([[word|ar]] and {word}), the irregular verbs,
 * and the legal corner of the unit tests. A word that a lesson's vocab or legalPhrase already covers, with a sound
 * file and an Oxford page, needs no entry.
 *
 * Where the facts come from:
 *   sound   the Wiktionary data on kaikki.org (the same source the lesson writers use), human recordings only.
 *           British first, then American, then Lingua Libre. A phrase with no recording of its own plays its
 *           words one after the other, only if every word has a recording.
 *   Oxford  Oxford's own search (search/english/direct/?q=word), which goes from studying to study_2. A word that
 *           Oxford does not know gets noOxford: true and no button; a phrase uses its longest word.
 * tests/link-check.js checks on GitHub that every file of the bank opens.
 *
 * OVERRIDES holds the decisions that need a human: a word pronounced differently by meaning.
 * The block in content.js sits between the comment lines word-bank:start and word-bank:end and is written only by
 * this tool. Plain Node 22 and curl, no npm packages. Exit code: 0 fine, 1 --check found missing words, 2 error.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const START = '/* word-bank:start */', END = '/* word-bank:end */';
const CACHE = path.join(os.tmpdir(), 'engl-pass-word-bank-cache.json');
const OVERRIDES = {
  present: { wikiFile: 'en-us-present-adjective.ogg' },            // حاضر: PREsent, not preSENT
  do: { wikiFile: 'LL-Q1860 (eng)-Vealhurl-do.wav' },              // the stressed word, not "en-us-do (unstressed).ogg"
  bow: { wikiFile: 'En-uk-bow-2.ogg', oxfordSlug: 'bow1_2' },      // انحناءة: /baʊ/, not the bow of arrows
};
/* A recording of one of these words alone is stressed and sounds wrong inside a phrase (go to court), so a phrase skips them. */
const SKIP_IN_PHRASE = new Set(['the', 'a', 'an', 'to', 'of']);

// ------------------------------------------------------------------ the site
function loadSite(root) {
  const sandbox = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  sandbox.window = sandbox; sandbox.self = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), sandbox, { filename: 'content.js' });
  vm.runInContext('if (typeof LESSONS === "undefined") { var LESSONS = {}; }', sandbox);
  const DATA = sandbox.DATA;
  for (const key of Object.keys(DATA).filter(k => /^unit\d+Lessons$/.test(k)))
    for (const l of DATA[key] || []) {
      const m = /^u(\d+)l(\d+)$/.exec((l && l.id) || ''), file = m && path.join(root, 'lessons', 'u' + m[1], 'l' + m[2] + '.js');
      if (file && fs.existsSync(file)) vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
    }
  return { DATA, LESSONS: vm.runInContext('LESSONS', sandbox) };
}

/* Every word a learner can tap: Map lowercased word -> { en, at } (at: the first place it is used). */
function reachableWords({ DATA, LESSONS }) {
  const out = new Map();
  const add = (w, at) => { const en = String(w || '').trim(), k = en.toLowerCase(); if (k && !out.has(k)) out.set(k, { en, at }); };
  for (const id of Object.keys(LESSONS)) {
    const L = LESSONS[id];
    (L.recall || []).forEach(x => add(x.ans && x.ans[0], id + ' recall'));
    const text = ((L.reading && L.reading.paras) || []).join(' ');
    for (const m of text.matchAll(/\[\[([^\]|]+)\|[^\]]+\]\]/g)) add(m[1], id + ' reading');
    for (const m of text.matchAll(/\{([^}|]+)(?:\|([^}]+))?\}/g)) add(m[2] || m[1], id + ' reading');
  }
  (DATA.irregularVerbs || []).forEach(v => add(v.base, 'irregularVerbs'));
  Object.keys(DATA.unitTests || {}).forEach(u => {
    const lc = DATA.unitTests[u].legalCorner;
    ((lc && lc.terms) || []).forEach(t => add(t.en, 'unitTests[' + u + '].legalCorner'));
  });
  return out;
}

/* What the lessons themselves know: Map word -> vocab entry, the entry with a sound file first. */
function vocabWords(LESSONS) {
  const map = new Map();
  const has = v => !!(v && (v.wikiFile || (v.wikiFiles && v.wikiFiles.length)));
  const add = v => { if (!v || !v.en) return; const k = v.en.toLowerCase().trim(); if (!map.has(k) || (!has(map.get(k)) && has(v))) map.set(k, v); };
  for (const id of Object.keys(LESSONS)) { (LESSONS[id].vocab || []).forEach(add); add(LESSONS[id].legalPhrase); }
  return map;
}

const covered = v => !!(v && (v.wikiFile || (v.wikiFiles && v.wikiFiles.length)) && v.oxfordSlug);

function currentBank(root) {
  const text = fs.readFileSync(path.join(root, 'content.js'), 'utf8'), s = text.indexOf(START), e = text.indexOf(END);
  if (s < 0 || e < s) return {};
  const m = /=\s*(\{[\s\S]*\});?\s*$/.exec(text.slice(s + START.length, e).trim());
  return m ? JSON.parse(m[1]) : {};
}

// ------------------------------------------------------------------ the two sources
let cache = {};
try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch (_) { /* first run */ }
const pause = ms => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms); };
function curl(url, args) {
  try { return execFileSync('curl', ['-sS', '--max-time', '25', ...args, url], { encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'ignore'] }); }
  catch (_) { return ''; }
}

/* The audio files Wiktionary lists for a word, in kaikki.org's own spelling of the file names. */
function kaikkiFiles(word) {
  const key = 'k:' + word;
  if (cache[key]) return cache[key];
  const files = [], tried = new Set([word, word.toLowerCase(), word[0].toUpperCase() + word.slice(1).toLowerCase()]);
  for (const w of tried) {
    const dir = encodeURIComponent(w[0]) + '/' + encodeURIComponent(w.slice(0, 2));
    const body = curl('https://kaikki.org/dictionary/English/meaning/' + dir + '/' + encodeURIComponent(w) + '.jsonl', []);
    pause(120);
    for (const line of body.split('\n')) {
      let d; try { d = JSON.parse(line); } catch (_) { continue; }
      if (String(d.word || '').toLowerCase() !== word.toLowerCase()) continue;
      for (const s of d.sounds || []) if (s.audio && !files.includes(s.audio)) files.push(s.audio);
    }
  }
  return (cache[key] = files);
}

/* The best human recording of exactly this word, or null. */
function pickFile(word, files) {
  const w = word.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rank = f => {
    if (/unstressed|weak|strong/i.test(f)) return 99;
    if (new RegExp('^en-(uk|gb)-' + w + '\\.(ogg|oga|wav|mp3)$', 'i').test(f)) return 0;
    if (new RegExp('^en-us-' + w + '\\.(ogg|oga|wav|mp3)$', 'i').test(f)) return 1;
    if (new RegExp('^en-[a-z]+-' + w + '\\.(ogg|oga|wav|mp3)$', 'i').test(f)) return 2;
    if (new RegExp('^LL-Q1860 \\(eng\\)-.*-' + w + '\\.wav$', 'i').test(f)) return 3;
    return 99;
  };
  const best = [...files].sort((a, b) => rank(a) - rank(b))[0];
  return best != null && rank(best) < 99 ? best : null;
}

/* Oxford's page for a word: its id, or null when Oxford does not know it. */
function oxfordSlug(word) {
  const key = 'o:' + word.toLowerCase();
  if (cache[key] !== undefined) return cache[key];
  const url = 'https://www.oxfordlearnersdictionaries.com/search/english/direct/?q=' + encodeURIComponent(word);
  const out = curl(url, ['-o', '/dev/null', '-w', '%{http_code} %{redirect_url}']).trim();
  pause(800);
  const m = /\/definition\/english\/([^?\s]+)/.exec(out);
  if (m) return (cache[key] = decodeURIComponent(m[1]));
  if (/spellcheck/.test(out)) return (cache[key] = null);
  throw new Error(`Oxford did not answer for "${word}" (${out || 'no reply'}); try again later`);
}

// ------------------------------------------------------------------ one entry
function entryFor(word, display) {
  const e = { en: display };
  const over = OVERRIDES[word];
  const tokens = word.match(/[a-z][a-z'-]*/g) || [];
  let file = over && over.wikiFile, files = null;
  if (!file) file = pickFile(word, kaikkiFiles(word));
  if (!file && tokens.length > 1) {
    const each = tokens.filter(t => !SKIP_IN_PHRASE.has(t)).map(t => (OVERRIDES[t] && OVERRIDES[t].wikiFile) || pickFile(t, kaikkiFiles(t)));
    if (each.length && each.every(Boolean)) files = each;
  }
  if (file) e.wikiFile = file; else if (files) e.wikiFiles = files;
  /* Oxford's search of a whole phrase can land on an unrelated page (thank god went to TGIF), so a phrase page counts only if it names a word of the phrase. */
  let slug = (over && over.oxfordSlug) || oxfordSlug(word);
  if (tokens.length > 1) {
    const words = tokens.map(t => t.replace(/'s$/, ''));
    if (!slug || !words.some(t => slug.split('#')[0].toLowerCase().startsWith(t.slice(0, 4)))) slug = oxfordSlug(words.reduce((a, b) => (b.length > a.length ? b : a)));
  }
  if (slug) e.oxfordSlug = slug; else e.noOxford = true;
  return e;
}

function writeBank(root, bank) {
  const file = path.join(root, 'content.js');
  const text = fs.readFileSync(file, 'utf8'), s = text.indexOf(START), e = text.indexOf(END);
  const keys = Object.keys(bank).sort();
  const body = START + '\nDATA.wordBank = {\n' + keys.map(k => '  ' + JSON.stringify(k) + ': ' + JSON.stringify(bank[k])).join(',\n') + '\n};\n' + END;
  fs.writeFileSync(file, s >= 0 && e > s ? text.slice(0, s) + body + text.slice(e + END.length) : text.replace(/\s*$/, '\n\n') + body + '\n');
}

function main(argv) {
  let root = path.join(__dirname, '..'), check = false, refresh = false;
  for (const a of argv) {
    if (a === '--check') check = true;
    else if (a === '--refresh') refresh = true;
    else if (a.startsWith('-')) { console.error('usage: node tools/word-bank.js [siteRoot] [--check] [--refresh]'); return 2; }
    else root = path.resolve(a);
  }
  const site = loadSite(root), bank = currentBank(root), vocab = vocabWords(site.LESSONS), words = reachableWords(site);
  const missing = [...words.keys()].filter(k => !covered(vocab.get(k)) && !bank[k]);
  if (check) {
    if (!missing.length) { console.log(`word bank is complete (${Object.keys(bank).length} entries)`); return 0; }
    console.log(`word bank: ${missing.length} tappable words have no entry; run: node tools/word-bank.js`);
    missing.forEach(k => console.log('  ' + k + '  (' + words.get(k).at + ')'));
    return 1;
  }
  const next = refresh ? {} : bank;
  const todo = refresh ? [...words.keys()].filter(k => !covered(vocab.get(k))) : missing;
  todo.forEach((k, i) => {
    next[k] = entryFor(k, /^[A-Z]/.test(words.get(k).en) && /^(tangier|hegra|maldives|north africa|unesco)/i.test(k) ? words.get(k).en : k);
    if (i % 25 === 0) { try { fs.writeFileSync(CACHE, JSON.stringify(cache)); } catch (_) { /* the cache only saves time */ } }
  });
  try { fs.writeFileSync(CACHE, JSON.stringify(cache)); } catch (_) { /* the cache only saves time */ }
  Object.keys(next).forEach(k => { if (!words.has(k)) delete next[k]; });   // a word no lesson uses any more
  writeBank(root, next);
  const list = Object.keys(next);
  console.log(`word bank: ${list.length} entries, ${todo.length} looked up; ` +
    `${list.filter(k => !next[k].wikiFile && !next[k].wikiFiles).length} without a recording, ${list.filter(k => next[k].noOxford).length} without an Oxford page`);
  return 0;
}

if (require.main === module) {
  try { process.exitCode = main(process.argv.slice(2)); }
  catch (e) { console.error('ERROR ' + e.message); process.exitCode = 2; }
}
module.exports = { reachableWords, vocabWords, loadSite, covered };
