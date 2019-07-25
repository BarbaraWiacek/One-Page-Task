// Mobile navigation
function toggleMobileNav() {
    const navClass = document.querySelector('.header_nav--list').classList;
    const headerClass = document.querySelector('.header_nav').classList;
    if (navClass.contains('closed')) {
        navClass.remove('closed');
        headerClass.add("open");
    } else {
        headerClass.remove("open");
        setTimeout(() => navClass.add('closed'), 350);
    }
}

// Smooth scrolling
function smoothScrollTo(e) {
    window.scrollTo({
        left: 0,
        top: document.getElementById(e).offsetTop,
        behavior: 'smooth'
    });
}

// Slider
let activeIndex = 1;
const slides = document.getElementsByClassName("gallery_image");

function activeSlide(num) {
    activeIndex += num;
    if (activeIndex > slides.length) {
        activeIndex = 1
    }
    if (activeIndex < 1) {
        activeIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[activeIndex - 1].classList.add("active");
}