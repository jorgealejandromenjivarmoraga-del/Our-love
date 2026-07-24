// Fade‑in visibility for January + February
document.addEventListener("DOMContentLoaded", () => {
  // January
  const janImg = document.querySelector(".left-img");
  const janText = document.querySelector(".right-text");
  const janCaption = document.querySelector(".caption");
  const janCollage = document.querySelector(".collage-section");

  if (janImg) janImg.classList.add("visible");
  if (janText) janText.classList.add("visible");
  if (janCaption) janCaption.classList.add("visible");
  if (janCollage) janCollage.classList.add("visible");

  // February
  const febImg = document.querySelector(".right-img");
  const febText = document.querySelector(".left-text");
  const febCollages = document.querySelectorAll(".collage-section");

  if (febImg) febImg.classList.add("visible");
  if (febText) febText.classList.add("visible");
  // mark all collage sections visible (Jan + Feb)
  febCollages.forEach(c => c.classList.add("visible"));
});

// 🖼️ Modal viewer logic
const collageImages = document.querySelectorAll(".collage-container img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close-btn");

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
