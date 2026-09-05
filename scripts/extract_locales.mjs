#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const i18nPath = path.join(root, 'js', 'i18n.js');
const outDir = path.join(root, 'i18n', 'locales');

const code = fs.readFileSync(i18nPath, 'utf8');
const start = code.indexOf('var T = {');
const end = code.indexOf('\n  function resolveLang()');
const objectLiteral = code.slice(start + 'var T = '.length, end).trim().replace(/;\s*$/, '');

const T = Function('"use strict"; return (' + objectLiteral + ');')();

fs.mkdirSync(outDir, { recursive: true });
for (const [lang, data] of Object.entries(T)) {
  fs.writeFileSync(
    path.join(outDir, `${lang}.json`),
    JSON.stringify(data, null, 2) + '\n'
  );
}
console.log('Extracted:', Object.keys(T).sort().join(', '));
