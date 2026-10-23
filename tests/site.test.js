/*
  اختبار شامل لموقع English Passport في متصفح حقيقي (Chrome عبر Playwright).
  التشغيل من جذر المستودع:
    NODE_PATH=/opt/npm-tools/node_modules node tests/site.test.js
  (أو بعد: npm i playwright)  ويمكن تحديد مسار Chrome بالمتغير CHROME_PATH.
  يشغّل الاختبار خادمًا محليًا للملفات، ويحاكي GitHub في الذاكرة، فلا يلمس أي مستودع حقيقي.
*/
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const CHROME = process.env.CHROME_PATH || (fs.existsSync('/opt/google/chrome/chrome') ? '/opt/google/chrome/chrome' : undefined);

const results = []; let fails = 0;
function ok(cond, msg) { results.push((cond ? 'PASS ' : 'FAIL ') + msg); if (!cond) fails++; }
const sleep = ms => new Promise(r => setTimeout(r, ms));

function serve() {
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json' };
  return new Promise(res => {
    const srv = http.createServer((req, resp) => {
      let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
      const f = path.join(ROOT, p);
      if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { resp.writeHead(404, { 'Content-Type': 'text/html' }); return resp.end('<!doctype html><title>404</title>'); }
      resp.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(resp);
    });
    srv.listen(0, '127.0.0.1', () => res(srv));
  });
}

/* محاكاة GitHub API بالقدر الذي تستعمله المزامنة. */
function fakeGitHub(token) {
  const st = { branch: false, files: {}, log: [], conflictOnce: false, n: 0 };
  const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Authorization, Accept, Content-Type', 'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS', 'Access-Control-Expose-Headers': 'X-RateLimit-Remaining' };
  const reply = (route, status, body) => route.fulfill({ status, headers: Object.assign({ 'Content-Type': 'application/json', 'X-RateLimit-Remaining': '4999' }, cors), body: JSON.stringify(body || {}) });
  async function handler(route) {
    const req = route.request(), u = new URL(req.url()), m = req.method();
    if (m === 'OPTIONS') return route.fulfill({ status: 204, headers: cors, body: '' });
    st.log.push(m + ' ' + u.pathname);
    if ((req.headers()['authorization'] || '') !== 'Bearer ' + token) return reply(route, 401, { message: 'Bad credentials' });
    const base = '/repos/vua5l/engl-pass';
    if (!u.pathname.startsWith(base)) return reply(route, 404, {});
    const p = u.pathname.slice(base.length);
    if (m === 'GET' && p === '') return reply(route, 200, { default_branch: 'main' });
    if (m === 'GET' && p === '/git/ref/heads/main') return reply(route, 200, { object: { sha: 'mainsha' } });
    if (m === 'GET' && p === '/git/ref/heads/progress') return st.branch ? reply(route, 200, { object: { sha: 'progsha' } }) : reply(route, 404, {});
    if (m === 'POST' && p === '/git/refs') { st.branch = true; return reply(route, 201, {}); }
    if (p === '/contents/progress' && m === 'GET') {
      const list = Object.keys(st.files).map(k => ({ type: 'file', path: k, name: k.split('/').pop(), sha: st.files[k].sha }));
      return list.length ? reply(route, 200, list) : reply(route, 404, {});
    }
    if (p.startsWith('/contents/progress/')) {
      const fp = decodeURIComponent(p.slice('/contents/'.length));
      if (m === 'GET') return st.files[fp] ? reply(route, 200, { sha: st.files[fp].sha, content: st.files[fp].content }) : reply(route, 404, {});
      if (m === 'PUT') {
        const body = JSON.parse(req.postData() || '{}');
        if (st.conflictOnce) { st.conflictOnce = false; return reply(route, 409, { message: 'conflict' }); }
        const cur = st.files[fp];
        if (cur && body.sha !== cur.sha) return reply(route, 409, { message: 'sha mismatch' });
        if (!cur && body.sha) return reply(route, 422, { message: 'sha given for new file' });
        const sha = 's' + (++st.n);
        st.files[fp] = { sha, content: body.content, branch: body.branch };
        return reply(route, cur ? 200 : 201, { content: { sha } });
      }
    }
    return reply(route, 404, {});
  }
  st.handler = handler;
  st.json = fp => st.files[fp] ? JSON.parse(Buffer.from(st.files[fp].content, 'base64').toString('utf8')) : null;
  return st;
}

(async () => {
  const srv = await serve();
  const URL0 = 'http://127.0.0.1:' + srv.address().port + '/index.html';
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });

  async function newPage(gh) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await ctx.route('**/*', r => {
      const u = r.request().url();
      if (u.startsWith('http://127.0.0.1') || u.startsWith('data:')) return r.continue();
      if (gh && u.startsWith('https://api.github.com/')) return gh.handler(r);
      return r.abort();
    });
    const page = await ctx.newPage(); page.errors = [];
    page.on('pageerror', e => page.errors.push(e.message));
    page.on('dialog', d => d.accept());
    return { ctx, page };
  }
  const store = page => page.evaluate(() => { const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); o[k] = localStorage.getItem(k); } return o; });
  const getJSON = async (page, k) => { const v = await page.evaluate(k => localStorage.getItem(k), k); return v ? JSON.parse(v) : null; };
  const text = page => page.innerText('#screen');
  const cta = async page => { const b = page.locator('.pl-foot .btn:visible').last(); await b.click(); await sleep(120); };
  async function startApp(page) { await page.goto(URL0); await sleep(400); if (await page.locator('.wel-cta .btn').count()) { await page.click('.wel-cta .btn'); await sleep(250); } }
  async function openFoundation(page, i) { await page.locator('.u0-row').nth(i).click(); await sleep(250); }
  async function backHome(page) { const b = page.locator('[aria-label="Back · رجوع"]'); if (await b.count()) { await b.click(); await sleep(200); } }
  async function doRecallStage(page, answerFn) {
    await page.locator('.ld .btn').filter({ hasText: /Start Lesson|Continue/ }).first().click(); await sleep(250);
    await cta(page); // المقدمة
    for (let i = 0; i < 12; i++) {
      const inp = page.locator('.gap-in:enabled');
      if (await inp.count()) { await inp.fill(answerFn(i)); await inp.press('Enter'); await sleep(150); await cta(page); }
      else break;
    }
  }

  /* ---------------- أ) جهاز جديد بلا مزامنة ---------------- */
  {
    const { ctx, page } = await newPage(null);
    await page.goto(URL0); await sleep(400);
    ok(await page.locator('.wel').count() === 1, 'first visit shows the welcome screen');
    await page.click('.wel-cta .btn'); await sleep(250);
    ok(!(await page.locator('#gh-fab').count()) && !(await page.locator('body').innerText()).includes('مزامنة GitHub'), 'no floating sync button anywhere');
    await page.click('[aria-label="Open Lesson · افتح درس اليوم"]'); await sleep(250);
    ok((await text(page)).includes('First Day at the Law Office'), "today's lesson on a fresh start is Foundation lesson 1 (u0l1)");
    const g0 = await getJSON(page, 'ep4.course');
    ok(g0 && g0.ui.welcomed === true && g0.startedAt > 0 && g0.cur === 'u0l1', 'course state saved with welcome flag, start date and current lesson');

    const seed = (g0.errorLab.spelling || {}).count || 0, seedBe = (g0.errorLab.be_verb || {}).count || 0, seedTense = (g0.errorLab.tense || {}).count || 0;
    await doRecallStage(page, () => 'zzzz');
    const l1 = await getJSON(page, 'ep4.lesson.u0l1');
    ok(l1 && l1.stamps && l1.stamps.recall, 'recall stage stamped in the lesson state');
    const g1 = await getJSON(page, 'ep4.course');
    const mk = Object.keys(g1.mistakes);
    ok(mk.length === 5 && mk.every(k => k.startsWith('u0l1|rc-')), 'five wrong recall answers enter the course-wide notebook as u0l1|rc-*');
    ok(mk.every(k => g1.mistakes[k].due - Date.now() > 20 * 3600e3), 'new mistakes are due the next day (spaced schedule step 1)');
    ok((g1.errorLab.spelling || {}).count === seed + 4 && (g1.errorLab.be_verb || {}).count === seedBe + 1, 'Error Lab counts grow by category (4 spelling + 1 be_verb in lesson 1 recall)');

    await page.click('[aria-label="Close · إغلاق"]'); await sleep(200); await backHome(page);
    await openFoundation(page, 2);
    ok((await text(page)).includes('Where Were You Yesterday?'), 'switching to Foundation lesson 3 works');
    const g2 = await getJSON(page, 'ep4.course');
    ok(Object.keys(g2.mistakes).length === 5 && g2.cur === 'u0l3', 'mistakes stay after switching lessons, current lesson updated');
    await backHome(page);
    await page.locator('.nav-it').nth(3).click(); await sleep(250);
    let t = await text(page);
    ok(t.includes('Mistake Notebook · All Lessons') && t.includes('F1 ·') && t.includes('Nothing due today'), 'review tab lists lesson-1 mistakes while lesson 3 is current, nothing due today');

    // نقدّم الزمن: نجعل الأخطاء مستحقة ثم نراجع
    await page.evaluate(() => { const g = JSON.parse(localStorage.getItem('ep4.course')); Object.keys(g.mistakes).forEach(k => { g.mistakes[k].due = Date.now() - 1000; }); localStorage.setItem('ep4.course', JSON.stringify(g)); });
    await page.reload(); await sleep(400);
    await page.locator('.nav-it').nth(3).click(); await sleep(250);
    t = await text(page);
    ok(/5\s*\n?\s*Due today/.test(t), 'after the due date passes, 5 items are due today');
    const ans0 = await page.evaluate(() => LESSONS.u0l1.recall[0].ans[0]);
    await page.locator('#nbHero .btn').click(); await sleep(250);
    t = await text(page);
    ok(t.includes('Review · مراجعة · F1'), 'review session renders a lesson-1 question while lesson 3 is current');
    await page.locator('.gap-in:enabled').fill(ans0); await page.locator('.gap-in').press('Enter'); await sleep(150);
    const g3 = await getJSON(page, 'ep4.course');
    const m0 = g3.mistakes['u0l1|rc-0'];
    ok(m0 && m0.box === 1 && m0.due - Date.now() > 2.5 * 864e5, 'a correct review moves the item to step 2 (back in 3 days)');
    await page.click('[aria-label="Close · إغلاق"]'); await sleep(200);

    // اللوحة
    await page.locator('.nav-it').nth(0).click(); await sleep(200);
    await page.locator('.qtile').first().click(); await sleep(250);
    const dash = await page.innerText('#sheetBox');
    ok(dash.includes('Progress & Skills Dashboard') && dash.includes('No data yet') && dash.includes('/ 90 hrs'), 'dashboard shows real data only ("No data yet" where nothing was answered) and a 90-hour A2 target');
    ok(/Vocabulary & Spelling · المفردات والإملاء\s*\n?\s*0%/.test(dash), 'vocabulary indicator comes from real answers (0% after five wrong recalls)');
    await page.click('#sheetBox .close'); await sleep(150);

    // الاستماع لم يعد يتسرب إليه درس آخر
    const stageOf = async i => { await openFoundation(page, i); const s = await text(page); await backHome(page); return /\bListening\b/.test(s) ? 'Listening' : (/\bReading\b/.test(s) ? 'Reading' : '?'); };
    ok(await stageOf(1) === 'Listening', 'Foundation lesson 2 shows its Listening stage');
    ok(await stageOf(0) === 'Reading', 'Foundation lesson 1 shows Reading');
    ok(await stageOf(3) === 'Listening', 'Foundation lesson 4 shows its Listening stage after visiting a reading lesson');

    // الإعدادات والنسخة الاحتياطية
    await page.click('#gearBtn'); await sleep(250);
    const sheet = await page.innerText('#sheetBox');
    ok(sheet.includes('Settings & Plan') && sheet.includes('المزامنة غير مفعّلة') && (await page.locator('#syncToken').count()) === 1, 'gear opens Settings with the sync section (off) and a key field');
    await page.locator('.bkp-box .btn', { hasText: 'Copy Backup Code' }).click(); await sleep(150);
    const bk = await page.locator('.bkp-area').inputValue();
    ok(bk.includes('"ep4.course"') && bk.includes('"ep4.lesson.u0l1"') && !bk.includes('ep4.sync'), 'backup contains course and lesson states, never the sync key');
    ok(page.errors.length === 0, 'no page errors (fresh device): ' + page.errors.join(' | '));
    await ctx.close();
  }

  /* ---------------- ب) مسح التقدم التجريبي القديم مرة واحدة ---------------- */
  {
    const { ctx, page } = await newPage(null);
    await page.goto(URL0); await sleep(300);
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('english-passport.u1l1.v1', '{"v":3,"stamps":{"recall":1}}'); localStorage.setItem('gh_sync_token', 'old'); localStorage.setItem('gh_sync_repo', 'x'); localStorage.setItem('other-site', 'keep'); });
    await page.reload(); await sleep(300);
    const s = await store(page);
    ok(!s['english-passport.u1l1.v1'] && !s.gh_sync_token && !s.gh_sync_repo && s['other-site'] === 'keep', 'old trial progress and old sync key are removed once; unrelated data is kept');
    await ctx.close();
  }

  /* ---------------- د) بقية الأدوات تعمل مع الحالة المشتركة ---------------- */
  {
    const { ctx, page } = await newPage(null);
    await startApp(page);
    // الوضع المختصر
    await page.locator('.qtile.exp').click(); await sleep(200);
    for (let i = 0; i < 20; i++) {
      if ((await text(page)).includes('Express Review Logged')) break;
      const inp = page.locator('.gap-in:enabled'), opt = page.locator('.opt:enabled');
      if (await inp.count()) { await inp.first().fill('zz'); await inp.first().press('Enter'); await sleep(100); }
      else if (await opt.count()) { await opt.first().click(); await sleep(100); }
      await cta(page);
    }
    let g = await getJSON(page, 'ep4.course');
    ok(g.expressSessions === 1, 'express session is logged once in the course state');
    if (await page.locator('[aria-label="Close · إغلاق"]').count()) { await page.click('[aria-label="Close · إغلاق"]'); await sleep(150); }
    // الأفعال الشاذة
    await page.locator('.nav-it').nth(2).click(); await sleep(200);
    await page.locator('.seg-b').nth(1).click(); await sleep(200);
    await page.locator('.btn', { hasText: 'Practice Irregular Verbs' }).click(); await sleep(200);
    for (let i = 0; i < 6; i++) { const ins = page.locator('.gap-in:enabled'); if ((await ins.count()) < 2) break; await ins.nth(0).fill('was'); await ins.nth(1).fill('been'); await ins.nth(1).press('Enter'); await sleep(100); await cta(page); }
    g = await getJSON(page, 'ep4.course');
    ok(Object.keys(g.irrSr).length === 6 && g.practiceMins >= 6, 'irregular-verb practice updates the shared schedule and practice minutes');
    if (await page.locator('[aria-label="Close · إغلاق"]').count()) { await page.click('[aria-label="Close · إغلاق"]'); await sleep(150); }
    // مختبر الأخطاء
    await page.locator('.nav-it').nth(3).click(); await sleep(200);
    await page.locator('#elabHero .btn').click(); await sleep(200);
    for (let i = 0; i < 3; i++) { const opt = page.locator('.opt:enabled'); if (!(await opt.count())) break; await opt.first().click(); await sleep(100); await cta(page); }
    g = await getJSON(page, 'ep4.course');
    ok(Object.keys(g.errorLab).some(k => (g.errorLab[k].solved || 0) > 0 || (g.errorLab[k].box || 0) > 0), 'Error Lab drills update the shared Error Lab');
    if (await page.locator('[aria-label="Close · إغلاق"]').count()) { await page.click('[aria-label="Close · إغلاق"]'); await sleep(150); }
    // اختبار الوحدة
    await page.locator('.nav-it').nth(0).click(); await sleep(200);
    await page.locator('.qtile', { hasText: 'Unit 1 Test' }).click(); await sleep(200);
    await cta(page);
    for (let i = 0; i < 20; i++) { const opt = page.locator('.opt:enabled'); if (!(await opt.count())) break; await opt.first().click(); await sleep(60); await cta(page); }
    if (await page.locator('textarea.wt').count()) { await page.fill('textarea.wt', 'I work in Riyadh. I am studying law this year. We sign a contract today.'); await cta(page); }
    g = await getJSON(page, 'ep4.course');
    ok(g.unitTests && g.unitTests[1] && g.unitTests[1].attempts === 1, 'unit test result is saved in the course state');
    if (await page.locator('[aria-label="Close · إغلاق"]').count()) { await page.click('[aria-label="Close · إغلاق"]'); await sleep(150); }
    // كامبلي
    await page.locator('.nav-it').nth(0).click(); await sleep(200);
    await page.locator('.qtile', { hasText: 'Cambly Card' }).click(); await sleep(200);
    await page.locator('#sheetBox .btn', { hasText: 'Log Cambly Session' }).click(); await sleep(150);
    g = await getJSON(page, 'ep4.course');
    ok(g.camblyLogs.length === 1 && g.camblyLogs[0].mins === 30, 'Cambly session log is saved in the course state');
    await page.click('#sheetBox .close'); await sleep(150);
    // درس اليوم ينتقل إلى التالي إذا اكتمل في يوم سابق
    await page.evaluate(() => { const y = Date.now() - 864e5 * 1.2; const l = JSON.parse(localStorage.getItem('ep4.lesson.u0l1') || '{"v":4}'); l.stamps = { recall:y, vocab:y, grammar:y, reading:y, writing:y, quiz:y }; localStorage.setItem('ep4.lesson.u0l1', JSON.stringify(l)); const g = JSON.parse(localStorage.getItem('ep4.course')); g.cur = 'u0l1'; localStorage.setItem('ep4.course', JSON.stringify(g)); });
    await page.reload(); await sleep(400);
    await page.click('[aria-label="Open Lesson · افتح درس اليوم"]'); await sleep(250);
    ok((await text(page)).includes('Two Cases in Court'), "after finishing a lesson on a previous day, today's lesson moves to the next one");
    ok(page.errors.length === 0, 'no page errors (tools): ' + page.errors.join(' | '));
    await ctx.close();
  }

  /* ---------------- هـ) إكمال كل الدروس الستة بكل مراحلها دون أخطاء ---------------- */
  {
    const { ctx, page } = await newPage(null);
    await startApp(page);
    const norm = s => String(s || '').replace(/_{3}/g, '').replace(/\s+/g, '').toLowerCase();
    const LISTEN_IDS = ['u0l2', 'u0l4']; // درسا المقطعين الحقيقيين
    const seenListen = {};               // ما يظهر فيهما في مرحلتي الاستماع ١ و٣
    async function drive(lid) {
      const data = await page.evaluate(lid => { const L = LESSONS[lid]; const v = (L.vocab || []).concat(L.legalPhrase ? [L.legalPhrase] : []); return { pairs: v.map(x => [x.en, x.ar]), quiz: L.quiz.map(q => [q.s, q.opts[q.a]]) }; }, lid);
      const arOf = Object.fromEntries(data.pairs);
      for (let n = 0; n < 600; n++) {
        if (!(await page.locator('.pl').count())) return true;
        if (LISTEN_IDS.includes(lid)) {
          const scr = await page.innerText('#screen').catch(() => '');
          if (/Stage 3 of 3/.test(scr) && /Listening/.test(scr)) seenListen[lid] = Object.assign(seenListen[lid] || {}, { s3: scr, s3html: await page.innerHTML('#screen') });
        }
        if (await page.locator('.m-it.en:not(.matched)').count()) {
          const ens = await page.locator('.m-it.en:not(.matched)').allInnerTexts();
          for (const en of ens) {
            await page.locator('.m-it.en:not(.matched)', { hasText: en }).first().click();
            await page.locator('.m-it.ar:not(.matched)').filter({ hasText: arOf[en.trim()] }).first().click();
            await sleep(40);
          }
          await sleep(1300); continue;
        }
        const know = page.locator('.pl button:visible', { hasText: 'أعرفها' });
        if (await know.count()) { await know.first().click(); await sleep(60); continue; }
        const opt = page.locator('.opt:enabled');
        if (await opt.count()) {
          const q = norm(await page.locator('.q-en').first().innerText().catch(() => ''));
          const hit = data.quiz.find(x => norm(x[0]) === q);
          if (hit) await page.locator('.opt:enabled', { hasText: hit[1] }).first().click(); else await opt.first().click();
          await sleep(60);
          if (LISTEN_IDS.includes(lid)) { const scr = await page.innerText('#screen').catch(() => ''); if (/Stage 1 of 3/.test(scr)) seenListen[lid] = Object.assign(seenListen[lid] || {}, { s1: scr }); }
          await cta(page); continue;
        }
        const inp = page.locator('.gap-in:enabled');
        if (await inp.count()) { const c = await inp.count(); for (let i = 0; i < c; i++) await inp.nth(i).fill('x'); await inp.last().press('Enter'); await sleep(60); await cta(page); continue; }
        if (await page.locator('.b-pool .chip:enabled').count()) { while (await page.locator('.b-pool .chip:enabled').count()) await page.locator('.b-pool .chip:enabled').first().click(); await cta(page); continue; }
        const ta = page.locator('textarea.wt');
        if (await ta.count() && !(await ta.inputValue())) { await ta.fill('I am a law student in Riyadh. My teachers are very helpful. I prepare my notes every morning. I do not study late on Friday nights.'); await sleep(200); await cta(page); continue; }
        const b = page.locator('.pl-foot .btn:visible').last();
        if ((await b.count()) && await b.isEnabled()) { await b.click(); await sleep(80); continue; }
        return false;
      }
      return false;
    }
    const lessons = [['u0l1', 0], ['u0l2', 1], ['u0l3', 2], ['u0l4', 3], ['u0l5', 4], ['u1l1', -1]];
    for (const [lid, row] of lessons) {
      if (row >= 0) await openFoundation(page, row); else { await page.locator('.lcard').first().click(); await sleep(250); }
      await page.locator('.ld .btn').filter({ hasText: /Start Lesson|Continue/ }).first().click(); await sleep(200);
      const finished = await drive(lid);
      const st = await getJSON(page, 'ep4.lesson.' + lid);
      const stamped = st && st.stamps ? ['recall', 'vocab', 'grammar', 'reading', 'writing', 'quiz'].filter(k => st.stamps[k]).length : 0;
      ok(finished && stamped === 6, lid + ': all 6 stages can be completed (' + stamped + '/6)');
      await backHome(page);
    }
    // المقاطع الحقيقية: لا يُنسخ نصها إلى الموقع، والمرحلة الثالثة تفتحه في صفحة المصدر، وشرح سؤال الفكرة العامة يظهر بعد الإجابة
    for (const lid of LISTEN_IDS) {
      const L = await page.evaluate(lid => { const x = LESSONS[lid].listening; return { url: x.url, why: x.predict.revealEn || x.predict.whyEn || '', copied: !!(x.transcriptParas || x.paras || x.transcript) }; }, lid);
      const s = seenListen[lid] || {};
      ok(!L.copied && !!s.s3 && s.s3.includes('Open Transcript & Clip') && s.s3html.includes(L.url) && !s.s3html.includes('mail-body'), lid + ': stage 3 opens the transcript on the source page (none copied into the site)');
      ok(!!s.s1 && !!L.why && s.s1.includes(L.why.slice(0, 40)), lid + ': the main-idea answer shows its explanation');
    }
    const g = await getJSON(page, 'ep4.course');
    ok(Object.keys(g.mistakes).some(k => k.startsWith('u0l2|')) && Object.keys(g.mistakes).some(k => k.startsWith('u1l1|')), 'mistakes from several lessons live together in one notebook');
    await page.locator('.qtile').first().click(); await sleep(250);
    const dash = await page.innerText('#sheetBox');
    ok(/360m/.test(dash), 'dashboard counts the 6 completed lessons as 360 minutes');
    await page.click('#sheetBox .close'); await sleep(100);
    ok(page.errors.length === 0, 'no page errors while completing all lessons: ' + page.errors.join(' | '));
    await ctx.close();
  }

  /* ---------------- ج) المزامنة مع GitHub (محاكاة) ---------------- */
  const gh = fakeGitHub('test-token');
  let firstStartedAt = 0;
  {
    const { ctx, page } = await newPage(gh);
    await startApp(page);
    await page.click('#gearBtn'); await sleep(200);
    await page.fill('#syncToken', 'test-token');
    await page.click('#syncConnect');
    for (let i = 0; i < 100 && !(gh.files['progress/course.json'] && gh.files['progress/lesson-u0l1.json']); i++) await sleep(100);
    await sleep(300);
    ok(gh.branch, 'connect creates the "progress" branch');
    ok(!!gh.files['progress/course.json'] && !!gh.files['progress/lesson-u0l1.json'], 'connect uploads course.json and lesson-u0l1.json');
    ok(Object.values(gh.files).every(f => f.branch === 'progress'), 'every upload goes to the progress branch, never main');
    ok(Object.keys(gh.files).every(k => !Buffer.from(gh.files[k].content, 'base64').toString().includes('test-token')), 'the key is never uploaded');
    ok((await page.innerText('#syncBox')).includes('On · مفعّلة'), 'settings show sync as On');
    firstStartedAt = (gh.json('progress/course.json') || {}).startedAt;
    await page.click('#sheetBox .close'); await sleep(150);

    // إنهاء مرحلة يرفع الدرس خلال ثوانٍ، بطلب PUT واحد لكل ملف تغيّر
    const putsBefore = gh.log.filter(x => x.startsWith('PUT')).length;
    await page.click('[aria-label="Open Lesson · افتح درس اليوم"]'); await sleep(200);
    await doRecallStage(page, () => 'zzzz');
    await page.waitForFunction(() => { const m = JSON.parse(localStorage.getItem('ep4.syncmeta') || '{}'); return !m.dirtyAt; }, null, { timeout: 8000 }).catch(() => {});
    const lj = gh.json('progress/lesson-u0l1.json');
    ok(lj && lj.stamps && lj.stamps.recall, 'finishing a stage uploads the lesson within seconds');
    const puts = gh.log.filter(x => x.startsWith('PUT')).length - putsBefore;
    ok(puts >= 1 && puts <= 4, 'the stage upload used a handful of requests (' + puts + ' PUT)');

    // تعارض: يُقرأ الأحدث ثم يُعاد الرفع
    gh.conflictOnce = true;
    await page.click('[aria-label="Close · إغلاق"]'); await sleep(150);
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    await sleep(1500);
    const meta = await getJSON(page, 'ep4.syncmeta');
    ok(meta && !meta.err, 'a conflict (409) is resolved by re-reading and re-uploading, no error left');
    ok(page.errors.length === 0, 'no page errors (sync device 1): ' + page.errors.join(' | '));
    await ctx.close();
  }
  {
    // جهاز ثانٍ: يستعيد التقدم دون إعادة تحميل الصفحة
    const { ctx, page } = await newPage(gh);
    await startApp(page);
    await page.evaluate(() => { window.__noReload = 1; });
    await page.click('#gearBtn'); await sleep(200);
    await page.fill('#syncToken', 'test-token');
    await page.click('#syncConnect');
    await page.waitForFunction(() => { const g = JSON.parse(localStorage.getItem('ep4.course') || '{}'); return g.mistakes && Object.keys(g.mistakes).length >= 5; }, null, { timeout: 8000 }).catch(() => {});
    const g = await getJSON(page, 'ep4.course');
    ok(g && Object.keys(g.mistakes).length >= 5 && g.startedAt === firstStartedAt, 'a new device restores the cloud progress (mistakes and start date)');
    ok(await page.evaluate(() => window.__noReload === 1), 'restoring happens without reloading the page');
    const l = await getJSON(page, 'ep4.lesson.u0l1');
    ok(l && l.stamps && l.stamps.recall, 'the lesson stages are restored too');
    ok(page.errors.length === 0, 'no page errors (sync device 2): ' + page.errors.join(' | '));
    await ctx.close();
  }
  {
    // مفتاح خاطئ: رسالة واضحة ونقطة على الترس
    const { ctx, page } = await newPage(gh);
    await startApp(page);
    await page.click('#gearBtn'); await sleep(200);
    await page.fill('#syncToken', 'wrong-token');
    await page.click('#syncConnect'); await sleep(1200);
    ok((await page.innerText('#syncBox')).includes('المفتاح غير صحيح'), 'a wrong key shows a clear Arabic message');
    ok((await page.locator('#gearBtn .sync-dot').count()) === 1, 'a wrong key puts a small dot on the gear');
    await ctx.close();
  }

  await browser.close(); srv.close();
  console.log(results.join('\n'));
  console.log('\n' + (results.length - fails) + '/' + results.length + ' passed');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
