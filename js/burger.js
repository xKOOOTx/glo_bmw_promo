const burgerBtn = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuListElem = document.querySelector('.menu-list');
const menuLinksElems = document.querySelectorAll('.menu-list__link');

//toggling menu
const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burgerBtn.classList.toggle('humburger-menu-active');
}

/*//closing menu link click
const closeMenu = () => {
    menuLinksElems.forEach((el) => {
        el.addEventListener('click', toggleMenu);
    });
}*/

burgerBtn.addEventListener('click', (el) => {
    toggleMenu();
    // closeMenu();
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('menu-active') && !target.classList.contains('humburger-menu')) {
        menuElem.classList.remove('menu-active');
        burgerBtn.classList.remove('humburger-menu-active');
    }
});
