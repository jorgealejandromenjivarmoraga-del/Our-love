// Fade‑in visibility for all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .collage-section");
  sections.forEach(sec => sec.classList.add("visible"));
});

// 🖼️ Modal viewer logic
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close-btn");

// Include all collage and flip‑card images
const collageImages = document.querySelectorAll(
  ".collage-container img, .card-front img, .card-back img"
);

// Open viewer on click
collageImages.forEach(image => {
  image.addEventListener("click", () => {
    viewerImg.src = image.src;
    viewer.classList.add("active");
  });
});

// Close viewer on X
closeBtn.addEventListener("click", () => {
  viewer.classList.remove("active");
  viewerImg.src = "";
});

// Close viewer when clicking outside image
viewer.addEventListener("click", e => {
  if (e.target === viewer) {
    viewer.classList.remove("active");
    viewerImg.src = "";
  }
});
