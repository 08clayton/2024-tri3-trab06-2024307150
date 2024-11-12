document.querySelectorAll("[data-folder]").forEach((el) => {
  const total = el.dataset.total;
  const folder = el.dataset.folder;
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `
        <div class="gallery-item">
          <img src="imgs/${folder}/${folder}(${i}).jpg" alt="Imagem ${i}">
        </div>    
      `;
  }
  el.innerHTML = html;
});

const galleryImageModal = document.querySelector(".gallery-image-modal");
const galleryBtClose = galleryImageModal.querySelector(".bt-close");
const galleryContent = galleryImageModal.querySelector(".content");
const imgs = document.querySelectorAll(".gallery img");

galleryBtClose.addEventListener("click", () => {
  galleryImageModal.close();
});


imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    galleryContent.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    galleryImageModal.showModal();

    galleryImageModal.dataset.index = index;
  });
});

const galleryBtNext = galleryImageModal.querySelector(".bt-next");
galleryBtNext.addEventListener("click", () => {
  const index = parseInt(galleryImageModal.dataset.index);
  const nextIndex = (index + 1) % imgs.length; 
  galleryImageModal.dataset.index = nextIndex;

  galleryContent.innerHTML = `<img src="${imgs[nextIndex].src}" alt="${imgs[nextIndex].alt}">`;
});


const galleryBtPrev = galleryImageModal.querySelector(".bt-prev");
galleryBtPrev.addEventListener("click", () => {
  const index = parseInt(galleryImageModal.dataset.index);
  const prevIndex = (index - 1 + imgs.length) % imgs.length;
  galleryImageModal.dataset.index = prevIndex;

  galleryContent.innerHTML = `<img src="${imgs[prevIndex].src}" alt="${imgs[prevIndex].alt}">`;
});
