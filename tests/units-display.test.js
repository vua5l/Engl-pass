/*
  اختبار عرض الوحدة الحالية في متصفح حقيقي (Chrome عبر Playwright): الرئيسية وشاشة «الدروس» وبلاطة اختبار الوحدة
  تتبع وحدة درس اليوم لا الوحدة 1 الثابتة، فتظهر الوحدة 2 وما بعدها بمجرد إضافة دروسها إلى content.js.
  التشغيل من جذر المستودع:
    NODE_PATH=/opt/npm-tools/node_modules node tests/units-display.test.js
  (أو بعد: npm i playwright)  ويمكن تحديد مسار Chrome بالمتغير CHROME_PATH.
  يبني الاختبار نسخة مؤقتة من الموقع في مجلد مؤقت: الوحدة 2 فيها مفتوحة في content.js، وقائمتها unit2Lessons درسان
  (u2l1 وu2l2، منسوخان من lessons/u1/l1.js وl2.js بتغيير id وunit وn) وسطر اختبارها، ويُحمَّل الدرسان قبل app.js.
  ولا يلمس أي ملف في المستودع نفسه (يتحقق من بصمة كل ملف قبل الاختبار وبعده)، ويحذف النسخة المؤقتة في آخره.
*/
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path'), crypto = require('crypto');
const ROOT = path.resolve(__dirname, '..');
const CHROME = process.env.CHROME_PATH || (fs.existsSync('/opt/google/chrome/chrome') ? '/opt/google/chrome/chrome' : undefined);

const results = []; let fails = 0;
function ok(cond, msg) { results.push((cond ? 'PASS ' : 'FAIL ') + msg); if (!cond) fails++; }
const sleep = ms => new Promise(r => setTimeout(r, ms));
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/* قائمة الوحدة 2 في النسخة المؤقتة: درسان وسطر اختبار. الدرس الثاني بلا shortAr عمدًا،
   فلا يُعرض له عنوان قصير من عناوين الوحدة 1 (LESSON_SHORT في app.js) بل عنوانه العربي ar. */
const U2 = [
  { id: 'u2l1', n: 1, en: 'Journey Lesson One', subEn: 'Past Simple: Regular Verbs', ar: 'الماضي البسيط: الأفعال المنتظمة', shortAr: 'الأفعال المنتظمة', icon: 'globe', open: true },
  { id: 'u2l2', n: 2, en: 'Journey Lesson Two', subEn: 'Past Simple: Irregular Verbs', ar: 'الماضي البسيط: الأفعال الشاذة', icon: 'clock', open: true },
  { id: 'u2l3', n: 3, en: 'Journey Review & Test', subEn: 'Unit 2 Review & Mastery Test', ar: 'مراجعة الوحدة واختبارها', icon: 'trophy', test: true }
];

/* بصمة كل ملف في المستودع (عدا .git وnode_modules)، للتأكد أن الاختبار لم يغيّر فيه شيئًا. */
function fingerprint(dir) {
  const out = {};
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name === '.git' || e.name === 'node_modules') continue;
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.isFile()) out[path.relative(dir, f)] = crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex');
    }
  })(dir);
  return out;
}

/* نسخة درس من الوحدة 1 إلى الوحدة 2: يتغير رأس الدرس (LESSONS.u1lN = { id, unit, n) وحده. */
function copyLesson(site, n, unit) {
  const from = 'u1l' + n, to = 'u' + unit + 'l' + n;
  let src = fs.readFileSync(path.join(site, 'lessons', 'u1', 'l' + n + '.js'), 'utf8');
  const head = new RegExp('LESSONS\\.' + from + '(\\s*=\\s*\\{\\s*id\\s*:\\s*)(["\'])' + from + '\\2(\\s*,\\s*unit\\s*:\\s*)\\d+(\\s*,\\s*n\\s*:\\s*)\\d+');
  if (!head.test(src)) throw new Error('lessons/u1/l' + n + '.js: lesson header "LESSONS.' + from + ' = { id, unit, n" not found');
  src = src.replace(head, (m, a, q, b, c) => 'LESSONS.' + to + a + q + to + q + b + unit + c + n);
  src = src.split('LESSONS.' + from).join('LESSONS.' + to);
  fs.mkdirSync(path.join(site, 'lessons', 'u' + unit), { recursive: true });
  fs.writeFileSync(path.join(site, 'lessons', 'u' + unit, 'l' + n + '.js'), src);
}

/* النسخة المؤقتة: الموقع كله، ثم الوحدة 2 مفتوحة في content.js بقائمتها، ودرساها في index.html قبل سطر app.js مباشرة
   (أيًّا كانت علامات السطر ورقم إصداره). */
function buildSite(site) {
  fs.cpSync(ROOT, site, { recursive: true, filter: src => src === ROOT || !['.git', 'node_modules'].includes(path.basename(src)) });
  fs.appendFileSync(path.join(site, 'content.js'),
    '\n/* units-display.test.js (النسخة المؤقتة وحدها): الوحدة 2 مفتوحة، وقائمتها درسان وسطر اختبارها. */\n' +
    'DATA.units.forEach(function(u){ if (u.n === 2) u.open = true; });\n' +
    'DATA.unit2Lessons = ' + JSON.stringify(U2, null, 2) + ';\n');
  copyLesson(site, 1, 2); copyLesson(site, 2, 2);
  const f = path.join(site, 'index.html');
  const html = fs.readFileSync(f, 'utf8');
  // app.js أو app.js?v=… أو app.<بصمة>.js، بعلامات تنصيص أو بدونها
  const m = /<script\b[^>]*?\bsrc\s*=\s*(["']?)[^"'\s>]*?\bapp(?:[.-][0-9a-f]{6,})?\.js(?:[?#][^"'\s>]*)?\1[^>]*>\s*<\/script>/i.exec(html);
  if (!m) throw new Error('index.html: the <script> tag of app.js was not found');
  fs.writeFileSync(f, html.slice(0, m.index) + '<script src="lessons/u2/l1.js"></script>\n<script src="lessons/u2/l2.js"></script>\n' + html.slice(m.index));
}

function serve(root) {
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json' };
  return new Promise(res => {
    const srv = http.createServer((req, resp) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = path.join(root, p);
      if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { resp.writeHead(404, { 'Content-Type': 'text/html' }); return resp.end('<!doctype html><title>404</title>'); }
      resp.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(resp);
    });
    srv.listen(0, '127.0.0.1', () => res(srv));
  });
}

(async () => {
  const FP0 = fingerprint(ROOT);
  const SITE = fs.mkdtempSync(path.join(os.tmpdir(), 'ep-units-display-'));
  let browser = null, srv = null;
  try {
    buildSite(SITE);
    srv = await serve(SITE);
    const URL0 = 'http://127.0.0.1:' + srv.address().port + '/index.html';
    browser = await chromium.launch({ executablePath: CHROME, headless: true });

    async function newPage() {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
      await ctx.route('**/*', r => { const u = r.request().url(); return (u.startsWith('http://127.0.0.1') || u.startsWith('data:')) ? r.continue() : r.abort(); });
      const page = await ctx.newPage(); page.errors = [];
      page.on('pageerror', e => page.errors.push(e.message));
      page.on('dialog', d => d.accept());
      return { ctx, page };
    }
    const getJSON = async (page, k) => { const v = await page.evaluate(k => localStorage.getItem(k), k); return v ? JSON.parse(v) : null; };
    // حالة محفوظة ثم إعادة تحميل: درس اليوم cur، ودروس الوحدة 1 كلها مكتملة اليوم إن طُلب doneUnit1
    async function openWith(seed) {
      const { ctx, page } = await newPage();
      await page.goto(URL0); await sleep(300);
      await page.evaluate(s => {
        localStorage.clear();
        const t = Date.now();
        localStorage.setItem('ep4.course', JSON.stringify({ v: 4, startedAt: t, cur: s.cur, ui: { view: 'home', welcomed: true } }));
        if (s.doneUnit1) DATA.unit1Lessons.filter(l => !l.test).forEach(l => localStorage.setItem('ep4.lesson.' + l.id, JSON.stringify({ v: 4, stamps: { recall: t, vocab: t, grammar: t, reading: t, writing: t, quiz: t } })));
      }, seed);
      await page.reload(); await sleep(400);
      return { ctx, page };
    }
    // الرئيسية: عنوان قسم الدروس وبطاقاته، وبلاطة اختبار الوحدة
    const homeInfo = page => page.evaluate(() => {
      const cards = document.querySelector('#screen .lcards'), h2 = cards && cards.previousElementSibling && cards.previousElementSibling.querySelector('h2');
      const tile = Array.from(document.querySelectorAll('#screen .quick-grid .qtile')).find(el => /Test & Legal Corner/.test(el.textContent));
      return {
        en: h2 ? h2.querySelector('.en').textContent : null, ar: h2 ? h2.querySelector('small').textContent : null,
        cards: cards ? Array.from(cards.querySelectorAll('.lcard')).map(c => ({ title: c.querySelector('.l-title').textContent, sub: c.querySelector('.l-sub').textContent })) : [],
        tile: tile ? { tag: tile.tagName, en: tile.querySelector('.bi-en').textContent, ar: tile.querySelector('.bi-ar').textContent, lock: (tile.querySelector('.u-lock-t') || {}).textContent || '' } : null
      };
    });
    // شاشة «الدروس»: كل وحدة مفتوحة برقمها واسمها وسطور قائمتها
    const lessonsInfo = page => page.evaluate(() => Array.from(document.querySelectorAll('#screen .unit-open')).map(b => ({
      n: b.querySelector('.uo-head .u-n').textContent, en: b.querySelector('.uo-head .uo-en').textContent,
      rows: Array.from(b.querySelectorAll('.uo-list > li')).map(li => ({
        title: li.querySelector('.uo-t b').textContent,
        test: !!li.querySelector('.u-test'), open: !!li.querySelector('button.uo-row'),
        lock: (li.querySelector('.u-lock-t') || {}).textContent || ''
      }))
    })));
    const want = page => page.evaluate(() => ({
      u1: DATA.unit1Lessons.map(l => l.en), u1Lessons: DATA.unit1Lessons.filter(l => !l.test).length, u1Name: DATA.units.find(u => u.n === 1).en,
      u2: DATA.unit2Lessons.map(l => l.en), u2Name: DATA.units.find(u => u.n === 2).en
    }));
    const homeIs = (hm, u, titles) => hm.en === 'Unit ' + u + ' Lessons' && hm.ar === 'دروس الوحدة ' + u && same(hm.cards.map(c => c.title), titles.slice(0, 3));
    const tileIs = (hm, u, ar) => !!hm.tile && hm.tile.en === 'Unit ' + u + ' Test & Legal Corner' && hm.tile.ar === 'اختبار الوحدة ' + ar + ' والركن القانوني';
    const goTab = async (page, i) => { await page.locator('.nav-it').nth(i).click(); await sleep(250); };
    const backHome = async page => { await page.locator('[aria-label="Back · رجوع"]').click(); await sleep(250); };

    /* ---------------- أ) درس اليوم u2l2: الوحدة 2 في الرئيسية، وكل وحدة بقائمتها في «الدروس» ---------------- */
    {
      const { ctx, page } = await openWith({ cur: 'u2l2' });
      const pre = await page.evaluate(() => ({
        open2: DATA.units.some(u => u.n === 2 && u.open === true), list2: (DATA.unit2Lessons || []).map(l => l.id),
        l1: LESSONS.u2l1 ? [LESSONS.u2l1.id, LESSONS.u2l1.unit, LESSONS.u2l1.n] : null, l2: LESSONS.u2l2 ? [LESSONS.u2l2.id, LESSONS.u2l2.unit, LESSONS.u2l2.n] : null,
        u1: !!(LESSONS.u1l1 && LESSONS.u1l1.unit === 1 && LESSONS.u1l2 && LESSONS.u1l2.unit === 1)
      }));
      ok(pre.open2 && same(pre.list2, ['u2l1', 'u2l2', 'u2l3']) && same(pre.l1, ['u2l1', 2, 1]) && same(pre.l2, ['u2l2', 2, 2]) && pre.u1,
        'temp copy: unit 2 is open in content.js with unit2Lessons, and u2l1/u2l2 (copies of u1l1/u1l2 with id, unit and n changed) load before app.js: ' + JSON.stringify(pre));
      const g0 = await getJSON(page, 'ep4.course');
      ok(g0 && g0.cur === 'u2l2', 'u2l2 is the current lesson after reload (G.cur = ' + (g0 && g0.cur) + ')');
      const W = await want(page);

      let hm = await homeInfo(page);
      ok(homeIs(hm, 2, W.u2), 'home heading says "Unit 2 Lessons · دروس الوحدة 2" and its cards are the first three entries of unit2Lessons: ' + JSON.stringify({ en: hm.en, ar: hm.ar, cards: hm.cards.map(c => c.title) }));
      ok(hm.cards.length === 3 && hm.cards[1].sub.includes(U2[1].ar) && !hm.cards[1].sub.includes('الأسئلة والإجابات القصيرة'),
        'a unit-2 card without shortAr shows its own Arabic title, not a unit-1 short title: ' + JSON.stringify(hm.cards[1] && hm.cards[1].sub));
      ok(tileIs(hm, 2, '٢') && hm.tile.tag === 'DIV' && hm.tile.lock.includes('Opens after Unit 2') && !/Unit 1/.test(hm.tile.en + hm.tile.lock),
        'the unit-test tile is for unit 2 ("Unit 2 Test & Legal Corner · اختبار الوحدة ٢", locked: "Opens after Unit 2"): ' + JSON.stringify(hm.tile));

      await goTab(page, 1);
      let L = await lessonsInfo(page);
      const i1 = L.findIndex(b => b.n === '1'), i2 = L.findIndex(b => b.n === '2');
      const b1 = L[i1] || { rows: [] }, b2 = L[i2] || { rows: [] };
      ok(i1 >= 0 && i2 > i1 && L.filter(b => b.n === '1').length === 1 && L.filter(b => b.n === '2').length === 1 && b1.en === W.u1Name && b2.en === W.u2Name,
        'the lessons tab shows unit 1 then unit 2 as open units, once each, each under its own header: ' + JSON.stringify(L.map(b => b.n + ' ' + b.en)));
      ok(same(b1.rows.map(r => r.title), W.u1) && b1.rows.filter(r => !r.test && r.open).length === W.u1Lessons && W.u1Lessons === 5
        && b1.rows.filter(r => r.test).length === 1 && b1.rows.find(r => r.test).lock.includes('Opens after Unit 1'),
        "unit 1's header lists unit 1's own " + W.u1Lessons + ' lessons and its test row ("Opens after Unit 1"): ' + JSON.stringify(b1.rows.map(r => r.title)));
      ok(same(b2.rows.map(r => r.title), W.u2) && b2.rows.filter(r => !r.test && r.open).length === 2
        && b2.rows.filter(r => r.test).length === 1 && b2.rows.find(r => r.test).lock.includes('Opens after Unit 2'),
        "unit 2's header lists unit 2's own two lessons and its test row (\"Opens after Unit 2\"), not unit 1's list: " + JSON.stringify(b2.rows.map(r => r.title)));

      // فتح درس من قائمة الوحدة 2 يجعله درس اليوم، والرئيسية تبقى على الوحدة 2
      await page.locator('.unit-open').nth(1).locator('button.uo-row').first().click(); await sleep(250);
      const g1 = await getJSON(page, 'ep4.course'), inLesson = (await page.locator('#screen .ld').count()) === 1;
      await backHome(page);
      hm = await homeInfo(page);
      ok(inLesson && g1.cur === 'u2l1' && homeIs(hm, 2, W.u2) && tileIs(hm, 2, '٢'), "opening unit 2's first lesson row opens u2l1 (G.cur = " + g1.cur + '), and home stays on unit 2');

      // درس اليوم يعود إلى الوحدة 1: الرئيسية تعرض الوحدة 1 من جديد، وتبقى عليها بعد إعادة التحميل
      await goTab(page, 1);
      await page.locator('.unit-open').nth(0).locator('button.uo-row').nth(2).click(); await sleep(250);
      const g2 = await getJSON(page, 'ep4.course');
      await backHome(page);
      hm = await homeInfo(page);
      ok(g2.cur === 'u1l3' && homeIs(hm, 1, W.u1) && tileIs(hm, 1, '١') && hm.tile.lock.includes('Opens after Unit 1'),
        'with the current lesson back in unit 1 (u1l3), home shows "Unit 1 Lessons", unit 1\'s first three cards and the Unit 1 test tile: ' + JSON.stringify({ cur: g2.cur, en: hm.en, cards: hm.cards.map(c => c.title), tile: hm.tile && hm.tile.en }));
      await page.reload(); await sleep(400);
      hm = await homeInfo(page);
      ok(homeIs(hm, 1, W.u1) && tileIs(hm, 1, '١'), 'after a reload the home still shows unit 1 (the saved current lesson is u1l3)');
      await goTab(page, 1);
      L = await lessonsInfo(page);
      const c1 = L.find(b => b.n === '1'), c2 = L.find(b => b.n === '2');
      ok(!!c1 && !!c2 && same(c1.rows.map(r => r.title), W.u1) && same(c2.rows.map(r => r.title), W.u2), 'the lessons tab is the same whichever unit is current');
      ok(page.errors.length === 0, 'no page errors (unit 2 current): ' + page.errors.join(' | '));
      await ctx.close();
    }

    /* ---------------- ب) درس من الأسبوع التأسيسي: أول وحدة مفتوحة لم تكتمل دروسها ---------------- */
    {
      const { ctx, page } = await openWith({ cur: 'u0l1' });
      const W = await want(page), hm = await homeInfo(page);
      ok(homeIs(hm, 1, W.u1) && tileIs(hm, 1, '١'), 'with a Foundation lesson current and unit 1 not finished, home shows unit 1 (lessons and test tile)');
      ok(page.errors.length === 0, 'no page errors (Foundation lesson, unit 1 open): ' + page.errors.join(' | '));
      await ctx.close();
    }
    {
      const { ctx, page } = await openWith({ cur: 'u0l1', doneUnit1: true });
      const W = await want(page), g = await getJSON(page, 'ep4.course'), hm = await homeInfo(page);
      ok(g.cur === 'u0l1' && homeIs(hm, 2, W.u2) && tileIs(hm, 2, '٢') && hm.tile.lock.includes('Opens after Unit 2'),
        'with a Foundation lesson current and unit 1 finished, home shows the next open unit that is not finished (unit 2): ' + JSON.stringify({ cur: g.cur, en: hm.en, tile: hm.tile && hm.tile.en }));
      await goTab(page, 1);
      const L = await lessonsInfo(page), t1 = (L.find(b => b.n === '1') || { rows: [] }).rows.find(r => r.test), t2 = (L.find(b => b.n === '2') || { rows: [] }).rows.find(r => r.test);
      ok(!!t1 && t1.open && !t1.lock && !!t2 && !t2.open && t2.lock.includes('Opens after Unit 2'),
        "each unit's test row follows its own unit: unit 1's opens (its lessons are done), unit 2's stays locked: " + JSON.stringify({ t1, t2 }));
      ok(page.errors.length === 0, 'no page errors (Foundation lesson, unit 1 finished): ' + page.errors.join(' | '));
      await ctx.close();
    }
  } catch (e) {
    ok(false, 'the test ran to the end: ' + ((e && e.stack) || e));
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (srv) srv.close();
    fs.rmSync(SITE, { recursive: true, force: true });
  }
  ok(!fs.existsSync(SITE), 'the temporary copy of the site is removed');
  ok(same(fingerprint(ROOT), FP0), 'no file in the real repository was changed, added or removed');
  console.log(results.join('\n'));
  console.log('\n' + (results.length - fails) + '/' + results.length + ' passed');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
