// Run once the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.left-img');
  const text = document.querySelector('.right-text');
  const caption = document.querySelector('.caption');
  const collage = document.querySelector('.collage-section');

  // Add visible classes immediately so nothing stays hidden
  if (img) img.classList.add('visible');
  if (text) text.classList.add('visible');
  if (caption) caption.classList.add('visible');
  if (collage) collage.classList.add('visible');
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
