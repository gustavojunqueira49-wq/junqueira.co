document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.classList.toggle('is-active', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.getElementById('header');
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 12 ? '0 8px 24px rgba(0,0,0,0.35)' : 'none';
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});
