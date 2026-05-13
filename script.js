// West Beach Company - main script

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Product filter tabs
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.product-card');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      cards.forEach(c => {
        const show = cat === 'all' || c.dataset.cat === cat;
        c.style.display = show ? 'flex' : 'none';
      });
    });
  });

  // Contact form (front-end only)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      msg.classList.add('show');
      msg.textContent = '✓ تم إرسال طلبك بنجاح. سنتواصل معك قريباً.';
      form.reset();
      setTimeout(() => msg.classList.remove('show'), 5000);
    });
  }

  // Fade-in observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('fade-in');
        observer.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.feature-card, .product-card, .partner').forEach(el => observer.observe(el));
});
