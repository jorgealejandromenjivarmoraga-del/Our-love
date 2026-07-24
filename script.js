// Fade-in animation
window.addEventListener('scroll', function() {
  const img = document.querySelector('.left-img');
  const text = document.querySelector('.right-text');
  const collage = document.querySelector('.collage-section');
  if (img.getBoundingClientRect().top < window.innerHeight) {
    img.classList.add('visible');
    text.classList.add('visible');
  }
  if (collage.getBoundingClientRect().top < window.innerHeight) {
    collage.classList.add('visible');
  }
});

// Modal viewer logic
const collageImages = document.querySelectorAll('.
