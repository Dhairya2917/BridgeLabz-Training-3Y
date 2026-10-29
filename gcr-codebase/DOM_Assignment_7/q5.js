// Q5: Open a large image preview; clicks outside the modal content close it.
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const previewImage = document.querySelector("#previewImage");
gallery.addEventListener("click", event => {
  const image = event.target.closest("img");
  if (!image) return;
  previewImage.src = image.src;
  previewImage.alt = image.alt;
  modal.classList.add("open");
});
modal.addEventListener("click", () => modal.classList.remove("open"));
modalContent.addEventListener("click", event => event.stopPropagation());
document.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.classList.remove("open");
});