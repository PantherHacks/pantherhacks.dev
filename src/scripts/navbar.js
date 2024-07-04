window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
    }
});