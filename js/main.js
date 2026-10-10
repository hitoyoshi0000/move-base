// Mobile menu toggle (shown below 960px)
(function () {
  var DESKTOP_MIN = 960;
  var burger = document.querySelector('.header__burger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
  }

  burger.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= DESKTOP_MIN) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
