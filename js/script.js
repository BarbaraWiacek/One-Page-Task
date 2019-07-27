// Mobile navigation
const toggleMobileNav = (event) => {
    event.preventDefault();
    const navClass = document.querySelector('.header__nav--list').classList;
    const headerClass = document.querySelector('.header__nav').classList;
    if (navClass.contains('closed')) {
        navClass.remove('closed');
        headerClass.add('open');
    } else {
        headerClass.remove('open');
        setTimeout(() => navClass.add('closed'), 350);
    }
}

// Smooth scrolling
const links = document.querySelectorAll('.nav--link');

Array.from(links).forEach(el => {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        window.scrollTo({
            left: 0,
            top: document.querySelector(href).offsetTop,
            behavior: 'smooth'
        });
    });
});


// Slider
let activeIndex = 1;
const slides = document.getElementsByClassName('gallery__image');

const activeSlide = (num) => {
    activeIndex += num;
    if (activeIndex > slides.length) {
        activeIndex = 1;
    }
    if (activeIndex < 1) {
        activeIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[activeIndex - 1].classList.add('active');
}