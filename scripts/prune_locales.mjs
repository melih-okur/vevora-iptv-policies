#!/usr/bin/env node
/**
 * Removes children/age sections and bundle ID references from all locale files.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '..', 'i18n', 'locales');

function scrubContactLines(lines) {
  if (!Array.isArray(lines)) return lines;
  return lines.map(function (line) {
    if (typeof line !== 'string') return line;
    return line
      .replace(/\s*\(com\.vevora\.iptv\)/gi, '')
      .replace(/com\.vevora\.iptv/gi, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  });
}

for (const file of fs.readdirSync(localesDir).filter((f) => f.endsWith('.json'))) {
  const p = path.join(localesDir, file);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  if (data.common && 'bundleId' in data.common) delete data.common.bundleId;

  if (data.privacy?.sections?.children) delete data.privacy.sections.children;
  if (data.terms?.sections?.age) delete data.terms.sections.age;

  if (data.privacy?.sections?.contact?.body) {
    data.privacy.sections.contact.body = scrubContactLines(data.privacy.sections.contact.body);
  }
  if (data.terms?.sections?.contact?.body) {
    data.terms.sections.contact.body = scrubContactLines(data.terms.sections.contact.body);
  }

  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
  console.log('Updated', file.replace('.json', ''));
}
