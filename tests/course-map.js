#!/usr/bin/env node
/* خريطة الكورس لأول كل جلسة عمل (مهارة english-passport-workshop).
   تطبع HTML خريطة «ما بُني وما بقي» من حالة الموقع نفسها: مراحل الرحلة، ووحدات A2 بمربعات دروسها،
   واختبار كل وحدة، والاختبارات القبلية. يُعطى ناتجها كما هو لأداة show_widget.
   الاستعمال: node tests/course-map.js [جذر الموقع]
   البيانات من `node tests/content-check.js --map`، فلا تُكتب الخريطة باليد ولا تتأخر عن الموقع.
   ويطبع سطر خلاصة على stderr لمن يكتب تحت الخريطة. */
'use strict';
const { execFileSync } = require('child_process');
const path = require('path');

const root = path.resolve(process.argv[2] || process.cwd());
let raw;
try { raw = execFileSync(process.execPath, [path.join(__dirname, 'content-check.js'), root, '--map'], { encoding: 'utf8' }); }
catch (e) { raw = e.stdout || ''; }
let map;
try { map = JSON.parse(raw); } catch (e) { console.error('course-map: could not read the --map output'); process.exit(1); }
if (!map || map.ok === false) { console.error('course-map: ' + ((map && map.error) || 'map failed')); process.exit(1); }

const byNum = {};
(map.units || []).forEach(u => { byNum[u.unit] = u; });

/* حالة كل وحدة: مربع لكل درس مخطط (5 إن لم تُكتب قائمة دروسها بعد).
   b مبني، x التالي (دروس الوحدة الحالية التي لم تُبنَ)، - باقٍ. والوحدة الحالية أول وحدة لم تكتمل دروسها. */
const ORDER = [0, 1, 2, 3, 4, 5, 'special', 6, 7, 8, 9, 10, 11, 12];
let current = null;
for (const n of ORDER) {
  const u = byNum[n]; if (!u) continue;
  const planned = u.plannedLessons || 5;
  if ((u.lessonsBuilt || 0) < planned) { current = n; break; }
}
function card(n) {
  const u = byNum[n];
  if (!u) return n === 'special' ? ['خاصة', 'أدوات التعريف وحروف الجر', 'a / an / the · prepositions', '-----', '-', 0] : null;
  const planned = u.plannedLessons || 5, built = Math.min(u.lessonsBuilt || 0, planned);
  const rest = n === current ? 'x' : '-';
  const lessons = 'b'.repeat(built) + rest.repeat(planned - built);
  const test = u.unitTest && u.unitTest.exists ? 'b' : (n === current ? 'x' : '-');
  const pre = u.preTest && u.preTest.exists ? (u.preTest.version || 1) : 0;
  const grammar = u.grammarEn || (n === 0 ? 'be / do · was / were · agreement' : '');
  return [String(n), u.titleAr || u.titleEn || '', grammar, lessons, test, pre];
}
const BLOCKS = [[0], [1, 2, 3], [4, 5, 'special', 6], [7, 8, 9], [10, 11, 12]];
const U = BLOCKS.map(b => b.map(card).filter(Boolean));

const t = map.totals || {};
const done = (map.units || []).filter(u => u.status === 'built').length;
console.error(`course-map: ${t.lessonsBuilt || 0} lessons built, ${done} unit(s) complete, current unit: ${current}, unit tests: ${t.unitTests || 0}, pre-tests: ${t.preTests || 0}`);

const DATA = JSON.stringify(U);
process.stdout.write(`<h2 class="sr-only">خريطة كورس الإنجليزية: ما بُني وما بقي</h2>
<style>
.m{direction:rtl;font-size:13px;line-height:1.6;color:var(--text-primary);padding:.5rem 0}.m b{font-weight:500}
.lb{font-size:12px;color:var(--text-secondary);margin:1.1rem 0 6px}
.row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}
.c{box-sizing:border-box;flex:1 1 104px;min-width:104px;border:.5px solid var(--border);border-radius:12px;padding:7px 9px;background:var(--surface-2)}.c.s{flex-basis:70px;min-width:70px}
.c small{display:block;font-size:11px;color:var(--text-secondary)}
.k{display:inline-block;width:12px;height:12px;border-radius:3px;border:1px solid var(--border-strong);box-sizing:border-box;vertical-align:middle}
.b{background:var(--fill-accent);border-color:var(--fill-accent)}.x{border:1.5px solid var(--fill-accent)}.o{border-radius:50%}
.th{flex:0 0 auto;display:flex;align-items:center;border:.5px dashed var(--border-strong);border-radius:12px;padding:0 8px;font-size:11px;color:var(--text-secondary)}
.chip{display:inline-block;margin-top:5px;font-size:11px;padding:0 6px;border-radius:6px;background:var(--bg-warning);color:var(--text-warning)}
</style>
<div class="m">
<div class="row">
<div class="c s" style="border:2px solid var(--border-accent)"><b>A2</b><small style="color:var(--text-accent)">أنت هنا · 4–5 أشهر</small></div>
<div class="c s"><b>B1</b><small>8–9 أشهر</small></div>
<div class="c s"><b>B2</b><small>7–9 أشهر</small></div>
<div class="c s"><b>C1</b><small>9–10 أشهر وايلتس</small></div>
</div>
<div class="lb">مرحلة A2</div>
<div id="g"></div>
<div style="display:flex;flex-wrap:wrap;gap:4px 14px;font-size:11px;color:var(--text-secondary)"><span><span class="k b"></span> مبني</span><span><span class="k x"></span> الوحدة الحالية</span><span><span class="k"></span> باقٍ</span><span><span class="k o"></span> اختبار الوحدة</span></div>
</div>
<script>
const U=${DATA};
const C={b:"k b",x:"k x","-":"k"},sq=(c,e="")=>'<span class="'+C[c]+e+'"></span>';
document.getElementById("g").innerHTML=U.map((B,i)=>'<div class="row">'+B.map(([n,t,g,l,q,p])=>'<div class="c"><b>'+n+'</b> · '+t+'<small dir="ltr" style="text-align:right">'+g+'</small><div style="display:flex;gap:3px;margin-top:5px">'+[...l].map(c=>sq(c)).join("")+'<span style="width:3px"></span>'+sq(q," o")+'</div>'+(p?'<span class="chip">اختبار قبلي مبني · الإصدار '+p+'</span>':'')+'</div>').join("")+(i?'<div class="th">تثبيت</div>':'')+'</div>').join("");
</script>
`);
