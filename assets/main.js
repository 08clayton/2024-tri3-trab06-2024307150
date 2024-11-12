document.querySelectorAll("[data-folder]").forEach((el) => {
  const { total, folder } = el.dataset;
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `<div class="gallery-item">
               <img src="imgs/${folder}/${folder}(${i}).jpg" alt="Imagem ${i}">
             </div>`;
  }
  el.innerHTML = html;
});

const galleryImageModal = document.querySelector(".gallery-image-modal");
const galleryContent = galleryImageModal.querySelector(".content");
const imgs = document.querySelectorAll(".gallery img");

galleryImageModal.querySelector(".bt-close").addEventListener("click", () => galleryImageModal.close());

imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    galleryContent.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    galleryImageModal.showModal();
    galleryImageModal.dataset.index = index;
  });
});

const navigateImage = (direction) => {
  const index = parseInt(galleryImageModal.dataset.index);
  const newIndex = (index + direction + imgs.length) % imgs.length;
  galleryImageModal.dataset.index = newIndex;
  galleryContent.innerHTML = `<img src="${imgs[newIndex].src}" alt="${imgs[newIndex].alt}">`;
};
galleryImageModal.querySelector(".bt-next").addEventListener("click", () => navigateImage(1));
galleryImageModal.querySelector(".bt-prev").addEventListener("click", () => navigateImage(-1));
