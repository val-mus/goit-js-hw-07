import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

refs.galleryContainer.insertAdjacentHTML(
  "beforeend",
  galleryCreateMarkup(galleryItems)
);

function galleryCreateMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
             </a>
            </div>`;
    })
    .join(" ");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  docClose: true,
  uniqueImages: true,
});
