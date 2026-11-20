// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
})();

// Sort events into upcoming / past using today's date, so the site never
// shows stale "upcoming" events even if nobody has edited it in a while.
(function () {
  var t = new Date();
  var today = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
  document.querySelectorAll('[data-upcoming-only]').forEach(function (list) {
    var limit = parseInt(list.getAttribute('data-limit') || '0', 10);
    var shown = 0;
    list.querySelectorAll('.event').forEach(function (ev) {
      var keep = ev.getAttribute('data-date') >= today && (!limit || shown < limit);
      if (keep) shown++; else ev.remove();
    });
    if (!shown) { var n = list.nextElementSibling; if (n && n.classList.contains('empty-note')) n.hidden = false; }
  });
  document.querySelectorAll('[data-past-only]').forEach(function (list) {
    var count = 0;
    list.querySelectorAll('.event').forEach(function (ev) {
      if (ev.getAttribute('data-date') < today) count++; else ev.remove();
    });
    var h = document.querySelector('.past-heading');
    if (h) h.hidden = count === 0;
  });
})();

// Dark mode toggle. Remembers the visitor's choice; otherwise follows their device setting.
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var root = document.documentElement;
  function label() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    btn.setAttribute('title', 'Switch to ' + next + ' mode');
  }
  label();
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
})();
