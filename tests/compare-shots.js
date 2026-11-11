#!/usr/bin/env node
/*
 * Compare the screenshot fingerprints of two runs of tests/screen-check.test.js --shots (before and after a style
 * change):
 *
 *   node tests/compare-shots.js before.json after.json [beforePngDir afterPngDir] [--noise 100]
 *
 * Without image folders, every screen whose fingerprint changed is listed. With them (runs made with SHOTS_PNG_DIR),
 * the two images of each changed screen are compared pixel by pixel: a difference of at most --noise pixels (100 by
 * default) is noise, because two runs of the same site already differ by a few dozen anti-aliased pixels on a button
 * edge or a card border (flashcards and grammar items), and a real style change moves far more (the lost highlight of
 * the writing model in November 2026 changed about 9,000). Exit code 1 when a real difference or a missing screen is
 * found. Plain Node, no packages: the PNG reader below handles Chrome's 8-bit RGB and RGBA screenshots.
 *
 * يقارن بصمات صور الشاشات قبل تعديل التنسيق وبعده، ومع مجلدي الصور يفرّق بين اختلاف حقيقي وفرق حواف صغير.
 */
'use strict';
const fs = require('fs'), path = require('path'), zlib = require('zlib');

const args = process.argv.slice(2); let noise = 100;
const pos = [];
for (let i = 0; i < args.length; i++) { if (args[i] === '--noise') noise = Number(args[++i]); else pos.push(args[i]); }
const [a, b, da, db] = pos;
if (!a || !b || (da && !db) || !(noise >= 0)) { console.error('usage: node tests/compare-shots.js before.json after.json [beforePngDir afterPngDir] [--noise 100]'); process.exit(2); }

/* PNG → { w, h, px: Buffer of RGBA }. Only what Chrome writes: bit depth 8, colour type 2 or 6, not interlaced. */
function readPng(file) {
  const buf = fs.readFileSync(file);
  let p = 8, w = 0, h = 0, type = 0;
  const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), name = buf.toString('ascii', p + 4, p + 8), data = buf.subarray(p + 8, p + 8 + len);
    if (name === 'IHDR') {
      w = data.readUInt32BE(0); h = data.readUInt32BE(4); type = data[9];
      if (data[8] !== 8 || (type !== 2 && type !== 6) || data[12] !== 0) throw new Error(file + ': unsupported PNG (depth ' + data[8] + ', type ' + type + ')');
    } else if (name === 'IDAT') idat.push(data);
    else if (name === 'IEND') break;
    p += 12 + len;
  }
  const bpp = type === 6 ? 4 : 3, stride = w * bpp, raw = zlib.inflateSync(Buffer.concat(idat)), px = Buffer.alloc(w * h * 4);
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], line = Buffer.from(raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)));
    for (let x = 0; x < stride; x++) {
      const l = x >= bpp ? line[x - bpp] : 0, u = prev[x], ul = x >= bpp ? prev[x - bpp] : 0;
      let v = line[x];
      if (f === 1) v += l; else if (f === 2) v += u; else if (f === 3) v += (l + u) >> 1;
      else if (f === 4) { const pa = Math.abs(u - ul), pb = Math.abs(l - ul), pc = Math.abs(l + u - 2 * ul); v += (pa <= pb && pa <= pc) ? l : (pb <= pc ? u : ul); }
      line[x] = v & 255;
    }
    for (let x = 0; x < w; x++) for (let c = 0; c < 4; c++) px[(y * w + x) * 4 + c] = c < bpp ? line[x * bpp + c] : 255;
    prev = line;
  }
  return { w, h, px };
}
/* Number of differing pixels and their bounding box, or null when the sizes differ. */
function pixelDiff(f1, f2) {
  const A = readPng(f1), B = readPng(f2);
  if (A.w !== B.w || A.h !== B.h) return null;
  let n = 0, x0 = A.w, y0 = A.h, x1 = -1, y1 = -1;
  for (let i = 0; i < A.px.length; i += 4) {
    if (A.px[i] !== B.px[i] || A.px[i + 1] !== B.px[i + 1] || A.px[i + 2] !== B.px[i + 2]) {
      n++; const k = i / 4, x = k % A.w, y = (k - x) / A.w;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }
  return { n, box: n ? [x0, y0, x1, y1] : null };
}

const A = JSON.parse(fs.readFileSync(a, 'utf8')), B = JSON.parse(fs.readFileSync(b, 'utf8'));
const keys = [...new Set(Object.keys(A).concat(Object.keys(B)))];
let real = 0, noisy = 0;
for (const k of keys) {
  if (A[k] === B[k]) continue;
  if (!(k in A) || !(k in B)) { real++; console.log((k in A ? 'ONLY BEFORE ' : 'ONLY AFTER ') + k); continue; }
  if (!da) { real++; console.log('DIFFERENT ' + k); continue; }
  const name = k.replace(/[^\w.-]+/g, '_') + '.png', f1 = path.join(da, name), f2 = path.join(db, name);
  if (!fs.existsSync(f1) || !fs.existsSync(f2)) { real++; console.log('DIFFERENT ' + k + ' (no image to compare)'); continue; }
  const d = pixelDiff(f1, f2);
  if (d && d.n <= noise) { noisy++; console.log('NOISE ' + k + ' (' + d.n + ' pixels in ' + d.box.join(',') + ')'); }
  else { real++; console.log('DIFFERENT ' + k + (d ? ' (' + d.n + ' pixels in ' + d.box.join(',') + ')' : ' (the size changed)')); }
}
console.log(`\nSUMMARY: ${keys.length - real - noisy} of ${keys.length} screens identical, ${noisy} with noise only (at most ${noise} pixels), ${real} different`);
process.exitCode = real ? 1 : 0;
