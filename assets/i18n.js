/* Snoutlas — minimal RU/EN switch. No framework.
   The initial <html lang> is set by an inline script in <head>
   (avoids a flash); this file wires the toggle buttons + persists. */
(function () {
  var KEY = 'snoutlas-lang';

  function apply(lang) {
    if (lang !== 'ru' && lang !== 'en') lang = 'en';
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-lang-btn') === lang;
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      btns[i].classList.toggle('is-active', on);
    }
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document && !(t.hasAttribute && t.hasAttribute('data-lang-btn'))) t = t.parentNode;
    if (t && t.hasAttribute && t.hasAttribute('data-lang-btn')) {
      e.preventDefault();
      apply(t.getAttribute('data-lang-btn'));
    }
  });

  apply(document.documentElement.lang || 'en');
})();
