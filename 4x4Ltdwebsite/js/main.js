document.addEventListener("DOMContentLoaded", () => {

  /* ===== Scroll Animations ===== */
  const faders = document.querySelectorAll('.fade-in');

  if (faders.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // improve performance
        }
      });
    }, { threshold: 0.2 });

    faders.forEach(el => observer.observe(el));
  }

  /* ===== Form Handling ===== */
  const form = document.getElementById('quoteForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! We will contact you shortly.');
      this.reset();
    });
  }

});

// Scroll Animations for Why Choose Us
const fadeSections = document.querySelectorAll('.fade-in-section');
const fadeItems = document.querySelectorAll('.fade-in-item');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => fadeObserver.observe(section));
fadeItems.forEach(item => fadeObserver.observe(item));
