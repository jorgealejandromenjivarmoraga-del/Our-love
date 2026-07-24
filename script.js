// Make everything visible immediately on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.left-img').classList.add('visible');
  document.querySelector('.right-text').classList.add('visible');
  document.querySelector('.caption').classList.add('visible');
  document.querySelector('.collage-section').classList.add('visible');
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
