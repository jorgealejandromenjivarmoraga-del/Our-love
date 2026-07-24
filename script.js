// Fade‑in visibility
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".left-img");
  const text = document.querySelector(".right-text");
  const caption = document.querySelector(".caption");
  const collage = document.querySelector(".collage-section");

  if (img) img.classList.add("visible");
  if (text) text.classList.add("visible");
  if (caption) caption.classList.add("visible");
  if (collage) collage.classList.add("visible");
});

// 🖼️ Image viewer logic
const collageImages = document.querySelectorAll(".collage-container img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close-btn");

// Open viewer when clicking an image
collageImages.forEach(image => {
  image.addEventListener("click", () => {
    viewerImg.src = image.src;
    viewer.classList.add("active");
  });
});

// Close viewer when clicking X or outside the image
closeBtn.addEventListener("click", () => {
  viewer.classList.remove("active");
  viewerImg.src = "";
});

viewer.addEventListener("click", e => {
  if (e.target === viewer) {
    viewer.classList.remove("active");
    viewerImg.src = "";
  }
});
