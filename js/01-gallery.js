import { galleryItems } from "./gallery-items.js";

// Change code below this line

const container = document.querySelector(".gallery");

function createMurcup(arr) {
  console.log(arr);
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`
    )
    .join("");
}
container.insertAdjacentHTML("beforeend", createMurcup(galleryItems));
container.addEventListener("click", handlerClick);
function handlerClick(evt) {
  evt.preventDefault();
  const selectedImg = evt.target.dataset.source;

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src= ${selectedImg} width="800" height="600">
`);
  window.addEventListener("keydown", handlerKey);
  function handlerKey(evt) {
    if (evt.code === "Escape") {
      console.log("esc");
      instance.close();
    }
  }
  instance.show();
}
