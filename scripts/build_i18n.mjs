#!/usr/bin/env node
/**
 * Builds js/i18n.js from i18n/meta.json and i18n/locales/*.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const meta = JSON.parse(fs.readFileSync(path.join(root, 'i18n', 'meta.json'), 'utf8'));
const localesDir = path.join(root, 'i18n', 'locales');

const T = {};
for (const lang of meta.langs) {
  const p = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(p)) {
    console.error('Missing locale:', lang);
    process.exit(1);
  }
  T[lang] = JSON.parse(fs.readFileSync(p, 'utf8'));
}

const runtime = `/* Vevora IPTV Legal Site — i18n (generated) */
(function () {
  'use strict';

  var LANGS = ${JSON.stringify(meta.langs)};
  var RTL_LANGS = ${JSON.stringify(meta.rtlLangs)};
  var THEME_KEY = 'vevora-theme';
  var BASE_PATH = '/vevora-iptv-policies';

  var LANG_LABELS = ${JSON.stringify(meta.labels, null, 2)};

  var THEME_LABELS = ${JSON.stringify(meta.themeLabels, null, 2)};

  var T = ${JSON.stringify(T, null, 2)};

  function resolveBrowserLang() {
    var candidates = [];
    if (navigator.languages) {
      for (var i = 0; i < navigator.languages.length; i++) candidates.push(navigator.languages[i]);
    }
    if (navigator.language) candidates.push(navigator.language);
    else if (navigator.userLanguage) candidates.push(navigator.userLanguage);
    for (var j = 0; j < candidates.length; j++) {
      var tag = String(candidates[j]).toLowerCase().replace(/_/g, '-');
      var base = tag.split('-')[0];
      if (LANGS.indexOf(base) !== -1) return base;
    }
    return null;
  }

  function resolveLang() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get('lang');
    if (q && LANGS.indexOf(q) !== -1) return q;
    var browser = resolveBrowserLang();
    if (browser) return browser;
    return 'en';
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
    var url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
  }

  function t(lang, key) {
    var parts = key.split('.');
    var obj = T[lang] || T.en;
    for (var i = 0; i < parts.length; i++) {
      if (!obj) return key;
      obj = obj[parts[i]];
    }
    return obj !== undefined ? obj : key;
  }

  function applyCommon(lang) {
    document.documentElement.lang = lang;
    document.body.dir = RTL_LANGS.indexOf(lang) !== -1 ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(lang, key);
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = t(lang, key);
      if (typeof val === 'string') el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var val = t(lang, key);
      if (typeof val === 'string') el.setAttribute('title', val);
    });
    var metaLabel = document.getElementById('page-meta-date');
    if (metaLabel) {
      metaLabel.textContent = t(lang, 'common.lastUpdatedLabel') + ': ' + t(lang, 'common.lastUpdatedDate');
    }
  }

  function resolveTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    return 'dark';
  }

  function applyTheme(theme) {
    var value = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', value);
    try { localStorage.setItem(THEME_KEY, value); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', value === 'light' ? '#f5f5f7' : '#000000');
    syncThemeToggle(value);
  }

  function syncThemeToggle(theme) {
    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      var on = btn.getAttribute('data-theme-set') === theme;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function buildThemeToggle(lang) {
    var container = document.getElementById('theme-toggle');
    if (!container) return;
    var labels = THEME_LABELS[lang] || THEME_LABELS.en;
    var theme = resolveTheme();
    container.innerHTML = '';
    ['dark', 'light'].forEach(function (mode) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-theme-set', mode);
      btn.textContent = labels[mode];
      btn.setAttribute('aria-label', labels[mode]);
      btn.setAttribute('aria-pressed', mode === theme ? 'true' : 'false');
      btn.addEventListener('click', function () { applyTheme(mode); });
      container.appendChild(btn);
    });
  }

  function buildLangSwitcher(lang) {
    var container = document.getElementById('lang-switcher');
    if (!container) return;
    container.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'lang-select-wrap';
    var label = document.createElement('label');
    label.className = 'lang-select-label';
    label.setAttribute('for', 'lang-select');
    label.textContent = t(lang, 'common.selectLanguage');
    var select = document.createElement('select');
    select.id = 'lang-select';
    select.className = 'lang-select';
    select.setAttribute('aria-label', t(lang, 'common.selectLanguage'));
    LANGS.forEach(function (code) {
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = LANG_LABELS[code];
      if (code === lang) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      if (select.value && select.value !== lang) setLang(select.value);
    });
    wrap.appendChild(label);
    wrap.appendChild(select);
    container.appendChild(wrap);
  }

  function renderLegalSections(lang, pageKey, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var page = T[lang][pageKey] || T.en[pageKey];
    var order = pageKey === 'privacy'
      ? ["about", "data", "icloud", "tracking", "use", "sharing", "retention", "security", "choices", "purchases", "thirdparty", "updates", "contact"]
      : ["agreement", "player", "license", "profiles", "content", "subscriptions", "rules", "ownership", "nowarranty", "responsibility", "stop", "contact"];
    container.innerHTML = '';
    order.forEach(function (key) {
      var sec = page.sections[key];
      if (!sec) return;
      var section = document.createElement('section');
      var h2 = document.createElement('h2');
      h2.textContent = sec.title;
      section.appendChild(h2);
      (sec.body || sec.paragraphs || []).forEach(function (p) {
        var para = document.createElement('p');
        para.textContent = p;
        section.appendChild(para);
      });
      container.appendChild(section);
    });
  }

  function fixNavHrefs() {
    if (window.location.pathname.indexOf(BASE_PATH) === -1) return;
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|#|javascript:)/i.test(href)) return;
      if (href.indexOf(BASE_PATH) === 0) return;
      if (href.charAt(0) === '/') {
        a.setAttribute('href', BASE_PATH + href);
      }
    });
  }

  function preserveLangInLinks(lang) {
    var params = new URLSearchParams(window.location.search);
    if (!params.has('lang')) return;
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|#|javascript:)/i.test(href)) return;
      try {
        var url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        url.searchParams.set('lang', lang);
        a.setAttribute('href', url.pathname + url.search + url.hash);
      } catch (e) {}
    });
  }

  function renderSupportTopics(lang) {
    var container = document.getElementById('support-topics');
    if (container) {
      var topics = t(lang, 'support.topics');
      var title = t(lang, 'support.topicsTitle');
      container.innerHTML = '';
      if (typeof title === 'string' && title !== 'support.topicsTitle') {
        var h2 = document.createElement('h2');
        h2.textContent = title;
        container.appendChild(h2);
      }
      if (Array.isArray(topics)) {
        topics.forEach(function (topic) {
          var block = document.createElement('div');
          block.className = 'support-topic';
          var h3 = document.createElement('h3');
          h3.textContent = topic.title;
          block.appendChild(h3);
          var p = document.createElement('p');
          p.textContent = topic.body;
          block.appendChild(p);
          container.appendChild(block);
        });
      }
    }
    var ul = document.getElementById('support-help-list');
    if (ul) {
      var helpTitle = document.querySelector('[data-i18n="support.helpTitle"]');
      var topicsTitle = t(lang, 'support.topicsTitle');
      if (helpTitle && typeof topicsTitle === 'string') helpTitle.textContent = topicsTitle;
      var items = t(lang, 'support.helpItems');
      var topics = t(lang, 'support.topics');
      ul.innerHTML = '';
      if (Array.isArray(items) && items.length) {
        items.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
      } else if (Array.isArray(topics)) {
        topics.forEach(function (topic) {
          var li = document.createElement('li');
          li.textContent = topic.title + ': ' + topic.body;
          ul.appendChild(li);
        });
      }
    }
  }

  function init(page) {
    var lang = resolveLang();
    applyTheme(resolveTheme());
    applyCommon(lang);
    buildThemeToggle(lang);
    buildLangSwitcher(lang);
    var pageTitle = t(lang, page + '.title');
    if (page === 'index') pageTitle = t(lang, 'index.heading');
    else if (page === 'support') pageTitle = t(lang, 'support.title');
    document.title = pageTitle + ' — Vevora IPTV';

    if (page === 'privacy') {
      renderLegalSections(lang, 'privacy', 'legal-sections');
    } else if (page === 'terms') {
      renderLegalSections(lang, 'terms', 'legal-sections');
    } else if (page === 'support') {
      renderSupportTopics(lang);
    }
    fixNavHrefs();
    preserveLangInLinks(lang);
  }

  window.VevoraI18n = { init: init, setLang: setLang, resolveLang: resolveLang, t: t, LANGS: LANGS };
})();
`;

fs.writeFileSync(path.join(root, 'js', 'i18n.js'), runtime);
console.log('Built js/i18n.js with', meta.langs.length, 'locales');
