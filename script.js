// Función para alternar el menú de navegación
const toggleMenu = () => {
    // Seleccionar elementos DOM relevantes
    const navigation = document.querySelector('.navigation');
    const burgerMenu = document.querySelector(".menu__bar__icon");

    // Obtener el atributo 'src' del elemento burgerMenu
    const src = burgerMenu.getAttribute('src');
    // Determinar si el icono actual es el de un burger o cerrar
    const isBurger = src === 'img/burger-menu.svg';
    const iconName = isBurger ? 'img/close.svg' : 'img/burger-menu.svg';
    burgerMenu.setAttribute('src', iconName);

    // Animacion y cambios en la clase de navegación
    if (!isBurger) {
        navigation.classList.add("navigation__mobile__fadeout");
        setTimeout(() => {
            navigation.classList.toggle('navigation__mobile');
        }, 300);
    } else {
        navigation.classList.remove("navigation__mobile__fadeout");
        navigation.classList.toggle('navigation__mobile');
    }
}
// Selecciona el elemento del carrusel
const carousel = document.getElementById('carousel');

// Variables de estado para el arrastre del mouse
let isDown = false;
let startX;
let scrollLeft;

// Manejadores de eventos para el mouse
carousel.addEventListener('mouseleave', () => {
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