/*
  screen-check.test.js: يفتح كل شاشة في كل درس وكل اختبار بعرض الجوال في Chrome، ويقيس ما يراه المتعلم فعلًا،
  لأن الفاحص الآخر يقرأ الملفات ولا يرى الشاشة. أُضيف في 5 نوفمبر 2026 بعد أن اكتشف المتعلم هذه العيوب بنفسه.

    NODE_PATH=/opt/npm-tools/node_modules node tests/screen-check.test.js [--only u0l1,u2l3] [--width 375]

  الأخطاء التي يمنعها (كل واحد منها ERROR):
    wide      الصفحة أعرض من الشاشة، فيضطر المتعلم إلى السحب جانبًا
    table     جدول أعرض من بطاقته
    text      عنصر خارج الشاشة
    svg       نص في رسم خارج مربعه أو خارج الرسم، أو نصان متداخلان
    dir       فقرة عربية مرتبة من اليسار، فتظهر جملها معكوسة
    pair      جملة مقسومة أعمدة في .yes أو .no أو أي حاوية مرنة في الشرح
  ويخرج برمز 1 إن وُجد خطأ. الرسم والخط يُحمَّلان كما في الموقع، فالخطوط تأتي من Google إن توفر الاتصال.
*/
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const { generateIndexHtml, collectLessons } = require('../tools/register-lessons.js');
const ROOT = path.resolve(__dirname, '..');
const CHROME = process.env.CHROME_PATH || (fs.existsSync('/opt/google/chrome/chrome') ? '/opt/google/chrome/chrome' : undefined);

const argv = process.argv.slice(2); let only = null, width = 375;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--only') only = new Set((argv[++i] || '').split(',').filter(Boolean));
  else if (argv[i] === '--width') width = Number(argv[++i]) || 375;
  else { console.error('usage: node tests/screen-check.test.js [--only u0l1,u2l3] [--width 375]'); process.exit(2); }
}

const INDEX_HTML = generateIndexHtml(ROOT);
const { DATA, lessons } = collectLessons(ROOT);
const IDS = lessons.filter(l => l.open && (!only || only.has(l.id))).map(l => l.id);
const SESSIONS = only ? [] : Object.keys(DATA.unitTests || {}).map(u => 'unitTest:' + u)
  .concat(Object.keys(DATA.preTests || {}).map(u => 'pretest:' + u), ['errlab', 'irregular']);

function serve() {
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };
  return new Promise(res => {
    const srv = http.createServer((req, resp) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      if (p === '/index.html') { resp.writeHead(200, { 'Content-Type': types['.html'] }); return resp.end(INDEX_HTML); }
      const f = path.join(ROOT, p);
      if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { resp.writeHead(404); return resp.end(); }
      let body = fs.readFileSync(f);
      /* باب للاختبار وحده: يصل إلى الخطوات مباشرة. يُضاف هنا في الذاكرة، ولا يوجد في ملف الموقع. */
      if (p === '/app.js') {
        const t = body.toString('utf8'), i = t.lastIndexOf('boot();');
        body = t.slice(0, i) + "window.__ep={openPart:openPart,goStep:goStep,selectLesson:selectLesson,go:go,steps:function(){return P?P.steps:null},i:function(){return P?P.i:null},G:function(){return G},session:function(k){P={part:k,steps:stepsFor(k),i:0,session:true};G.ui.part=k;G.ui.view='player';render()}};\n" + t.slice(i);
      }
      resp.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
      resp.end(body);
    });
    srv.listen(0, '127.0.0.1', () => res(srv));
  });
}

/* يعمل داخل الصفحة: كل ما يجده من عيوب على الشاشة الحالية. */
function measure() {
  const out = [], vw = document.documentElement.clientWidth, seen = new Set();
  const say = (kind, text) => { const k = kind + '|' + text; if (!seen.has(k)) { seen.add(k); out.push({ kind, text }); } };
  const clip = s => String(s || '').replace(/\s+/g, ' ').trim().slice(0, 90);
  const visible = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const se = document.scrollingElement;
  if (se.scrollWidth > vw + 1) say('wide', `the page is ${se.scrollWidth}px wide on a ${vw}px screen`);
  document.querySelectorAll('#screen .tbl').forEach(t => { if (visible(t) && t.scrollWidth > t.clientWidth + 1) say('table', `table ${t.scrollWidth}px in a ${t.clientWidth}px card: ${clip(t.textContent)}`); });
  document.querySelectorAll('#screen *').forEach(el => {
    if (el.closest('svg') || el.closest('.tbl') || !visible(el)) return;
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) say('text', `<${el.tagName.toLowerCase()}> reaches ${Math.round(r.right)}px: ${clip(el.textContent)}`);
  });
  /* فقرة عربية من اليسار: تُقرأ معكوسة. يُطبَّق المعيار نفسه الذي يستعمله المحرك. */
  const AR = /[؀-ۿ]/g, LAT = /[A-Za-z]/g, STARTS = /^[^A-Za-z؀-ۿ]*[؀-ۿ]/;
  const INNER = new Set(['P', 'UL', 'OL', 'LI', 'DIV', 'TABLE', 'SMALL', 'H1', 'H2', 'H3', 'H4']);
  document.querySelectorAll('#screen p, #screen li, #screen small, #screen td, #screen th, #screen h1, #screen h2, #screen h3, #screen label').forEach(el => {
    if (el.closest('svg') || !visible(el)) return;
    let t = ''; el.childNodes.forEach(n => { if (n.nodeType === 3) t += n.nodeValue; else if (n.nodeType === 1 && !INNER.has(n.tagName)) t += n.textContent; });
    t = t.trim(); const ar = (t.match(AR) || []).length, lat = (t.match(LAT) || []).length;
    if (!ar || !(STARTS.test(t) || ar >= lat * 2)) return;
    if (el.getAttribute('dir') === 'ltr' && !STARTS.test(t)) return;   // سطر إنجليزي معلن، فيه ترجمة قصيرة
    if (getComputedStyle(el).direction !== 'rtl') say('dir', clip(t));
  });
  document.querySelectorAll('#screen .yes, #screen .no').forEach(el => { if (visible(el) && el.childNodes.length > 1) say('pair', clip(el.textContent)); });
  /* حاوية مرنة فيها نص حر مع عناصر مضمَّنة: كل قطعة تصير عمودًا مستقلًا، كما حدث في الدرس الرابع. */
  document.querySelectorAll('#screen .xp *').forEach(el => {
    if (el.closest('svg') || !visible(el) || !/flex|grid/.test(getComputedStyle(el).display)) return;
    const free = [...el.childNodes].some(n => n.nodeType === 3 && n.nodeValue.trim());
    const inline = [...el.children].some(c => /^(B|I|EM|STRONG|BDI|A|CODE|U)$/.test(c.tagName) || (c.tagName === 'SPAN' && getComputedStyle(c).display === 'inline'));
    if (free && inline) say('pair', `split into columns: ${clip(el.textContent)}`);
  });
  document.querySelectorAll('#screen svg').forEach(svg => {
    const vb = svg.viewBox && svg.viewBox.baseVal; if (!vb || !vb.width || !visible(svg)) return;
    const boxes = [...svg.querySelectorAll('rect')].map(r => r.getBBox()).filter(b => b.width > 30 && b.height > 14 && b.width < vb.width * 0.98);
    const texts = [...svg.querySelectorAll('text')].map(t => ({ b: t.getBBox(), s: t.textContent })).filter(x => x.b.width);
    texts.forEach(({ b, s }) => {
      if (b.x < vb.x - 0.5 || b.x + b.width > vb.x + vb.width + 0.5) say('svg', `text leaves the drawing: ${s}`);
      const cx = b.x + b.width / 2, cy = b.y + b.height / 2;
      const host = boxes.filter(r => cx >= r.x && cx <= r.x + r.width && cy >= r.y && cy <= r.y + r.height).sort((p, q) => p.width * p.height - q.width * q.height)[0];
      if (host && (b.x < host.x + 1 || b.x + b.width > host.x + host.width - 1)) say('svg', `text leaves its box: ${s}`);
    });
    texts.forEach((a, i) => texts.slice(i + 1).forEach(c => {
      const ox = Math.min(a.b.x + a.b.width, c.b.x + c.b.width) - Math.max(a.b.x, c.b.x), oy = Math.min(a.b.y + a.b.height, c.b.y + c.b.height) - Math.max(a.b.y, c.b.y);
      if (ox > 2 && oy > 3) say('svg', `texts overlap: ${a.s} / ${c.s}`);
    }));
  });
  return out;
}
const open = () => {
  document.querySelectorAll('#screen .ar-btn').forEach(b => { if (b.getAttribute('aria-expanded') === 'false') b.click(); });
  const o = document.querySelector('#screen .opt:not([disabled])'); if (o) o.click();
  document.querySelectorAll('#screen .ar-btn').forEach(b => { if (b.getAttribute('aria-expanded') === 'false') b.click(); });
  document.querySelectorAll('#screen details').forEach(d => { d.open = true; });
};

(async () => {
  const srv = await serve(), port = srv.address().port;
  const browser = await chromium.launch(CHROME ? { executablePath: CHROME } : {});
  const ctx = await browser.newContext({ viewport: { width, height: 800 }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  await page.route(/commons\.wikimedia/, r => r.abort());
  const crashes = []; page.on('pageerror', e => crashes.push(String(e)));
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForFunction(() => window.__ep);
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => { __ep.G().ui.welcomed = true; __ep.go('home'); });
  const found = new Map(); let screens = 0;
  async function walk(label) {
    const n = await page.evaluate(() => (__ep.steps() || []).length);
    for (let i = 0; i < n; i++) {
      const name = await page.evaluate(i => { __ep.goStep(i); const s = __ep.steps()[__ep.i()]; return s ? s.t + (s.id ? ':' + s.id : '') + (s.i != null ? ':' + s.i : '') + (s.qIdx != null ? ':' + s.qIdx : '') : ''; }, i);
      await page.evaluate(open);
      screens++;
      for (const r of await page.evaluate(measure)) {
        const key = r.kind + ' | ' + label + ' ' + name + ' | ' + r.text;
        if (!found.has(key)) found.set(key, r);
      }
    }
  }
  for (const id of IDS) {
    await page.evaluate(id => __ep.selectLesson(id), id);
    for (const part of ['recall', 'vocab', 'grammar', 'reading', 'writing', 'quiz']) {
      await page.evaluate(p => __ep.openPart(p), part);
      await walk(id + ' ' + part);
    }
  }
  for (const k of SESSIONS) { await page.evaluate(k => __ep.session(k), k); await walk(k); }
  for (const v of (only ? [] : ['home', 'lessons', 'review'])) {
    await page.evaluate(v => __ep.go(v), v); screens++;
    for (const r of await page.evaluate(measure)) found.set(r.kind + ' | view ' + v + ' | ' + r.text, r);
  }
  await browser.close(); srv.close();
  for (const key of found.keys()) console.log('ERROR ' + key);
  crashes.slice(0, 5).forEach(c => console.log('ERROR crash | ' + c));
  console.log(`\nSUMMARY: ${found.size + crashes.length} ERROR on ${screens} screens at ${width}px (${IDS.length} lessons, ${SESSIONS.length} tests and practice sessions)`);
  process.exitCode = found.size + crashes.length ? 1 : 0;
})().catch(e => { console.error(e); process.exit(2); });
