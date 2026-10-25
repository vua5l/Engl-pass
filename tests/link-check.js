#!/usr/bin/env node
'use strict';
/*
 * link-check.js - checks that every external address of the English Passport site still answers.
 *
 *   node tests/link-check.js [siteRoot] [--quiet]
 *
 *   siteRoot  folder with content.js, lessons/ and app.js (default: current directory)
 *   --quiet   hide INFO lines (one per place an address is used), print only ERROR / WARN and the summary
 *
 * Plain Node 22 (global fetch), no npm packages. It needs internet, so it runs on GitHub Actions
 * (.github/workflows/checks.yml) or on a computer, not in a work sandbox without network.
 *
 * What is checked
 *   1. listening.url of every lesson (and any other listening.url in the data): the clip page the learner opens
 *      (kind "clip").
 *   2. Every other http(s) address in the data (content.js DATA and the lesson files): a field whose whole value
 *      is an http(s) URL, an href / src attribute inside an HTML string, or an address written in a text (kind
 *      "link"; "audio" when the address ends in an audio file extension). SVG namespaces (xmlns="http://...") are
 *      not links and are skipped.
 *   3. The pronunciation audio of every vocabulary entry with a wikiFile / wikiFiles field (kind "audio"). The
 *      files and the exact address the site plays come from app.js itself: AUDIO.filesFor, AUDIO.resolveFile and
 *      findVocabEntry are cut out of app.js and run in a vm sandbox (as content-check.js does with the answer
 *      checker). resolveFile asks the Wikimedia Commons API about the file and plays its MP3 transcode, else the
 *      original file, else (unknown file, or the API failed) https://commons.wikimedia.org/wiki/Special:FilePath/<file>.
 *   Not checked: generated links (Oxford dictionary links built from oxfordSlug, the Commons file pages of the
 *   credits sheet) and the En-us-<word>.ogg names the engine guesses for words that have no wikiFile.
 *   Lessons come from the content.js lists unit<N>Lessons (entries with test:true are skipped):
 *   id u<U>l<N> -> lessons/u<U>/l<N>.js, run in a vm sandbox after content.js.
 *
 * How one address is checked
 *   HEAD; when HEAD is refused (status >= 400), GET with "Range: bytes=0-0". Redirects are followed (at most 10).
 *   Final status 200-399 = OK. 404 / 410 = ERROR at once. Anything else (403, 429, 5xx, timeouts, network
 *   errors) is retried twice with a growing pause (Retry-After is honoured up to 60 s), then reported as WARN:
 *   only 404 / 410 prove that an address is gone, so rate limits and outages do not turn a run red. A 403 that is an explicit
 *   bot challenge (header "cf-mitigated: challenge") says nothing about the page, so it is a WARN and not retried.
 *   At most 4 requests at a time and 2 per host (the Commons API one at a time, as Wikimedia asks of bots), a short
 *   pause before each address, and the User-Agent "EnglPassLinkCheck/1.0 (https://github.com/vua5l/Engl-pass)"
 *   (Wikimedia requires a descriptive one).
 *   Two safety valves keep an unattended run short and polite: after 3 addresses of one host in a row end in such
 *   a failure, that host gets no more retries and its remaining addresses are not tried (they are reported like a
 *   failure, ERROR or WARN as above, with "not tried"); and after 10 minutes no new address or retry is started
 *   (the rest is a WARN, "not checked"). The Commons API counts apart from commons.wikimedia.org file addresses.
 *
 * Output: one line per place an address is used, in the format of content-check.js
 *     ERROR|WARN|INFO  file | lesson | field | message
 *   then a summary line. Exit code 1 if there is at least one ERROR, otherwise 0 (2 = bad usage or a crash).
 *
 * Options for testing the checker itself without internet (left out of --help on purpose):
 *   --test-urls <file>   check only the addresses listed in <file>, one per line: "[audio|clip|link] <url>"
 *                        (kind defaults to link; blank lines and lines starting with # are skipped)
 *   --test-proxy <base>  send every request to <base>/<scheme>/<host><path>?<query> instead (a local mock server)
 *   --timeout <ms>       per-request timeout (default 20000)
 *   --retry-delay <ms>   pause before the first retry; the second pause is 3 times longer (default 2000)
 *   --gap <ms>           pause before each address a worker takes (default 250)
 *   --budget <ms>        time budget for all requests (default 600000)
 *   --host-fail-limit <n> failing addresses of one host in a row before the rest is not tried (default 3, 0 = off)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ------------------------------------------------------------------ settings
const USER_AGENT = 'EnglPassLinkCheck/1.0 (https://github.com/vua5l/Engl-pass)';
const SITE_URL = 'https://vua5l.github.io/Engl-pass/';   // relative addresses resolve against the live site, as in the browser
const CFG = {
  concurrency: 4,        // requests in flight at most
  perHost: 2,            // requests in flight at most per host (Wikimedia asks bots to keep this low)
  gap: 250,              // ms pause before each address a worker takes
  timeout: 20000,        // ms per request
  retries: 2,            // extra attempts after 403 / 429 / 5xx / timeouts / network errors
  retryDelay: 2000,      // ms before the first retry; the second waits 3 times as long (a longer Retry-After wins)
  retryAfterMax: 60000,  // ms, the longest Retry-After honoured
  maxRedirects: 10,
  hostFailLimit: 3,      // addresses of one host failing in a row before the rest of that host is not tried
  budget: 600000,        // ms for all requests; then no new address or retry is started
};
const CRITICAL = new Set(['audio', 'clip']);   // what the learner needs (labels only: after the retries every failure but 404/410 is a WARN)
const AUDIO_EXT_RE = /\.(?:mp3|ogg|oga|opus|wav|m4a|aac|flac|weba)$/i;
const AUDIO_KEY_RE = /wiki|audio|sound|pronunc/i;   // entries the engine's AUDIO.filesFor is asked about

// ------------------------------------------------------------------ CLI
const USAGE = 'Usage: node tests/link-check.js [siteRoot] [--quiet]\n' +
  '  siteRoot  folder with content.js, lessons/ and app.js (default: current directory)\n' +
  '  --quiet   hide INFO lines\n' +
  'Checks the lesson clips, the http(s) links in the data and the Wikimedia pronunciation audio. Needs internet.';
const OPT = { quiet: false, root: '.', testUrls: null, testProxy: null };
function usageError(msg) { console.error(`${msg}\n${USAGE}`); process.exit(2); }
{
  const HIDDEN = { 'test-urls': 'testUrls', 'test-proxy': 'testProxy', timeout: 'timeout', 'retry-delay': 'retryDelay', gap: 'gap', budget: 'budget',
    'host-fail-limit': 'hostFailLimit' };
  const ZERO_OK = new Set(['gap', 'retry-delay', 'host-fail-limit']);
  const argv = process.argv.slice(2), positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i], m = /^--([a-z-]+)(?:=(.*))?$/.exec(a);
    if (a === '-h' || a === '--help') { console.log(USAGE); process.exit(0); }
    else if (a === '-q' || a === '--quiet') OPT.quiet = true;
    else if (m && has(HIDDEN, m[1])) {
      const v = m[2] != null ? m[2] : argv[++i];
      if (v == null || v === '') usageError(`--${m[1]} needs a value`);
      if (m[1] === 'test-urls' || m[1] === 'test-proxy') OPT[HIDDEN[m[1]]] = v;
      else if (/^\d+$/.test(v) && (Number(v) > 0 || ZERO_OK.has(m[1]))) CFG[HIDDEN[m[1]]] = Number(v);
      else usageError(`--${m[1]} needs a whole number${m[1] === 'host-fail-limit' ? '' : ' of milliseconds'}`);
    }
    else if (a.startsWith('-')) usageError(`unknown option ${a}`);
    else positional.push(a);
  }
  if (positional.length > 1) usageError('give at most one siteRoot');
  OPT.root = positional[0] || '.';
  if (OPT.testProxy) {
    let ok = false;
    try { ok = /^https?:$/.test(new URL(OPT.testProxy).protocol); } catch (_) { /* not a URL */ }
    if (!ok) usageError('--test-proxy needs an http(s) base address');
    OPT.testProxy = OPT.testProxy.replace(/\/+$/, '');
  }
}
const ROOT = path.resolve(OPT.root);

// ------------------------------------------------------------------ reporting
const results = [];
const counts = { ERROR: 0, WARN: 0, INFO: 0 };
function report(level, file, id, field, msg) {
  counts[level]++;
  results.push({ level, line: `${level.padEnd(5)} ${[file, id, field].filter(Boolean).join(' | ') || 'site'} | ${msg}` });
}
class Fatal extends Error {}

// ------------------------------------------------------------------ small helpers
function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const isStr = v => typeof v === 'string' && v.trim() !== '';
const URL_RE = /^https?:\/\/\S+$/i;                                           // a field whose whole value is an address
const ATTR_URL_RE = /\b(?:href|src)\s*=\s*(["'])(https?:\/\/[^"'\s<>]+)\1/gi;   // an address inside HTML
const TEXT_URL_RE = /https?:\/\/[^\s"'<>()\[\]{}]+/gi;                           // an address written in a text
const XMLNS_RE = /\bxmlns(?::[\w-]+)?\s*=\s*(["'])[^"']*\1/gi;                    // SVG / XML namespaces are not links
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const duration = ms => (ms < 60000 ? `${Math.round(ms / 100) / 10} s` : `${Math.round(ms / 6000) / 10} min`);
/* Absolute form of an address, resolved against the live site like the browser does ("//host/x" -> https). */
function absolute(u) { try { return new URL(String(u), SITE_URL).href; } catch (_) { return String(u); } }
function pathOf(u) { try { return new URL(u).pathname; } catch (_) { return ''; } }
function hostOf(u) { try { return new URL(u).host; } catch (_) { return ''; } }
const segments = u => pathOf(u).split('/').filter(Boolean).length;
/* Run up to CFG.concurrency workers over the list, each pausing CFG.gap ms before every item it takes. */
async function pool(list, fn) {
  let next = 0;
  const worker = async () => {
    while (next < list.length) {
      const i = next++;
      if (CFG.gap) await sleep(CFG.gap);
      await fn(list[i], i);
    }
  };
  await Promise.all(Array.from({ length: Math.min(CFG.concurrency, list.length) }, worker));
}

// ------------------------------------------------------------------ hosts (request slots, failures in a row) and the time budget
let deadline = Infinity;                       // set when the requests start
const outOfTime = (extra = 0) => Date.now() + extra > deadline;
/* fn runs when one of `limit` places is free; a place is handed straight to the next waiting call. */
function semaphore(limit) {
  let busy = 0;
  const queue = [];
  return async fn => {
    if (busy < limit) busy++;
    else await new Promise(resolve => queue.push(resolve));
    try { return await fn(); }
    finally { const next = queue.shift(); if (next) next(); else busy--; }
  };
}
const API = 'the Commons API';                 // its own "host", apart from the commons.wikimedia.org file addresses
const hosts = new Map();
/* Per host (the host of the real address, also in --test-proxy mode): `turn` lets at most CFG.perHost addresses be
   checked at a time (retries included), `slot` at most CFG.perHost requests in flight (redirects from other hosts
   included); the Commons API gets one at a time. fails counts failed addresses in a row, trip is set at the limit. */
function hostInfo(name) {
  if (!hosts.has(name)) {
    const n = name === API ? 1 : CFG.perHost;
    hosts.set(name, { turn: semaphore(n), slot: semaphore(n), fails: 0, trip: null });
  }
  return hosts.get(name);
}
/* An address of this host ended in a failure (true) or got a definite answer (false). The first time the failures
   in a row reach the limit, the host is "tripped" and keeps that message until one of its addresses answers again. */
function noteHost(name, failed, r) {
  const s = hostInfo(name);
  if (!failed) { s.fails = 0; s.trip = null; return; }
  s.fails++;
  if (CFG.hostFailLimit > 0 && s.fails >= CFG.hostFailLimit && !s.trip) s.trip = { fails: s.fails, last: r };
}
const tripMessage = (name, t) => `${plural(t.fails, name === API ? 'request' : 'address', name === API ? 'requests' : 'addresses')} ` +
  `${name === API ? 'to' : 'of'} ${name} in a row failed (last: ${failure(t.last)})`;
/* The result for an address that is not tried, or null when it may be tried. */
function skipReason(name) {
  if (outOfTime()) return { ok: false, skipped: 'budget', error: `not checked: the time budget of ${duration(CFG.budget)} ran out` };
  const t = hostInfo(name).trip;
  if (t) return { ok: false, skipped: 'host', challenge: !!t.last.challenge, error: `not tried: ${tripMessage(name, t)}` };
  return null;
}
/* Why no further retry may start (the time budget would run out, or the host tripped), or null. */
function stopRetries(name, pause) {
  if (outOfTime(pause)) return 'no more retries: the time budget ran out';
  const t = hostInfo(name).trip;
  return t ? `no more retries: ${tripMessage(name, t)}` : null;
}

// ------------------------------------------------------------------ HTTP
/* The address that really gets the request: the same one, or the local mock server in --test-proxy mode. */
function transport(url) {
  if (!OPT.testProxy) return url;
  const u = new URL(url);
  return `${OPT.testProxy}/${u.protocol.replace(':', '')}/${u.host}${u.pathname}${u.search}`;
}
function netError(e) {
  if (e && e.name === 'TimeoutError') return `timeout after ${duration(CFG.timeout)}`;
  const c = e && e.cause;
  return (c && (c.code || c.message)) || (e && e.message) || String(e);
}
function retryAfterMs(v) {
  const s = String(v == null ? '' : v).trim();
  if (/^\d+$/.test(s)) return Number(s) * 1000;
  const t = s ? Date.parse(s) : NaN;
  return Number.isFinite(t) ? Math.max(0, t - Date.now()) : 0;
}
function retryPause(retry, last) {                       // retry = 1 or 2
  const base = CFG.retryDelay * (retry === 1 ? 1 : 3);
  return Math.min(Math.max(base, retryAfterMs(last && last.retryAfter)), Math.max(base, CFG.retryAfterMax));
}
/* One request, no redirect following, body discarded unread. */
function request(url, method) {
  return hostInfo(hostOf(url)).slot(async () => {
    const headers = { 'User-Agent': USER_AGENT };
    if (method === 'GET') headers.Range = 'bytes=0-0';
    const res = await fetch(transport(url), { method, headers, redirect: 'manual', signal: AbortSignal.timeout(CFG.timeout) });
    const out = {
      status: res.status, location: res.headers.get('location'), retryAfter: res.headers.get('retry-after'),
      challenge: /^challenge$/i.test(res.headers.get('cf-mitigated') || ''),
    };
    if (res.body) { try { await res.body.cancel(); } catch (_) { /* already closed */ } }
    return out;
  });
}
/* Follow the redirect chain with one method. Result: { ok, status | error, url (final address), method, ... }. */
async function follow(url, method) {
  let cur = url;
  for (let hop = 0; ; hop++) {
    let res;
    try { res = await request(cur, method); }
    catch (e) { return { ok: false, error: netError(e), url: cur, method }; }
    if (res.status >= 300 && res.status < 400 && res.location) {
      if (hop >= CFG.maxRedirects) return { ok: false, error: `more than ${CFG.maxRedirects} redirects`, url: cur, method };
      try { cur = new URL(res.location, cur).href; }
      catch (_) { return { ok: false, error: `redirect to a bad address ${JSON.stringify(res.location)}`, url: cur, method }; }
      continue;
    }
    return { ok: res.status >= 200 && res.status < 400, status: res.status, url: cur, method, retryAfter: res.retryAfter, challenge: res.challenge };
  }
}
/* HEAD first; GET with a one-byte Range when HEAD is refused. A HEAD that times out or cannot connect sends the
   retries straight to GET, so one attempt never waits for two timeouts. */
async function attempt(url, skipHead) {
  if (skipHead) return Object.assign(await follow(url, 'GET'), { headFailed: true });
  const head = await follow(url, 'HEAD');
  if (head.ok) return head;
  if (head.error) return Object.assign(head, { headFailed: true });
  return Object.assign(await follow(url, 'GET'), { headFailed: true, head: head.status });
}
const definite = r => r.ok || r.status === 404 || r.status === 410;
async function checkUrl(url) {
  const host = hostOf(url);
  let r = null, skipHead = false;
  for (let i = 0; i <= CFG.retries; i++) {
    if (i) {
      const pause = retryPause(i, r), stop = stopRetries(host, pause);
      if (stop) { r.cut = stop; break; }
      await sleep(pause);
    }
    r = await attempt(url, skipHead);
    r.attempts = i + 1;
    if (definite(r) || (r.status === 403 && r.challenge)) break;
    if (r.headFailed) skipHead = true;
  }
  noteHost(host, !definite(r), r);
  return r;
}
/* Check one address in its host's turn: the trip and the time budget are looked at after the wait. */
function checkAddress(url) {
  const host = hostOf(url);
  return hostInfo(host).turn(async () => skipReason(host) || checkUrl(url));
}
/* GET with retries for 429 / 5xx / network errors, body read as text (for the Commons API, one lookup at a time). */
function apiGet(url) {
  return hostInfo(API).turn(async () => {
    const skip = skipReason(API);
    if (skip) return { error: skip.error, skipped: true };
    let r = null;
    for (let i = 0; i <= CFG.retries; i++) {
      if (i) {
        const pause = retryPause(i, r);
        if (stopRetries(API, pause)) break;
        await sleep(pause);
      }
      try {
        const res = await fetch(transport(url), { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(CFG.timeout) });
        r = { status: res.status, type: res.headers.get('content-type'), retryAfter: res.headers.get('retry-after'), body: await res.text(), attempts: i + 1 };
        if (r.status !== 429 && r.status < 500) break;
      } catch (e) { r = { error: netError(e), attempts: i + 1 }; }
    }
    noteHost(API, !!r.error || r.status >= 400, { error: r.error, status: r.status, attempts: r.attempts });
    return r;
  });
}

// ------------------------------------------------------------------ the site's own audio code (app.js in a vm sandbox)
/* Return the shortest piece of source starting at `start` and ending with `endChar` that compiles on its own. */
function scanUntilCompiles(src, start, endChar) {
  for (let pos = src.indexOf(endChar, start); pos >= 0; pos = src.indexOf(endChar, pos + 1)) {
    const cand = src.slice(start, pos + 1);
    try { new vm.Script(cand); return cand; } catch (_) { /* not complete yet, keep scanning */ }
  }
  return null;
}
/* Source of "function name(...){...}" or "var name = ...;" from app.js, or null (same method as content-check.js). */
function extractDecl(src, name) {
  const last = re => { let m = null; for (const x of src.matchAll(re)) m = x; return m; };   // the last definition wins, as in the page
  for (const indent of ['', '[ \\t]*']) {                                                      // top-level first, then indented
    let m = last(new RegExp('(?:^|\\n)' + indent + '(function\\s+' + name + '\\s*\\()', 'g'));
    if (m) return scanUntilCompiles(src, m.index + m[0].indexOf('function'), '}');
    m = last(new RegExp('(?:^|\\n)' + indent + '((?:var|let|const)\\s+' + name + '\\s*=)', 'g'));
    if (m) return scanUntilCompiles(src, m.index + m[0].indexOf(m[1]), ';');
  }
  return null;
}
const commons = new Map();   // file name -> what the Commons API said about it (for clearer messages only)
let resolving = null;        // file name handed to AUDIO.resolveFile, read when it calls fetch (synchronously)
/* The page's fetch(api), for AUDIO.resolveFile: a real request (with User-Agent, timeout and retries). */
function sandboxFetch(url) {
  const name = resolving;
  resolving = null;
  return apiGet(String(url)).then(r => {
    if (name != null) commons.set(name, summarizeCommons(r));
    if (r.error) throw new Error(r.error);           // like a failed fetch in the browser: the page falls back
    const nullBody = [204, 205, 304].includes(r.status);
    return new Response(nullBody ? null : r.body, { status: r.status, headers: { 'content-type': r.type || 'text/plain' } });
  });
}
function summarizeCommons(r) {
  if (r.skipped) return { skipped: true, error: r.error };
  if (r.error) return { error: r.error };
  if (r.status !== 200) return { error: `HTTP ${r.status}` };
  let d;
  try { d = JSON.parse(r.body); } catch (_) { return { error: 'the answer is not JSON' }; }
  const pages = d && d.query && d.query.pages, k = pages && Object.keys(pages)[0], pg = k != null ? pages[k] : null;
  if (!pg || typeof pg !== 'object') return { error: d && d.error ? `API error ${d.error.code || ''}`.trim() : 'no page in the answer' };
  if (has(pg, 'missing')) return { missing: true };
  if (has(pg, 'invalid')) return { invalid: true };
  const ii = pg.imageinfo && pg.imageinfo[0];
  if (!ii) return { error: 'no imageinfo in the answer' };
  return { found: true, mp3: (ii.derivatives || []).some(x => x && (/mp3/i.test(x.type || '') || /\.mp3$/i.test(x.src || ''))) };
}
/* Load AUDIO (and whatever it needs, e.g. findVocabEntry) from app.js, then dry-run it without network. */
async function loadAudio(root) {
  const enginePath = path.join(root, 'app.js');
  if (!fs.existsSync(enginePath)) throw new Fatal(`app.js not found in ${root} (needed to build the audio addresses the site plays)`);
  const src = fs.readFileSync(enginePath, 'utf8');
  const ctx = vm.createContext({ console: { log() {}, info() {}, warn() {}, error() {} }, ALL_VOCAB: [], fetch: sandboxFetch });
  const loaded = new Set();
  const load = name => {
    if (loaded.has(name)) return true;
    const code = extractDecl(src, name);
    if (!code) return false;
    vm.runInContext(code, ctx, { filename: `app.js:${name}` });
    loaded.add(name);
    return true;
  };
  /* Run fn; every name it reports as undefined (a helper of AUDIO) is cut out of app.js too, then fn runs again. */
  const withHelpers = async fn => {
    for (let i = 0; ; i++) {
      try { return await fn(); }
      catch (e) {
        const m = /^(\w+) is not defined/.exec((e && e.message) || '');
        if (i >= 12 || !m || !load(m[1])) throw e;
      }
    }
  };
  const MOVED = 'the pronunciation code in app.js moved or changed; update tests/link-check.js';
  if (!load('AUDIO')) throw new Fatal(`cannot find "var AUDIO = {...}" in app.js (${MOVED})`);
  // filesFor must return the wikiFile of an entry.
  let single;
  try { single = await withHelpers(() => vm.runInContext("AUDIO.filesFor({ en: 'x', wikiFile: 'A.ogg' })", ctx)); }
  catch (e) { throw new Fatal(`AUDIO.filesFor from app.js does not run in the sandbox: ${e.message} (${MOVED})`); }
  if (!Array.isArray(single) || single.join('|') !== 'A.ogg') throw new Fatal(`AUDIO.filesFor no longer returns the wikiFile of an entry (dry run gave ${JSON.stringify(single)}; ${MOVED})`);
  // resolveFile with a canned Commons answer: when it asks the API, it must return one of the canned files.
  // Getting the Special:FilePath fallback instead would mean an error was swallowed inside its promise chain.
  const DRY = 'Link-check dry run.ogg';
  const ORIG = 'https://upload.wikimedia.org/wikipedia/commons/0/00/Link-check_dry_run.ogg';
  const MP3 = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/00/Link-check_dry_run.ogg/Link-check_dry_run.ogg.mp3';
  const canned = { query: { pages: { 1: { title: 'File:' + DRY, imageinfo: [{ url: ORIG, derivatives: [
    { src: ORIG, type: 'audio/ogg; codecs="vorbis"' }, { src: MP3, type: 'audio/mpeg' }] }] } } } };
  let asked = null, got;
  ctx.fetch = url => { asked = String(url); return Promise.resolve(new Response(JSON.stringify(canned), { status: 200, headers: { 'content-type': 'application/json' } })); };
  try { got = await withHelpers(() => ctx.AUDIO.resolveFile(DRY)); }
  catch (e) { throw new Fatal(`AUDIO.resolveFile from app.js does not run in the sandbox: ${e.message} (${MOVED})`); }
  finally { ctx.fetch = sandboxFetch; }
  vm.runInContext('if (AUDIO.cache) AUDIO.cache = {}', ctx);
  if (!isStr(got)) throw new Fatal(`AUDIO.resolveFile returned ${JSON.stringify(got)} in a dry run (${MOVED})`);
  if (asked != null && got !== MP3 && got !== ORIG) throw new Fatal(`AUDIO.resolveFile did not use the canned Commons answer in a dry run (got ${JSON.stringify(got)}; ${MOVED})`);
  return {
    loaded,
    filesFor: entry => ctx.AUDIO.filesFor(entry),
    resolve(name) { resolving = name; try { return Promise.resolve(ctx.AUDIO.resolveFile(name)); } finally { resolving = null; } },
  };
}

// ------------------------------------------------------------------ loading the data (vm sandbox, as content-check.js)
/* Run content.js, then the lesson file of every lesson in the unit<N>Lessons lists. */
function loadSite(root) {
  const dataPath = path.join(root, 'content.js');
  if (!fs.existsSync(dataPath)) throw new Fatal(`content.js not found in ${root}`);
  const sandbox = { console: { log() {}, info() {}, warn() {}, error() {} }, document: {}, navigator: {} };
  sandbox.window = sandbox; sandbox.self = sandbox;                       // minimal browser stubs
  vm.createContext(sandbox);
  try { vm.runInContext(fs.readFileSync(dataPath, 'utf8'), sandbox, { filename: 'content.js' }); }
  catch (e) { throw new Fatal(`content.js failed to run: ${e.message}`); }
  const DATA = sandbox.DATA;
  if (!DATA || typeof DATA !== 'object') throw new Fatal('no global DATA object after running content.js');
  const lessons = [], done = new Set();
  const lists = Object.keys(DATA).map(k => /^unit(\d+)Lessons$/.exec(k)).filter(Boolean).sort((a, b) => Number(a[1]) - Number(b[1]));
  for (const [key] of lists) {
    (Array.isArray(DATA[key]) ? DATA[key] : []).forEach((entry, i) => {
      if (!entry || typeof entry !== 'object' || entry.test) return;
      const id = entry.id, m = /^u(\d+)l(\d+)$/.exec(String(id == null ? '' : id));
      if (!m) { report('WARN', 'content.js', '', `${key}[${i}]`, `lesson id ${JSON.stringify(id)} is not of the form u<unit>l<n>; its addresses were not checked`); return; }
      if (done.has(id)) return;
      done.add(id);
      const rel = `lessons/u${m[1]}/l${m[2]}.js`, file = path.join(root, rel);
      if (!fs.existsSync(file)) {
        if (entry.open) report('WARN', rel, id, '', 'open:true in content.js but the lesson file does not exist; nothing to check');
        else report('INFO', rel, id, '', 'not built yet (no lesson file)');
        return;
      }
      try { vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: rel }); }
      catch (e) { report('ERROR', rel, id, '', `lesson file failed to run, so its addresses were not checked: ${e.message}`); return; }
      const L = sandbox.LESSONS && sandbox.LESSONS[id];
      if (!L || typeof L !== 'object') { report('ERROR', rel, id, '', `the file does not define LESSONS.${id}, so its addresses were not checked`); return; }
      lessons.push({ id, file: rel, L });
    });
  }
  return { DATA, lessons };
}

// ------------------------------------------------------------------ collecting the addresses
/* Visit every string and object under `node`; paths look like content-check fields: vocab[2].ex, unitTests[1].x */
function walk(node, p, visit, depth = 0, seen = new Set()) {
  if (node == null || depth > 14) return;
  if (typeof node === 'string') { visit.str(node, p); return; }
  if (typeof node !== 'object' || seen.has(node)) return;
  seen.add(node);
  const arr = Array.isArray(node);
  if (!arr) visit.obj(node, p);
  for (const k of Object.keys(node))
    walk(node[k], arr || /^\d+$/.test(k) ? `${p}[${k}]` : p ? `${p}.${k}` : k, visit, depth + 1, seen);
}
/* Name of the field that holds file f (the i-th file the engine returned) of an entry: wikiFile, wikiFiles[1], ... */
function audioField(o, f, i) {
  let found = null;
  for (const k of Object.keys(o)) {
    const v = o[k];
    if (Array.isArray(v)) {
      if (v[i] === f) return `${k}[${i}]`;
      const j = v.indexOf(f);
      if (j >= 0 && !found) found = `${k}[${j}]`;
    } else if (v === f && !found) found = k;
  }
  return found || 'audio';
}
function collect(site, audio) {
  const usages = [];
  const kindOf = (p, url) => (/(?:^|\.)listening\.url$/.test(p) ? 'clip' : AUDIO_EXT_RE.test(pathOf(url)) ? 'audio' : 'link');
  const visitor = (file, place) => ({
    str(s, p) {
      if (!/https?:\/\//i.test(s)) return;
      const at = Object.assign({ file }, place(p));
      if (URL_RE.test(s.trim())) { usages.push(Object.assign({ kind: kindOf(p, s.trim()), url: s.trim() }, at)); return; }
      const text = s.replace(XMLNS_RE, ' '), found = new Set();
      for (const m of text.matchAll(ATTR_URL_RE)) found.add(m[2].replace(/&amp;/g, '&'));
      for (const m of text.replace(ATTR_URL_RE, ' ').matchAll(TEXT_URL_RE)) found.add(m[0].replace(/&amp;/g, '&').replace(/[.,;:!?]+$/, ''));
      for (const url of found) usages.push(Object.assign({ kind: kindOf('', url), url }, at));
    },
    obj(o, p) {
      if (!Object.keys(o).some(k => AUDIO_KEY_RE.test(k))) return;
      const at = Object.assign({ file }, place(p));
      const declared = has(o, 'wikiFile') || has(o, 'wikiFiles');
      let files;
      try { files = audio.filesFor(o); }
      catch (e) { report('ERROR', file, at.lesson, at.field, `AUDIO.filesFor (app.js) failed on this entry: ${e.message}`); return; }
      files = Array.isArray(files) ? [...files].filter(isStr) : [];
      if (!files.length) {
        if (declared) report('WARN', file, at.lesson, at.field, 'has a wikiFile / wikiFiles field, but the engine (AUDIO.filesFor) finds no file to play');
        return;
      }
      files.forEach((f, i) => {
        const sub = audioField(o, f, i);
        usages.push({ kind: 'audio', wikiFile: f, file, lesson: at.lesson, field: at.field ? `${at.field}.${sub}` : sub });
      });
    },
  });
  // content.js: "unitTests[1].questions[3].x" is shown as lesson "unitTests[1]", field "questions[3].x" (as in content-check)
  const dataPlace = p => { const m = /^([A-Za-z_$][\w$]*\[\d+\])\.(.+)$/.exec(p); return m ? { lesson: m[1], field: m[2] } : { lesson: '', field: p }; };
  walk(site.DATA, '', visitor('content.js', dataPlace));
  for (const { id, file, L } of site.lessons) walk(L, '', visitor(file, p => ({ lesson: id, field: p })));
  return usages;
}
/* --test-urls: "[audio|clip|link] <url>" per line. */
function readTestList(file) {
  const name = path.basename(file), usages = [];
  let text;
  try { text = fs.readFileSync(file, 'utf8'); } catch (e) { throw new Fatal(`cannot read the test list ${file}: ${e.message}`); }
  text.split(/\r?\n/).forEach((line, i) => {
    const t = line.trim();
    if (!t || t.startsWith('#')) return;
    const m = /^(?:(audio|clip|link)\s+)?(\S+)$/i.exec(t);
    if (!m || !URL_RE.test(m[2])) { report('WARN', name, '', `line ${i + 1}`, `not "[audio|clip|link] <http(s) url>": ${JSON.stringify(t)}`); return; }
    usages.push({ kind: (m[1] || 'link').toLowerCase(), url: m[2], file: name, lesson: '', field: `line ${i + 1}` });
  });
  return usages;
}

// ------------------------------------------------------------------ messages
function how(r) {
  if (r.method === 'HEAD') return `HEAD${r.attempts > 1 ? `, attempt ${r.attempts}` : ''}`;
  return `GET bytes=0-0, ${r.head != null ? `HEAD gave ${r.head}` : 'after HEAD failed'}${r.attempts > 1 ? `, attempt ${r.attempts}` : ''}`;
}
function failure(r) {
  let s = r.error ? r.error : `HTTP ${r.status}`;
  if (r.head != null && r.head !== r.status) s += ` (HEAD gave ${r.head})`;
  if (r.attempts > 1) s += ` after ${r.attempts} attempts`;
  if (r.cut) s += ` (${r.cut})`;
  return s;
}
function reportUsage(u, r) {
  const where = [u.file, u.lesson, u.field];
  if (!r) { report('ERROR', ...where, `could not work out the address the site plays for ${JSON.stringify(u.wikiFile)}: ${u.resolveError || 'unknown reason'}`); return; }
  const label = u.kind === 'audio' ? 'audio file' : u.kind === 'clip' ? 'clip page' : 'link';
  const what = u.wikiFile != null ? `${JSON.stringify(u.wikiFile)} -> ${u.url}` : u.url;
  const c = u.wikiFile != null ? commons.get(u.wikiFile) || {} : {};
  const api = c.missing ? 'Commons API: no such file (missing), so the site falls back to Special:FilePath'
    : c.invalid ? 'Commons API: not a valid file name (invalid), so the site falls back to Special:FilePath'
    : c.skipped ? `the Commons API was not asked (${c.error.replace(/^not tried: /, '')}), so this is the Special:FilePath fallback`
    : c.error ? `the Commons API failed (${c.error}), so this is the Special:FilePath fallback the site then uses`
    : c.found && !c.mp3 ? 'the Commons API answer has no MP3 derivative, so the site plays the original file' : '';
  const note = api ? `; ${api}` : '';
  if (r.skipped) {
    const level = 'WARN';                            // not tried (budget, host limit) is never proof that a link is broken
    report(level, ...where, `${label} ${r.error}: ${what}${note}`);
    return;
  }
  if (!r.ok && r.status === 403 && r.challenge) {
    report('WARN', ...where, `the ${label} answers with a bot check (403, cf-mitigated: challenge), so it could not be verified; open it by hand: ${what}`);
    return;
  }
  const moved = r.url && r.url !== u.url ? ` -> redirected to ${r.url}` : '';
  if (r.ok) {
    report('INFO', ...where, `OK ${r.status} (${how(r)}) ${what}${moved}${note}`);
    if (u.wikiFile == null && moved && segments(u.url) >= 2 && segments(r.url) <= 1)
      report('WARN', ...where, `the ${label} redirects to ${r.url}, which looks like an index page (the page may have been removed): ${u.url}`);
  } else if (r.status === 404 || r.status === 410) {
    const gone = u.wikiFile == null ? `${label} is gone`
      : c.missing || c.invalid ? `no such audio file on Wikimedia Commons (API: ${c.missing ? 'missing' : 'invalid'})` : 'the audio file the site plays is gone';
    report('ERROR', ...where, `${gone}: ${failure(r)} for ${what}${moved}${c.missing || c.invalid ? '' : note}`);
  } else report('WARN', ...where, `${label} does not answer: ${failure(r)} for ${what}${moved}${note}`);   // only 404/410 prove it is gone
}

// ------------------------------------------------------------------ main
async function main() {
  let usages, site = null, audio = null;
  if (OPT.testUrls) usages = readTestList(OPT.testUrls);
  else {
    site = loadSite(ROOT);
    audio = await loadAudio(ROOT);
    usages = collect(site, audio);
  }
  deadline = Date.now() + CFG.budget;
  if (audio) {
    // The address the site plays for each audio file, from AUDIO.resolveFile (asks the Commons API).
    const names = [...new Set(usages.filter(u => u.wikiFile != null).map(u => u.wikiFile))];
    const played = new Map();
    await pool(names, async name => {
      try {
        const url = await audio.resolve(name);
        played.set(name, isStr(url) ? { url: absolute(url) } : { error: `AUDIO.resolveFile (app.js) returned ${JSON.stringify(url)}` });
      } catch (e) { played.set(name, { error: `AUDIO.resolveFile (app.js) failed: ${e && e.message}` }); }
    });
    usages.forEach(u => {
      if (u.wikiFile == null) return;
      const p = played.get(u.wikiFile) || { error: 'not resolved' };
      u.url = p.url || null;
      u.resolveError = p.error;
    });
  }
  // Each unique address once, whatever the number of places that use it.
  const targets = new Map(), rank = { audio: 0, clip: 1, link: 2 };
  for (const u of usages) {
    if (!u.url) continue;
    u.url = absolute(u.url);
    const t = targets.get(u.url);
    if (!t) targets.set(u.url, { url: u.url, kind: u.kind });
    else if (rank[u.kind] < rank[t.kind]) t.kind = u.kind;
  }
  if (!OPT.quiet) console.error(`link-check: checking ${plural(targets.size, 'address', 'addresses')} ...`);
  await pool([...targets.values()], async t => { t.result = await checkAddress(t.url); });
  const byKind = { audio: 0, clip: 0, link: 0 };
  targets.forEach(t => { byKind[t.kind]++; });
  const head = [];
  if (site) {
    head.push(`site ${ROOT}: content.js and ${plural(site.lessons.length, 'lesson', 'lessons')} from the unit<N>Lessons lists (${site.lessons.map(l => l.id).join(', ') || 'none'})`);
    head.push(`audio addresses built with app.js: ${[...audio.loaded].join(', ')} (dry run passed)`);
  } else head.push(`test list ${OPT.testUrls}`);
  if (OPT.testProxy) head.push(`requests sent to the test server ${OPT.testProxy}`);
  if (commons.size) {
    const cs = [...commons.values()], n = f => cs.filter(f).length;
    head.push(`Commons API (as app.js asks it): ${plural(commons.size, 'file', 'files')} looked up; found ${n(c => c.found)} ` +
      `(${n(c => c.mp3)} with an MP3 derivative, the rest play the original file), missing ${n(c => c.missing)}, invalid name ${n(c => c.invalid)}, ` +
      `lookup failed ${n(c => c.error && !c.skipped)}, not asked ${n(c => c.skipped)}`);
  }
  head.push(`${plural(usages.length, 'place uses', 'places use')} ${plural(targets.size, 'unique address', 'unique addresses')}: ` +
    `${byKind.audio} audio, ${plural(byKind.clip, 'lesson clip', 'lesson clips')}, ${plural(byKind.link, 'other link', 'other links')}`);
  const before = results.splice(0);                                  // lines written while loading go after the header
  head.forEach(msg => report('INFO', '', '', '', msg));
  results.push(...before);
  usages.forEach(u => reportUsage(u, u.url ? targets.get(u.url).result : null));
  const notChecked = [...targets.values()].filter(t => t.result && t.result.skipped).length;
  return { unique: targets.size, byKind, lessons: site ? site.lessons.length : null, notChecked };
}

(async () => {
  let run = null;
  try { run = await main(); }
  catch (e) {
    if (e instanceof Fatal) report('ERROR', '', '', '', e.message);
    else { console.error((e && e.stack) || e); process.exitCode = 2; }
  }
  for (const r of results) if (!(OPT.quiet && r.level === 'INFO')) console.log(r.line);
  const scope = !run ? 'nothing checked' : `checked ${plural(run.unique, 'unique address', 'unique addresses')}: ${plural(run.byKind.audio, 'audio file', 'audio files')}, ` +
    `${plural(run.byKind.clip, 'lesson clip', 'lesson clips')}, ${plural(run.byKind.link, 'other link', 'other links')}` +
    `${run.notChecked ? `, ${run.notChecked} of them not tried` : ''}; ` +
    (run.lessons != null ? `content.js + ${plural(run.lessons, 'lesson', 'lessons')} in ${ROOT}` : `test list ${OPT.testUrls}`);
  console.log(`\nSUMMARY: ${counts.ERROR} ERROR, ${counts.WARN} WARN, ${counts.INFO} INFO (${scope})`);
  // On GitHub each ERROR / WARN also becomes an annotation, readable on the run page and through the API.
  if (process.env.GITHUB_ACTIONS === 'true') {
    const esc = s => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
    for (const r of results) if (r.level !== 'INFO') console.log(`::${r.level === 'ERROR' ? 'error' : 'warning'} title=link-check::${esc(r.line.slice(6))}`);
    console.log(`::notice title=link-check summary::${esc(`${counts.ERROR} ERROR, ${counts.WARN} WARN, ${counts.INFO} INFO (${scope})`)}`);
  }
  if (counts.ERROR > 0 && !process.exitCode) process.exitCode = 1;
  setTimeout(() => process.exit(), 1000).unref();                  // idle keep-alive sockets must not hold the job open
})();
