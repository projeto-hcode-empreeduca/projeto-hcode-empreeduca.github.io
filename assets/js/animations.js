const getElementFadeIn = (element, scroll, effect) => {
    // console.log('verificando o resultado de el', element);
    // document.querySelectorAll(el).forEach(element => {
    const offSet = element.offsetTop;

    const windowHeight = window.innerHeight;
    if (scroll < offSet && scroll < (offSet + window.innerHeight)) {
        element.classList.add(effect);
    } else {
        element.classList.remove(effect);
    }

    // })
}

document.addEventListener('scroll', (e) => {
    const scroll = window.scrollY;
    const header = document.querySelector('.header-top-site');
    // getElementFadeIn(".clients", scroll);
    // getElementFadeIn(".about-section", scroll);
    const animateFadeUp = document.querySelectorAll(".animateFadeUp");
    animateFadeUp.forEach((element) => {
        getElementFadeIn(element, scroll, 'fadeUp');
    });

    const animateFadeLeft = document.querySelectorAll(".animateFadeLeft");
    animateFadeLeft.forEach((element) => {
        getElementFadeIn(element, scroll, 'fadeLeft');
    });
    if (scroll > 800) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});