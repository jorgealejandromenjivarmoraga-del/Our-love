// Fade-in animation
window.addEventListener('scroll', function() {
  const img = document.querySelector('.left-img');
  const text = document.querySelector('.right-text');
  const collage = document.querySelector('.collage-section');
  const rectImg = img.getBoundingClientRect();
  const rectCollage = collage.getBoundingClientRect();

  if (rectImg.top < window.innerHeight) {
    img.classList.add('visible');
    text.classList.add('visible');
  }
  if (rectCollage.top < window.innerHeight) {
    collage.classList.add('visible');
  }
});

// Modal viewer logic
const collageImages = document.querySelectorAll('.collage-container img');
const viewer = document.getElementById('
