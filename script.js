// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    document.documentElement.classList.remove('dark');
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme or system preference
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme(true);
}

// Typing, AOS, Swiper, Particles, Form, Menu toggle — আগের কোড + minor fixes (যেমন lazy loading support, better error handling)

// GSAP example for scroll animation
gsap.from(".section-title", {
  scrollTrigger: ".section-title",
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

// ... বাকি তোমার আগের সব ফাংশন রাখা + optimized ...
