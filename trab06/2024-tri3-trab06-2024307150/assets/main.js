document.querySelectorAll("[data-folder]").forEach(el => {
    const total = el.dataset.total
    const folder = el.dataset.folder
    let html = ''
    for (let i = 1; i <= total; i++) {
      html += `
        <div>
          <img src="imgs/${folder}/${folder}(${i}).jpg">
        </div>    
      `
    }
    el.innerHTML = html
  })
  

const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')
const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('.gallery img')

let nextImg = null, prevImg = null;

galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close()
})


imgs.forEach(img => {
    img.addEventListener('click', () => {
      galleryContent.innerHTML = `<img src="${img.src}">`
      galleryImageModal.showModal()
    })
  })
  

imgs.forEach(img => {
    img.addEventListener('click', () => {
        nextImg = getNextImage(img);
        prevImg = getPrevImage(img);
        galleryContent.innerHTML = `<img src="${img.src}">`
        galleryImageModal.showModal()
    })
})
const galleryBtprev = galleryImageModal.querySelector('.bt-prev')
galleryBtprev.addEventListener('click', () => {
    if (prevImg) {
        galleryContent.innerHTML = `<img src="${prevImg.src}">`;
        prevImg = getPrevImage(prevImg);  
    }
});
const galleryBtNext = galleryImageModal.querySelector('.bt-next')
galleryBtNext.addEventListener('click', () => {
    if (nextImg) {
        galleryContent.innerHTML = `<img src="${nextImg.src}">`;
        nextImg = getNextImage(nextImg);  
    }
});
function getNextImage(img) {
    return img.parentNode.nextElementSibling
        ? img.parentNode.nextElementSibling.querySelector('img')
        : imgs[0];
}
function getPrevImage(img) {
    return img.parentNode.previousElementSibling
        ? img.parentNode.previousElementSibling.querySelector('img')
        : imgs[imgs.length - 1];
}
