import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let lightboxInstance = null; // Змінна для інстанції модального вікна

// Створення розмітки
const galleryItemsHTML = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);

// Обробник подій для відкриття модального вікна

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const largeImageUrl = e.target.dataset.source;
    lightboxInstance = basicLightbox.create(
      `<img src="${largeImageUrl}" width="800" height="600">`
    );
    lightboxInstance.show();
    gallery.addEventListener('keydown', handleKeyPress);
  }
});

// Обробник події натискання клавіші Escape

function handleKeyPress(e) {
  if (e.key === 'Escape') {
    lightboxInstance.close();
    gallery.removeEventListener('keydonw', handleKeyPress);
  }
}
