document.addEventListener('DOMContentLoaded', function () {
  // Welcome alert
  alert('Welcome to my portfolio!');
  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});