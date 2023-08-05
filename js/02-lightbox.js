import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");

function createMurcup(arr) {
  console.log(arr);
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}"  alt="${description}" />
      </a>
    </li>`
    )
    .join("");
}
container.insertAdjacentHTML("beforeend", createMurcup(galleryItems));
// console.log(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
