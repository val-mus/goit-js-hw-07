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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(" ");
}

refs.galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPressClosingModal);
      },
    }
  );

  function onEscKeyPressClosingModal(event) {
    if (event.code === "Escape") {
      window.removeEventListener("keydown", onEscKeyPressClosingModal);
      modal.close();
    }
  }

  modal.show();
}
