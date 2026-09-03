// Scroll progress bar
const progressBar = document.getElementById('progressBar');
const navbar = document.getElementById('navbar');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
  navbar.classList.toggle('scrolled', scrollTop > 20);
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reveal-on-scroll for sections
const revealTargets = document.querySelectorAll(
  '.about-text, .about-stats, .timeline-item, .project-card, .skill-card, .pub-item, .achieve-item, .edu-card, .section-contact .contact-links'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach(el => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
