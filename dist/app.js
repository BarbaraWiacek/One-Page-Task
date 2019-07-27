"use strict";

// Mobile navigation
var toggleMobileNav = function toggleMobileNav(event) {
  event.preventDefault();
  var navClass = document.querySelector('.header__nav--list').classList;
  var headerClass = document.querySelector('.header__nav').classList;

  if (navClass.contains('closed')) {
    navClass.remove('closed');
    headerClass.add('open');
  } else {
    headerClass.remove('open');
    setTimeout(function () {
      return navClass.add('closed');
    }, 350);
  }
}; // Smooth scrolling


var links = document.querySelectorAll('.nav--link');
Array.from(links).forEach(function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var href = event.target.getAttribute('href');
    window.scrollTo({
      left: 0,
      top: document.querySelector(href).offsetTop,
      behavior: 'smooth'
    });
  });
}); // Slider

var activeIndex = 1;
var slides = document.getElementsByClassName('gallery__image');

var activeSlide = function activeSlide(num) {
  activeIndex += num;

  if (activeIndex > slides.length) {
    activeIndex = 1;
  }

  if (activeIndex < 1) {
    activeIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[activeIndex - 1].classList.add('active');
};
//# sourceMappingURL=app.js.map
