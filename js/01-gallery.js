import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
let lightboxInstance = null; // Змінна для зберігання інстанції модального вікна

function createGalleryItems() {
  return galleryItems
    .map(item => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `;
    })
    .join('');
}

function renderGallery() {
  const galleryItemsHTML = createGalleryItems();
  gallery.innerHTML = galleryItemsHTML;
}

renderGallery();

// Обробник подій для відкриття модального вікна
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const largeImageUrl = e.target.dataset.source;

    lightboxInstance = basicLightbox.create(`
      <img src="${largeImageUrl}" width="800" height="600">
    `);

    lightboxInstance.show();

    // Додамо обробник події натискання клавіші Escape тільки після відкриття модального вікна
    document.addEventListener('keydown', handleKeyPress);
  }
});

// Обробник події натискання клавіші Escape
function handleKeyPress(e) {
  if (e.key === 'Escape') {
    lightboxInstance.close(); // Закриття модального вікна за допомогою методу close
    document.removeEventListener('keydown', handleKeyPress); // Прибирання обробника події
  }
}
