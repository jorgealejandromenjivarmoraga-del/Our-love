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
const collageImages = document.querySelectorAll('.collage-container img');
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const closeBtn = document.querySelector('.close-btn');

collageImages.forEach(img => {
  img.addEventListener('click', () => {
    viewerImg.src = img.src;
    viewer.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  viewer.classList.remove('active');
  viewerImg.src = '';
});

viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {
    viewer.classList.remove('active');
    viewerImg.src = '';
  }
});
