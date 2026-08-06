/* Theme boot — default dark, no flash */
(function () {
  try {
    var t = localStorage.getItem('vevora-theme');
    document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
