
// 
// Lógica para abrir e fechar o modal com a imagem
// 

const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')
const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('main img')

galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close()
})

imgs.forEach(img => {
    img.addEventListener('click', () => {
        galleryContent.innerHTML = `<img src="${img.src}">`
        galleryImageModal.showModal()
    })
})



const galleryBtprev = galleryImageModal.querySelector('.bt-prev')
const galleryBtNext = galleryImageModal.querySelector('.bt-next')
let nextImg, prevImg = null

galleryBtNext.addEventListener('click', () => {
    galleryImageModal.close()
    nextImg.click()
})

galleryBtprev.addEventListener('click', () => {
    galleryImageModal.close()
    prevImg.click()
})

galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close()
})

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

imgs.forEach(img => {
    img.addEventListener('click', () => {
        nextImg = getNextImage(img);
        prevImg = getPrevImage(img);
        galleryContent.innerHTML = `<img src="${img.src}">`;
        galleryImageModal.showModal();
    });
});