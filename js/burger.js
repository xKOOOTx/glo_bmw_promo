const burgerBtn = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');

//toggling menu
const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burgerBtn.classList.toggle('humburger-menu-active');
}

burgerBtn.addEventListener('click', () => {
    toggleMenu();
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('menu-active') && !target.classList.contains('humburger-menu')) {
        menuElem.classList.remove('menu-active');
        burgerBtn.classList.remove('humburger-menu-active');
    }
});
