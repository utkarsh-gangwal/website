/* ═══════════════════════════════════════════
   main.js — Personal Academic Website
   ═══════════════════════════════════════════ */


/* ── READ MORE TOGGLE ── */
function toggleRead(id, btn) {
  var el = document.getElementById(id);
  var expanded = el.classList.toggle('expanded');
  btn.textContent = expanded ? 'Show less ↑' : 'Read more ↓';
}


/* ── THEME TOGGLE ── */
(function () {
  var dark = false;
  var btn  = document.getElementById('themeBtn');
  var lbl  = document.getElementById('themeLabel');

  btn.addEventListener('click', function () {
    dark = !dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
    lbl.textContent = dark ? 'Light' : 'Dark';
  });
})();


/* ── LEFT-COL HEIGHT SYNC ── */
/* Keeps the left About column the same height as the right column
   so the centred profile card sits mid-way vertically on desktop. */
(function () {
  var leftCol  = document.getElementById('leftCol');
  var rightCol = document.getElementById('rightCol');
  if (!leftCol || !rightCol) return;

  function sync() {
    /* Only apply on desktop (grid is two-column above 768 px) */
    if (window.innerWidth > 768) {
      leftCol.style.minHeight = rightCol.offsetHeight + 'px';
    } else {
      leftCol.style.minHeight = '';
    }
  }

  sync();
  window.addEventListener('resize', sync);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(sync);
  }
})();
