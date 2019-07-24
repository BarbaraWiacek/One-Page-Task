function toggleMobileNav(e) {

    e.target.parentElement.classList.toggle("open");
    
    const navClass = document.querySelector('.header_nav--list').classList;
    if (navClass.contains('closed')) {
        navClass.remove('closed')
    } else {
        setTimeout(() => navClass.add('closed'), 350);
    }
}

function smoothScrollTo(element) {
    window.scrollTo({
        left: 0,
        top: document.getElementById(element).offsetTop,
        behavior: 'smooth'
    });
}