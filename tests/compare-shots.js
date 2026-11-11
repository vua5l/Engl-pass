#!/usr/bin/env node
/*
 * Compare two screenshot fingerprint files of tests/screen-check.test.js --shots (before and after a style change):
 *   node tests/compare-shots.js before.json after.json
 * يقارن بصمات صور الشاشات قبل تعديل التنسيق وبعده: يطبع كل شاشة اختلفت أو غابت، ويخرج برمز 1 إن وُجدت.
 */
'use strict';
const fs = require('fs');
const [a, b] = process.argv.slice(2);
if (!a || !b) { console.error('usage: node tests/compare-shots.js before.json after.json'); process.exit(2); }
const A = JSON.parse(fs.readFileSync(a, 'utf8')), B = JSON.parse(fs.readFileSync(b, 'utf8'));
const keys = [...new Set(Object.keys(A).concat(Object.keys(B)))];
const diff = keys.filter(k => A[k] !== B[k]);
diff.forEach(k => console.log((k in A ? (k in B ? 'DIFFERENT ' : 'ONLY BEFORE ') : 'ONLY AFTER ') + k));
console.log(`\nSUMMARY: ${keys.length - diff.length} of ${keys.length} screens identical, ${diff.length} different`);
process.exitCode = diff.length ? 1 : 0;
