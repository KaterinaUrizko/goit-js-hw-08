import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imageContainer = document.querySelector('.gallery')
 
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(images) {
    
    return images.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original} onclick="return false">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;

    }).join('');
}
imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
