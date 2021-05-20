const moreElem = document.querySelector('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden')
};

const closeModal = () => {

};

moreElem.addEventListener('click', openModal)
