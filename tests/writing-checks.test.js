#!/usr/bin/env node
/*
 * Writing-check library test: runs the library in app.js (WCHECK_LIB, resolveChecks) and the sentence count of
 * analyze() on the correct and wrong sentences in tests/writing-checks.cases.js. Node only, no browser, under a second.
 *
 *   node tests/writing-checks.test.js [siteRoot]
 *
 * The functions are cut out of app.js by name, as tests/content-check.js does, so the test always runs the site's own
 * code. Exit code 1 when a case fails.
 *
 * يجرّب مكتبة فحوص الكتابة في app.js على الجمل الصحيحة والخاطئة في tests/writing-checks.cases.js، وعدّ الجمل في analyze().
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const ROOT = path.resolve(process.argv.slice(2).find(a => !a.startsWith('-')) || '.');
const appSrc = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const CASES = require(path.join(ROOT, 'tests', 'writing-checks.cases.js'));

/* The shortest piece of source from `start` that ends with `endChar` and compiles on its own. */
function scanUntilCompiles(src, start, endChar) {
  for (let pos = src.indexOf(endChar, start); pos >= 0; pos = src.indexOf(endChar, pos + 1)) {
    const cand = src.slice(start, pos + 1);
    try { new vm.Script(cand); return cand; } catch (_) { /* not complete yet */ }
  }
  return null;
}
/* "function name(...){...}" or "var name = ...;" at the top level of the engine (the last one wins, as on the page). */
function extractDecl(src, name) {
  let m = null;
  for (const x of src.matchAll(new RegExp('(?:^|\\n)(function\\s+' + name + '\\s*\\(|var\\s+' + name + '\\s*=)', 'g'))) m = x;
  if (!m) return null;
  return scanUntilCompiles(src, m.index + m[0].indexOf(m[1]), m[1].startsWith('function') ? '}' : ';');
}

// The data (irregular verbs) as on the page, from content.js.
const dataCtx = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
dataCtx.window = dataCtx; vm.createContext(dataCtx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'), dataCtx, { filename: 'content.js' });

const ctx = vm.createContext({ console, DATA: dataCtx.DATA });
const loaded = new Set();
function load(name) {
  if (loaded.has(name)) return true;
  const code = extractDecl(appSrc, name);
  if (!code) return false;
  vm.runInContext(code, ctx, { filename: 'app.js:' + name });
  loaded.add(name);
  return true;
}
/* Call fn(); while it fails with "X is not defined", cut X out of app.js and call it again. */
function call(fn) {
  for (let i = 0; ; i++) {
    try { return fn(); }
    catch (e) {
      const m = /^([\w$]+) is not defined$/.exec((e && e.message) || '');
      if (i > 40 || !m || !load(m[1])) throw e;
    }
  }
}
vm.runInContext('var ALL_VOCAB = [];', ctx);
for (const n of ['fixQuotes', 'analyze', 'resolveChecks', 'isClosingLine'])
  if (!load(n)) { console.error(`FATAL cannot find "${n}" in app.js`); process.exit(2); }
// Every declaration of the library, so that the ok() functions find their helpers when they run later.
for (const m of appSrc.matchAll(/(?:^|\n)(?:function|var)\s+((?:wl|WL_|WCHECK_LIB)\w*)/g)) load(m[1]);

const resolveChecks = vm.runInContext('resolveChecks', ctx), analyze = vm.runInContext('analyze', ctx), fixQuotes = vm.runInContext('fixQuotes', ctx);
const setVocab = vm.runInContext('(function (v) { ALL_VOCAB = v; })', ctx);

let pass = 0, fail = 0;
const out = [];
const show = s => JSON.stringify(String(s).length > 110 ? String(s).slice(0, 107) + '…' : String(s));
function ok(cond, line) { if (cond) pass++; else { fail++; out.push('FAIL ' + line); } }
function label(spec) { return JSON.stringify(spec, (k, v) => (v instanceof RegExp ? String(v) : v)); }

// 1) analyze(): sentence count, including the closing line of an email.
for (const c of CASES.analyze || []) {
  const a = call(() => analyze(c.text));
  ok(a && a.sentences === c.sentences, `analyze() counts ${a && a.sentences} sentences, expected ${c.sentences}: ${show(c.text)}`);
}

// 2) Library checks: every "pass" text must meet the check, every "fail" text must not.
for (const c of CASES.checks || []) {
  const lesson = { vocab: (c.vocab || []).map(en => ({ en })) };
  const vocab = lesson.vocab.slice();
  const chk = call(() => resolveChecks([c.check], lesson))[0];
  if (!chk || chk.problem || typeof chk.ok !== 'function') { ok(false, `${label(c.check)} cannot be built: ${chk && chk.problem}`); continue; }
  ok(typeof chk.tEn === 'string' && chk.tEn && typeof chk.t === 'string' && chk.t && typeof chk.k === 'string' && chk.k, `${label(c.check)} has no k, tEn or t`);
  for (const [want, list] of [[true, c.pass || []], [false, c.fail || []]]) {
    for (const text of list) {
      setVocab(vocab);
      let got;
      try { got = call(() => { const a = analyze(text); return !!chk.ok(a, fixQuotes(text)); }); }
      catch (e) { ok(false, `${label(c.check)} throws (${e.message}) on ${show(text)}`); continue; }
      finally { setVocab([]); }
      ok(got === want, `${label(c.check)} must ${want ? 'accept' : 'reject'} ${show(text)}`);
    }
  }
}

// 3) Wrong use of the library must be refused (the content checker reports it as an ERROR).
for (const c of CASES.refused || []) {
  const chk = call(() => resolveChecks([c], {}))[0];
  ok(chk && typeof chk.problem === 'string' && chk.problem && chk.ok && chk.ok() === false, `${label(c)} must be refused with a problem`);
}

// 4) The texts the screen shows for a check.
for (const c of CASES.texts || []) {
  const chk = call(() => resolveChecks([c.check], c.lesson || {}))[0] || {};
  for (const f of ['k', 'tEn', 't', 'ex']) if (c[f] !== undefined) ok(chk[f] === c[f], `${label(c.check)} ${f} is ${show(chk[f])}, expected ${show(c[f])}`);
}

// 5) A lesson check with its own ok function is left as it is.
{
  const own = { k: 'x', tEn: 'x', t: 'x', ok() { return true; } };
  ok(call(() => resolveChecks([own], {}))[0] === own, 'a check with its own ok() must stay as it is');
}

for (const l of out) console.log(l);
console.log(`\nSUMMARY: ${pass} passed, ${fail} failed (writing-check library in ${path.join(ROOT, 'app.js')})`);
process.exitCode = fail ? 1 : 0;
