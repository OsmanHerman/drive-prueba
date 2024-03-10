const images1HTML = document.querySelectorAll('.images-1-js');
const images2HTML = document.querySelectorAll('.images-2-js');
const btnBack1 = document.querySelectorAll('.btn-back-1');
const btnBack2 = document.querySelectorAll('.btn-back-2');


let imgTouch1 = null; //creación de referencia de img
let imgTouch2 = null; //creación de referencia de img

function observarImg1(event){
    imgTouch1 = event.currentTarget; //Guarda la img que se le hiz touch
    imgTouch1.classList.add('images-js');
    imgTouch1.children[0].style.opacity = "1";
}

function observarImg2(event){
    imgTouch2 = event.currentTarget; //Guarda la img que se le hiz touch
    imgTouch2.classList.add('images-js');
    imgTouch2.children[0].style.opacity = "1";
}

function closeObservarImg1(event) {
    event.stopPropagation(); // Detiene la propagación del evento para que no afecte a la img
    if (imgTouch1) {
        imgTouch1.classList.remove('images-js');
        imgTouch1.children[0].style.opacity = "0"; // Oculta el botón cuando la img se reduce
        imgTouch1 = null; // Restablece la referencia a la img agrandada
    }
}

function closeObservarImg2(event) {
    event.stopPropagation(); // Detiene la propagación del evento para que no afecte a la img
    if (imgTouch2) {
        imgTouch2.classList.remove('images-js');
        imgTouch2.children[0].style.opacity = "0"; // Oculta el botón cuando la img se reduce
        imgTouch2 = null; // Restablece la referencia a la img agrandada
    }
}

images1HTML.forEach(images_1 => {
    images_1.addEventListener('touchstart', observarImg1);
});

images2HTML.forEach(images_2 => {
    images_2.addEventListener('touchstart', observarImg2);
});

btnBack1.forEach(btn_back1 => {
    btn_back1.addEventListener('touchstart', closeObservarImg1);
});

btnBack2.forEach(btn_back2 => {
    btn_back2.addEventListener('touchstart', closeObservarImg2);
});