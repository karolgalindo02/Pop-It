// Función para alternar el menú de navegación
const toggleMenu = () => {
    // Seleccionar elementos DOM relevantes
    const navigation = document.querySelector('.navigation');
    const burgerMenu = document.querySelector(".menu-icon");

    // Obtener el atributo 'src' del elemento burgerMenu
    const src = burgerMenu.getAttribute('src');
    // Determinar si el icono actual es el de un burger o cerrar
    const isBurger = src === 'img/burger-menu.svg';
    // Definir el nombre del icono según el estado
    const iconName = isBurger ? 'img/close.svg' : 'img/burger-menu.svg';

    // Cambiar el atributo 'src' del burgerMenu
    burgerMenu.setAttribute('src', iconName);

    // Realizar las animaciones y cambios en la clase de la navegación
    if (!isBurger) {
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle('navigation--mobile');
        }, 300);
    } else {
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle('navigation--mobile');
    }
};

// Código relacionado con el carrusel
const carousel = document.getElementById('carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

document.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walkX = (x - startX) * 1;
    carousel.scrollLeft = scrollLeft - walkX;
});

carousel.addEventListener('scroll', () => {
    const position = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
});

scrollLeftButton.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
});
