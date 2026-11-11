#!/usr/bin/env node
/*
 * Test of tools/stage-times.js on made-up progress files (Node only, under a second):
 *   node tests/stage-times.test.js [siteRoot]
 * يجرّب أداة أوقات المراحل على ملفات تقدم مصنوعة: من الفتح إلى الإتمام، ومن المرحلة السابقة للدروس القديمة، والاستراحة.
 */
'use strict';
const fs = require('fs'), os = require('os'), path = require('path');
const ROOT = path.resolve(process.argv.slice(2).find(a => !a.startsWith('-')) || '.');
const { stageTimes, format } = require(path.join(ROOT, 'tools', 'stage-times.js'));

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL ' + m); } };
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'stage-times-')), prog = path.join(dir, 'progress');
fs.mkdirSync(prog);
const t0 = Date.UTC(2026, 10, 5, 15, 0), min = 60000;
// u0l1: studied before opening times were saved: each stage counts from the one before it, the first cannot be timed.
fs.writeFileSync(path.join(prog, 'lesson-u0l1.json'), JSON.stringify({ stamps: {
  recall: t0, vocab: t0 + 8 * min, grammar: t0 + 33 * min, reading: t0 + 42 * min, writing: t0 + 46 * min, quiz: t0 + 48 * min } }));
// u0l2: opening times; the reading was left open overnight (a break), and the quiz is not done yet.
const t1 = Date.UTC(2026, 10, 12, 15, 0);
fs.writeFileSync(path.join(prog, 'lesson-u0l2.json'), JSON.stringify({
  opened: { recall: t1, vocab: t1 + 6 * min, grammar: t1 + 20 * min, reading: t1 + 40 * min, writing: t1 + 24 * 60 * min },
  stamps: { recall: t1 + 5 * min, vocab: t1 + 15 * min, grammar: t1 + 38 * min, reading: t1 + 20 * 60 * min, writing: t1 + 24 * 60 * min + 12 * min } }));
fs.writeFileSync(path.join(prog, 'course.json'), '{}');
fs.writeFileSync(path.join(prog, 'lesson-u1l1.json'), JSON.stringify({ stamps: {} }));   // nothing done: not listed

const res = stageTimes(dir, ROOT), byId = Object.fromEntries(res.rows.map(r => [r.id, r]));
const m = (id, k) => byId[id] && byId[id].times[k] && Math.round(byId[id].times[k].min);
ok(res.rows.map(r => r.id).join(',') === 'u0l1,u0l2', 'lessons in course order, a lesson with no finished stage left out: ' + res.rows.map(r => r.id).join(','));
ok(!byId.u0l1.times.recall && m('u0l1', 'vocab') === 8 && m('u0l1', 'grammar') === 25 && m('u0l1', 'reading') === 9 && m('u0l1', 'quiz') === 2,
  'without opening times a stage counts from the end of the stage before it (grammar 25, reading 9, quiz 2)');
ok(m('u0l2', 'recall') === 5 && m('u0l2', 'vocab') === 9 && m('u0l2', 'grammar') === 18 && m('u0l2', 'writing') === 12 && byId.u0l2.times.reading.brk,
  'with opening times a stage counts from its first opening, and over three hours is a break');
ok(!byId.u0l2.done && byId.u0l1.done, 'a lesson with a stage still open is marked not finished');
ok(Math.round(res.avg.grammar.min) === 22 && res.avg.grammar.n === 2 && res.avg.reading.n === 1, 'the average leaves breaks out (grammar 21.5 over 2, reading over 1)');
const txt = format(res);
ok(/planned/.test(txt) && /average/.test(txt) && /\(break\)/.test(txt) && /u0l2 \(not finished\)/.test(txt) && /\b25\*/.test(txt), 'the table shows planned and average rows, breaks and the starred old times');
fs.rmSync(dir, { recursive: true, force: true });

console.log(`\nSUMMARY: ${pass} passed, ${fail} failed (tools/stage-times.js)`);
process.exitCode = fail ? 1 : 0;
