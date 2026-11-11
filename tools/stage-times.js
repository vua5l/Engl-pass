#!/usr/bin/env node
'use strict';
/*
 * stage-times.js - the minutes the learner really spends in each stage of each lesson, from his saved progress.
 *
 *   node tools/stage-times.js <progressFolder> [siteRoot]
 *
 * <progressFolder> holds the lesson-<id>.json files that the site's sync writes (a clone of the private repository
 * vua5l/engl-pass-progress, branch progress, folder progress/; a folder that has a progress/ inside works too).
 * Plain Node 22, no npm packages, nothing is written. Exit code: 0 fine, 2 error.
 *
 * Why: the plan gives each stage its minutes (PARTS in app.js: grammar 12, reading 17 ...). In the first lesson the
 * grammar took 25 minutes against 12, so after five lessons the coordinator shows the learner this table, and he
 * decides how many grammar exercises a lesson should have (item 7 of the plan).
 *
 * How a stage is timed: from its first opening (opened[k], saved since 11 Nov 2026) to its completion (stamps[k]).
 * Older lessons have no opened times; a stage then counts from the completion of the stage before it (the first
 * stage of such a lesson cannot be timed). A stage longer than three hours is a break, not study: it is shown with
 * "(break)" and left out of the averages.
 *
 * أوقات المراحل: دقائق كل مرحلة في كل درس من التقدم المحفوظ، من أول فتح لها إلى إتمامها، ومتوسطها مقابل المقدَّر.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BREAK_MIN = 180;

/* PARTS of app.js: [{ k, en, min }] in the order of the lesson. */
function readParts(root) {
  const src = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const m = /(?:^|\n)var PARTS\s*=\s*\[/.exec(src);
  if (!m) throw new Error('PARTS not found in app.js');
  const start = m.index + m[0].indexOf('var');
  for (let pos = src.indexOf('];', start); pos >= 0; pos = src.indexOf('];', pos + 1)) {
    try { const ctx = vm.createContext({}); vm.runInContext(src.slice(start, pos + 2), ctx); return vm.runInContext('PARTS', ctx).map(p => ({ k: p.k, en: p.en, min: p.min })); }
    catch (_) { /* not the end yet */ }
  }
  throw new Error('PARTS in app.js does not compile');
}

/* The lesson ids in course order, from the unit lists of content.js (unit0Lessons, unit1Lessons, ...). */
function courseOrder(root) {
  const ctx = { console: { log() {} }, document: {}, navigator: {} };
  ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), ctx);
  const D = ctx.DATA || {}, rank = u => (Number(u) >= 100 ? Number(u) - 100 + 0.5 : Number(u));
  return Object.keys(D).filter(k => /^unit\d+Lessons$/.test(k))
    .sort((a, b) => rank(a.match(/\d+/)[0]) - rank(b.match(/\d+/)[0]))
    .flatMap(k => (D[k] || []).map(l => l && l.id).filter(Boolean));
}

/* Minutes per stage for one lesson state: { k: { min, from, brk } } for the stages that can be timed. */
function lessonTimes(state, parts) {
  const st = (state && state.stamps) || {}, op = (state && state.opened) || {}, out = {};
  parts.forEach((p, i) => {
    const end = st[p.k];
    if (!end) return;
    let from = null, how = null;
    if (op[p.k] && op[p.k] <= end) { from = op[p.k]; how = 'opened'; }
    else if (i > 0 && st[parts[i - 1].k] && st[parts[i - 1].k] <= end) { from = st[parts[i - 1].k]; how = 'previous stage'; }
    if (from == null) return;
    const min = (end - from) / 60000;
    out[p.k] = { min, how, brk: min > BREAK_MIN };
  });
  return out;
}

/* All lessons of a progress folder: [{ id, times, done, day }] in course order, then the averages per stage. */
function stageTimes(folder, root) {
  const parts = readParts(root), order = courseOrder(root);
  let dir = folder;
  if (fs.existsSync(path.join(folder, 'progress')) && fs.statSync(path.join(folder, 'progress')).isDirectory()) dir = path.join(folder, 'progress');
  const files = fs.readdirSync(dir).filter(f => /^lesson-.+\.json$/.test(f));
  const rows = files.map(f => {
    const id = f.slice('lesson-'.length, -'.json'.length);
    let state = null;
    try { state = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (_) { /* unreadable: no times */ }
    const stamps = (state && state.stamps) || {}, last = Math.max(0, ...Object.values(stamps).filter(Number.isFinite));
    return { id, times: lessonTimes(state, parts), done: parts.every(p => stamps[p.k]), day: last ? new Date(last).toISOString().slice(0, 10) : null };
  }).filter(r => Object.keys(r.times).length)
    .sort((a, b) => (order.indexOf(a.id) < 0 ? 1e9 : order.indexOf(a.id)) - (order.indexOf(b.id) < 0 ? 1e9 : order.indexOf(b.id)));
  const avg = {};
  parts.forEach(p => {
    const xs = rows.map(r => r.times[p.k]).filter(t => t && !t.brk).map(t => t.min);
    avg[p.k] = xs.length ? { min: xs.reduce((a, b) => a + b, 0) / xs.length, n: xs.length } : null;
  });
  return { parts, rows, avg };
}

function format({ parts, rows, avg }) {
  const r1 = x => (x == null ? '—' : String(Math.round(x)));
  const cell = t => (!t ? '—' : r1(t.min) + (t.brk ? ' (break)' : t.how === 'previous stage' ? '*' : ''));
  const head = ['lesson', ...parts.map(p => p.en), 'total', 'day'];
  const lines = rows.map(r => {
    const ok = parts.map(p => r.times[p.k]).filter(t => t && !t.brk);
    return [r.id + (r.done ? '' : ' (not finished)'), ...parts.map(p => cell(r.times[p.k])), r1(ok.reduce((a, t) => a + t.min, 0)), r.day || '—'];
  });
  lines.push(['planned', ...parts.map(p => String(p.min)), String(parts.reduce((a, p) => a + p.min, 0)), '']);
  lines.push(['average', ...parts.map(p => (avg[p.k] ? r1(avg[p.k].min) + ' (' + avg[p.k].n + ')' : '—')), '', '']);
  const all = [head, ...lines], w = head.map((_, i) => Math.max(...all.map(l => String(l[i]).length)));
  const txt = all.map(l => l.map((c, i) => String(c).padEnd(w[i])).join('  ').trimEnd()).join('\n');
  return txt + '\n\nMinutes from the first opening of a stage to its completion. * = counted from the end of the stage before it ' +
    '(lessons studied before 11 Nov 2026 have no opening times). (break) = over ' + BREAK_MIN + ' minutes, left out of the average. ' +
    'average (n) = the mean over n lessons.';
}

function main(argv) {
  const args = argv.filter(a => !a.startsWith('-'));
  if (!args[0]) { console.error('usage: node tools/stage-times.js <progressFolder> [siteRoot]'); return 2; }
  const res = stageTimes(path.resolve(args[0]), path.resolve(args[1] || path.join(__dirname, '..')));
  if (!res.rows.length) { console.log('no lesson in this folder has a timed stage yet'); return 0; }
  console.log(format(res));
  return 0;
}

if (require.main === module) {
  try { process.exitCode = main(process.argv.slice(2)); }
  catch (e) { console.error('ERROR ' + e.message); process.exitCode = 2; }
}
module.exports = { stageTimes, lessonTimes, readParts, format };
