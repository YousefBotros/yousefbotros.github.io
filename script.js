// Mobile menu + simple email form handler
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click (mobile)
    nav.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!nav.contains(target) && !toggle.contains(target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Contact form -> opens mail client (no backend needed)
  const form = document.getElementById('emailForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value?.trim() || 'Someone';
      const msg = document.getElementById('message')?.value?.trim() || '';
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(msg);
      window.location.href = `mailto:yousefbotros212@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();