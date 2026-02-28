document.addEventListener('DOMContentLoaded', function () {

  // 1. Glass Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Initial check in case of refresh midway down page
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
  }

  // 2. Reveal on Scroll Animation
  const reveals = document.querySelectorAll('.reveal');

  function reveal() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 50; // Lowered threshold so hero elements show immediately

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  // Trigger once to show elements already in view (like the Hero section)
  // Wrapped in a slight timeout to ensure DOM paints first for the CSS transition to execute
  setTimeout(() => {
    reveal();
  }, 100);

});
