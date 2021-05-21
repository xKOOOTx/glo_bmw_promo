const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');
const body = document.body

// opening modal window
const openModal = () => {
    modalElem.classList.remove('hidden');
    body.style.overflow = 'hidden';
};

// closing modal window
const closeModal = () => {
    modalElem.classList.add('hidden');
    body.style.overflow = 'auto';
};

moreElems.forEach((el) => {
    el.addEventListener('click', openModal)
})

// listening click to close modal window outside and x button
modalElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        closeModal()
    };
})
