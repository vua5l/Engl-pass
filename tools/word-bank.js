#!/usr/bin/env node
'use strict';
/*
 * word-bank.js - writes the word bank of content.js: the verified sound file and Oxford page of every word a
 * learner can tap that is not a lesson's vocabulary word.
 *
 *   node tools/word-bank.js [siteRoot]            add the words that have no entry yet, keep the rest
 *   node tools/word-bank.js [siteRoot] --refresh  look every word up again
 *   node tools/word-bank.js [siteRoot] --check    write nothing, ask no website; exit 1 and list the missing words
 *   node tools/word-bank.js [siteRoot] --unit 4 [--out folder]
 *                                                 the unit sheet (since 11 Nov 2026): before any writer starts, look up
 *                                                 once every new word of maps/u4.json and the text of its clips (below)
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

// ------------------------------------------------------------------ the unit sheet (since 11 Nov 2026)
/*
 * node tools/word-bank.js --unit 4 [--out folder] runs once, when the coordinator has written maps/u4.json and before
 * any writer starts. For every new word of the map (vocab and legalPhrase, without the words in brackets) it writes:
 *   Oxford   the entry (oxfordSlug, as the lessons need it), its CEFR level in the Oxford 3000/5000 (none = not in
 *            the lists, so the word may not be a vocab word), its part of speech, and its first meaning;
 *   sound    the human recording(s) as entryFor() picks them (wikiFile or wikiFiles), with the recorder's name and
 *            the licence from Wikimedia Commons, joined in a ready wikiCredit for the lesson's sources page;
 * and for every listening clip the text of its page (the ELLLO script, or a block whose id or class says transcript).
 * The writers and reviewers read <out>/u4-words.md instead of opening these pages one by one, which used to cost each
 * of them the same lookups. The clip texts are copyrighted: they stay in the work folder (default: the system temp
 * folder), never in the repository, and the tool refuses an --out inside it.
 */
const UA = 'engl-pass-word-bank/1.0 (https://github.com/vua5l/Engl-pass; personal study site)';   // Wikimedia asks every caller to name itself
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'", rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', hellip: '…', mdash: '—', ndash: '–' };
const decode = t => String(t || '').replace(/&(#?\w+);/g, (m, e) => (ENTITIES[e] != null ? ENTITIES[e] : /^#\d+$/.test(e) ? String.fromCodePoint(+e.slice(1)) : /^#x[0-9a-f]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : m));
const plainText = h => decode(String(h || '').replace(/<(?:br|\/p|\/li|\/div|\/h\d)\b[^>]*>/gi, '\n').replace(/<[^>]+>/g, ' '))
  .split('\n').map(l => l.replace(/[ \t ]+/g, ' ').trim()).filter(Boolean).join('\n');
/* The inner HTML of the element whose opening tag matches `open` (balanced over the same tag name), or null. */
function innerOf(html, open) {
  const m = open.exec(html);
  if (!m) return null;
  const tag = /^<(\w+)/.exec(m[0])[1].toLowerCase(), re = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'gi');
  re.lastIndex = m.index + m[0].length;
  for (let depth = 1, x; (x = re.exec(html));) if ((depth += x[1] ? -1 : 1) === 0) return html.slice(m.index + m[0].length, x.index);
  return null;
}
/* Oxford's entry page: headword, part of speech, level (A1–C1 in the Oxford 3000/5000, or null) and first meaning. */
function oxfordEntry(slug) {
  const key = 'p:' + slug;
  if (cache[key] !== undefined) return cache[key];
  const url = 'https://www.oxfordlearnersdictionaries.com/definition/english/' + encodeURIComponent(slug).replace(/%23/g, '#');
  const page = curl(url.split('#')[0], ['-L']);              // Oxford refuses unknown agents (403); curl's own works, as for the search
  pause(800);
  if (!/<span class="def"/.test(page)) throw new Error(`Oxford's page for "${slug}" did not open; try again later`);
  const sym = /class="ox([35])ksym_([abc][12])"/.exec(page);
  const def = innerOf(page, /<span class="def"[^>]*>/);
  return (cache[key] = {
    slug, url: url.split('#')[0],
    headword: plainText((/<h1 class="headword"[^>]*>([\s\S]*?)<\/h1>/.exec(page) || [])[1]) || null,
    pos: plainText((/<span class="pos"[^>]*>([^<]*)</.exec(page) || [])[1]) || null,
    level: sym ? sym[2].toUpperCase() : null,
    list: sym ? 'Oxford ' + sym[1] + '000' : null,
    phon: plainText((/<span class="phon">([^<]*)</.exec(page) || [])[1]) || null,
    def: def ? plainText(def).replace(/\s*\n\s*/g, ' ') : null,
  });
}
/* Lingua Libre writes "Speaker: X Recorder: X": one name when both are the same person. */
function oneName(a) {
  const sr = a && /^Speaker:\s*(.+?)\s+Recorder:\s*(.+)$/.exec(a);
  return sr ? (sr[1] === sr[2] ? sr[1] : 'Speaker: ' + sr[1] + ', Recorder: ' + sr[2]) : a;
}
/* Recorder and licence of Wikimedia Commons files, 50 files a request: Map file -> { artist, license, licenseUrl, page }. */
function commonsCredits(files) {
  const out = new Map(), todo = [];
  for (const f of files) { const c = cache['c:' + f]; if (c) out.set(f, Object.assign({}, c, { artist: oneName(c.artist) })); else todo.push(f); }
  for (let i = 0; i < todo.length; i += 50) {
    const batch = todo.slice(i, i + 50);
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=extmetadata' +
      '&iiextmetadatafilter=Artist%7CLicenseShortName%7CLicenseUrl&titles=' + encodeURIComponent(batch.map(f => 'File:' + f).join('|'));
    let d = null;
    for (const wait of [0, 15000, 45000]) {                // Wikimedia asks callers to slow down rather than retry fast
      if (wait) pause(wait);
      try { d = JSON.parse(curl(url, ['-A', UA])); break; } catch (_) { d = null; }
    }
    if (!d || !d.query) continue;                           // no answer: these files get credit null, and the sheet says so
    const back = new Map(batch.map(f => ['File:' + f, f]));
    for (const n of d.query.normalized || []) if (back.has(n.from)) back.set(n.to, back.get(n.from));
    for (const p of Object.values(d.query.pages || {})) {
      const f = back.get(p.title), m = (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].extmetadata) || null;
      if (!f || !m) continue;
      const c = { artist: oneName(plainText(m.Artist && m.Artist.value).replace(/\n/g, ' ')) || null, license: (m.LicenseShortName && m.LicenseShortName.value) || null,
        licenseUrl: (m.LicenseUrl && m.LicenseUrl.value) || null, page: 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(f) };
      out.set(f, (cache['c:' + f] = c));
    }
    pause(1000);
  }
  return out;
}
/* The text of a clip page: ELLLO's script (#transcript), else the first block whose id or class says transcript. */
function clipTranscript(url) {
  const page = curl(url, ['-L']);
  if (!page) return { text: null, why: 'the page did not open' };
  const html = innerOf(page, /<div[^>]+id="transcript"[^>]*>/i) || innerOf(page, /<(?:div|section)[^>]+(?:id|class)="[^"]*transcript[^"]*"[^>]*>/i);
  const text = html && plainText(html.replace(/<div id="menuright">[\s\S]*?<\/table>\s*<\/div>/i, '')).replace(/ +:/g, ':');
  return text && text.length > 80 ? { text } : { text: null, why: 'no transcript on the page: run tools/hear.py on the audio' };
}
const bare = w => String(w || '').replace(/\s*\(.*$/, '').trim();
function unitSheet(root, unit, outDir) {
  const file = path.join(root, 'maps', 'u' + unit + '.json');
  if (!fs.existsSync(file)) throw new Error(`no map ${path.relative(root, file)}: write the unit map first`);
  const rel = path.relative(path.resolve(root), path.resolve(outDir));
  if (!rel.startsWith('..') && !path.isAbsolute(rel)) throw new Error('--out must be outside the repository (the clip texts are copyrighted)');
  const map = JSON.parse(fs.readFileSync(file, 'utf8')), words = [], clips = [];
  for (const L of map.lessons || []) {
    (L.vocab || []).forEach(v => words.push({ lesson: L.id, en: bare(v), kind: 'vocab' }));
    if (L.legalPhrase) words.push({ lesson: L.id, en: bare(L.legalPhrase), kind: 'legalPhrase' });
    if (L.clip && L.clip.url) clips.push({ lesson: L.id, url: L.clip.url, title: L.clip.title || '' });
  }
  for (const w of words) {
    const e = entryFor(w.en.toLowerCase(), w.en);
    w.oxford = e.oxfordSlug ? oxfordEntry(e.oxfordSlug) : null;
    w.sound = e.wikiFile ? [e.wikiFile] : e.wikiFiles || [];
    /* A phrase often has no page of its own (legal system → system): the level and meaning are then the other word's. */
    const hw = w.oxford && w.oxford.headword && w.oxford.headword.toLowerCase().replace(/\s+/g, ' ');
    if (hw && hw !== w.en.toLowerCase()) w.oxfordPageOf = w.oxford.headword;
    /* No recording of exactly this word: the files Wiktionary has for it (desert-noun, record-verb), for an OVERRIDES line. */
    if (!w.sound.length) w.candidates = kaikkiFiles(w.en.toLowerCase()).slice(0, 6);
    try { fs.writeFileSync(CACHE, JSON.stringify(cache)); } catch (_) { /* the cache only saves time */ }
  }
  const credits = commonsCredits([...new Set(words.flatMap(w => w.sound))]);
  for (const w of words) {
    w.credits = w.sound.map(f => Object.assign({ file: f }, credits.get(f) || { artist: null, license: null }));
    w.wikiCredit = w.sound.length ? w.credits.map(c => 'File:' + c.file + (c.artist ? ' · ' + c.artist : '') + (c.license ? ' · ' + c.license : '')).join(' & ') + ' · Wikimedia Commons' : null;
  }
  fs.mkdirSync(outDir, { recursive: true });
  for (const c of clips) {
    const t = clipTranscript(c.url);
    if (t.text) { c.transcriptFile = path.join(outDir, c.lesson + '-clip.txt'); fs.writeFileSync(c.transcriptFile, t.text + '\n'); }
    else c.why = t.why;
    pause(500);
  }
  try { fs.writeFileSync(CACHE, JSON.stringify(cache)); } catch (_) { /* the cache only saves time */ }
  const made = new Date().toISOString().slice(0, 10), json = path.join(outDir, 'u' + unit + '-words.json'), md = path.join(outDir, 'u' + unit + '-words.md');
  fs.writeFileSync(json, JSON.stringify({ unit, made, words, clips }, null, 1) + '\n');
  const cell = x => String(x == null ? '—' : x).replace(/\|/g, '/').replace(/\n/g, ' ');
  const lines = ['# Unit ' + unit + ' words · كلمات الوحدة ' + unit, '',
    `Made by \`node tools/word-bank.js --unit ${unit}\` on ${made}. Read this instead of opening Oxford, Wiktionary and Wikimedia pages; copy \`oxfordSlug\`, \`wikiFile\` (or \`wikiFiles\`) and \`wikiCredit\` into the lesson as they are.`,
    'يقرأ الكاتب والمراجع هذا الملف بدل فتح الصفحات، وينقلان oxfordSlug وwikiFile وwikiCredit كما هي.', ''];
  for (const L of map.lessons || []) {
    lines.push('## ' + L.id + ' · ' + (L.title || ''), '', '| word | level | part of speech | first meaning (Oxford) | oxfordSlug | sound file | wikiCredit |', '|---|---|---|---|---|---|---|');
    for (const w of words.filter(x => x.lesson === L.id)) {
      const o = w.oxford || {};
      const level = w.oxfordPageOf ? 'page of «' + w.oxfordPageOf + '»' + (o.level ? ': ' + o.level : '') : o.level ? o.level + ' · ' + o.list : (w.oxford ? 'not in Oxford 3000/5000' : 'no Oxford page');
      lines.push('| ' + [w.en + (w.kind === 'legalPhrase' ? ' (legal)' : ''), level, o.pos, o.def, o.slug, w.sound.join(' + ') || 'no human recording', w.wikiCredit].map(cell).join(' | ') + ' |');
    }
    const c = clips.find(x => x.lesson === L.id);
    if (c) lines.push('', 'Clip: ' + c.url + (c.transcriptFile ? '  \nText of the clip page (copyrighted, not for the site): `' + c.transcriptFile + '`' : '  \nNo text: ' + c.why));
    lines.push('');
  }
  const warn = words.filter(w => w.kind === 'vocab' && !w.oxfordPageOf && !(w.oxford && w.oxford.level)).map(w => w.lesson + ' ' + w.en + ': not in Oxford 3000/5000')
    .concat(words.filter(w => w.oxfordPageOf).map(w => w.lesson + ' ' + w.en + ': Oxford\'s page is for «' + w.oxfordPageOf + '»; check that its meaning is the lesson\'s, and the level of the phrase itself'))
    .concat(words.filter(w => !w.sound.length).map(w => w.lesson + ' ' + w.en + ': no human recording of exactly this word (no speaker button)' + (w.candidates && w.candidates.length ? '; Wiktionary has: ' + w.candidates.join(', ') + ' (pick one in OVERRIDES)' : '')))
    .concat(words.filter(w => w.sound.length && w.credits.some(c => !c.artist)).map(w => w.lesson + ' ' + w.en + ': recorder not found on Commons (open the file page)'));
  if (warn.length) lines.push('## To check · للمراجعة', '', ...warn.map(x => '- ' + x), '');
  fs.writeFileSync(md, lines.join('\n'));
  console.log(`unit ${unit}: ${words.length} words, ${clips.filter(c => c.transcriptFile).length}/${clips.length} clip texts, ${warn.length} to check\n  ${md}\n  ${json}`);
  warn.forEach(x => console.log('  ' + x));
  return 0;
}

function main(argv) {
  let root = path.join(__dirname, '..'), check = false, refresh = false, unit = null, out = null;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') check = true;
    else if (a === '--refresh') refresh = true;
    else if (a === '--unit' && /^\d+$/.test(argv[i + 1] || '')) unit = +argv[++i];
    else if (a === '--out' && argv[i + 1]) out = path.resolve(argv[++i]);
    else if (a.startsWith('-')) { console.error('usage: node tools/word-bank.js [siteRoot] [--check] [--refresh] [--unit N [--out folder]]'); return 2; }
    else root = path.resolve(a);
  }
  if (unit != null) return unitSheet(root, unit, out || path.join(os.tmpdir(), 'engl-pass-unit-' + unit));
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
