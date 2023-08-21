import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox', function () {
  lightbox.items.captionEl.style.display = 'block';
});

lightbox.on('close.simplelightbox', function () {
  lightbox.items.captionEl.style.display = 'none';
});
