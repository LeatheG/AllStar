// Loading screen
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1000);
});

// Contact form alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for contacting us!');
  this.reset();
});