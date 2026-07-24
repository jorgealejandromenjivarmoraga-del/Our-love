document.addEventListener("DOMContentLoaded", function() {
  const img = document.querySelector(".left-img");
  const text = document.querySelector(".right-text");
  const caption = document.querySelector(".caption");
  const collage = document.querySelector(".collage-section");

  if (img) img.classList.add("visible");
  if (text) text.classList.add("visible");
  if (caption) caption.classList.add("visible");
  if (collage) collage.classList.add("visible");
});
