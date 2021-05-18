document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
    console.log(featureLinkElems);
    const featureSubElems = document.querySelectorAll('.feature-sub');
    console.log(featureSubElems);

/*    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElems[index].classList.toggle('hidden');
            btn.classList.toggle('feature__link_active')
        })
    })*/
    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem) => {
                featureSubElem.classList.add('hidden');
            });
            featureLinkElems.forEach((featureLinkElem) => {
                featureLinkElem.classList.remove('feature__link_active');
            });
            featureSubElems[index].classList.remove('hidden');
            btn.classList.toggle('feature__link_active');
        })
    })
/*    for (let i = 0; i < featureLinkElems.length; i++) {
        featureLinkElems[i].addEventListener('click', () => {
            featureSubElems[i].classList.toggle('hidden');
            featureLinkElems[i].classList.toggle('feature__link_active')
        })
    }*/
})
