window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.mobile-menu-box');
    if (window.scrollY > 0 && !mobileMenu.classList.contains('open')) {
        navbar.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
    }
});

document.querySelector('.mobile-nav-menu').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu-box');
    mobileMenu.classList.toggle('open');
    const navbar = document.querySelector('.navbar');
    if (mobileMenu.classList.contains('open')) {
        navbar.classList.remove('opaque');
    }
});

document.querySelectorAll('.mobile-menu-box a').forEach(link => {
    link.addEventListener('click', function() {
        const mobileMenu = document.querySelector('.mobile-menu-box');
        mobileMenu.classList.remove('open');
    });
});

window.addEventListener('resize', function() {
    const mobileMenu = document.querySelector('.mobile-menu-box');
    if (window.innerWidth > 801) {
        mobileMenu.classList.remove('open');
    }
});

document.addEventListener('click', function(event) {
    const mobileMenu = document.querySelector('.mobile-menu-box');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    if (!mobileMenu.contains(event.target) && !mobileNavMenu.contains(event.target)) {
        mobileMenu.classList.remove('open');
    }
});