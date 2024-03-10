const imgHTML = Array.from(document.querySelectorAll('.gallery-img'));
const descriptionHTML = [
    "Texto 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor, bibendum at est id, porttitor eleifend odio. Ut interdum, purus et cursus malesuada, justo dolor bibendum nunc, et dapibus ligula nunc ac justo. Vestibulum eleifend urna sit amet felis efficitur, vel venenatis velit ullamcorper. Suspendisse ullamcorper eros in diam varius, nec venenatis velit ultricies. Vivamus eget ullamcorper dolor. Fusce eu scelerisque libero. Maecenas ut nisl sit amet nisl efficitur hendrerit. Integer commodo felis vel lacinia euismod. Sed rhoncus est et quam venenatis bibendum. Quisque dapibus dolor eu purus ullamcorper, vel auctor nisl tempus. Suspendisse potenti. In hac habitasse platea dictumst. Integer fermentum, arcu vel ultricies fringilla, felis libero cursus metus, nec tincidunt nisl ligula a purus. Vivamus et arcu nec neque viverra fringilla.",

    "Texto 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor, bibendum at est id, porttitor eleifend odio. Ut interdum, purus et cursus malesuada, justo dolor bibendum nunc, et dapibus ligula nunc ac justo. Vestibulum eleifend urna sit amet felis ",

    "Texto 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor, bibendum at est id, porttitor eleifend odio. Ut interdum, purus et cursus malesuada, justo dolor bibendum nunc, et dapibus ligula nunc ac justo. Vestibulum eleifend urna sit amet felis efficitur, vel venenatis velit ullamcorper. Suspendisse ullamcorper eros in diam varius, nec venenatis velit ultricies. Vivamus eget ullamcorper dolor. Fusce eu scelerisque libero. Maecenas ut nila a purus. Vivamus et arcu nec neque viverra fringilla.",

    "Texto 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor, bibendum at est id, porttitor eleifend odio. Ut interdum, purus et cursus malesuada, justo dolor bibendum nunc, et dapibus ligula nunc ac justo. Vestibulum eleifend urna sit amet felis efficitur, vel venenatis velit ullamcorper. Suspendisse ullamcorper eros in diam varius, nec venenatis velit ultricies. Vivamus eget ullamcorper dolor. Fusceamet nisl efficitur hendrerit. Integer commodo felis vel lacinia euismod. Sed rhoncus est et quam venenatis bibendum. Quisque dapibus dolor eu purus ullamcorper, vel auctor nisl tempus. Suspendisse potenti. In hac habitasse platea dictumst. Integer fermentum, arcu vel ultricies fringilla, felis libero cursus metus, nec tincidunt nisl ligula a purus. Vivamus et arcu nec neque viverra fringilla.",

    "Texto 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor, bibendum at est id, porttitor eleifend odio. Ut interdum, purus et cursus malesuada, justo dolor bibendum nunc, et dapibus ligula nunc ac justo. Vestibulum eleifend urna sit amet felis efficitur, vet nisl efficitur hendrerit. Integer commodo felis vel lacinia euismod. Sed rhoncus est et quam venenatis bibendum. Quisque dapibus dolor eu purus ullamcorper, vel auctor nisl tempus. Suspendisse potenti. In hac habitasse platea dictumst. Integer fermentum, arcu vel ultricies fringilla, felis libero cursus metus, nec tincidunt nisl ligula a purus. Vivamus et arcu nec neque viverra fringilla."
]
const observadorHTML = document.querySelector('.gallery-text');

let prevPos;

function observarImg(event){
    const imgClick = event.currentTarget;
    let pos = imgHTML.indexOf(imgClick); //guarda la posición del click

    /*if hecho para el primer click solamente, después no se va a ejecutar más. 
    Guarda la el 1er click y le agrega el css a la 1er img 
    ya que cuando inicia la página ya está seleccionada*/
    if (prevPos == undefined){ 
        prevPos = pos;
        imgHTML[0].children[0].style.background = "var(--color-bg-mask)";
        imgHTML[0].children[1].style.opacity = "1";
    }

    observadorHTML.querySelector('h2').textContent = imgClick.querySelector('h2').textContent; // Agrega el título de la img

    //Saca el .mask y el h2 de la img seleccionada.
    imgClick.children[0].style.background = "transparent";
    imgClick.children[1].style.opacity = "0";

    
    observadorHTML.querySelector('p').textContent = descriptionHTML[pos]; //teniendo la posición del click se muestra el texto correcto

    if (prevPos != undefined && prevPos != pos){ //sirve para que le devuelva el css a la img clickeada anteriormente
        imgHTML[prevPos].children[0].style.background = "var(--color-bg-mask)";
        imgHTML[prevPos].children[1].style.opacity = "1";
    }

    prevPos = pos;

}

imgHTML.forEach(img => {
    img.addEventListener('click', observarImg);
});

/*imgHTML.forEach(img => {
    img.addEventListener('touchstart', observarImg);
});*/