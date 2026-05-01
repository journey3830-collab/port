const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("figcaption");
const closeButtons = lightbox?.querySelectorAll(".lightbox-close, .lightbox-backdrop") ?? [];

function closeLightbox() {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".image-open").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    const fullImage = button.dataset.full;
    const title = button.dataset.title || "프로젝트 이미지";

    lightboxImage.src = fullImage;
    lightboxImage.alt = title;
    lightboxCaption.textContent = title;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
