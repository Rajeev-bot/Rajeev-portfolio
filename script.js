// script.js

// Smooth scroll for nav buttons
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate tiles on scroll
const tiles = document.querySelectorAll('.tile');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

tiles.forEach(tile => {
  observer.observe(tile);
});
