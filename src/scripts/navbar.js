/**
 * File Name: navbar.js
 * File Location: src/scripts/navbar.js
 * Date Created: June 4th, 2024
 * Date Modified: June 5th, 2024
 * Purpose: Provides functionality to the navigation bar.
 */

/**
 * Note from Dylan:
 * Maximum screen width before forcing mobile navbar in pixels (px)
 * Make sure you adjust in "src\styling\main.css" as well.
*/
const NAVBAR_MAX_SCREEN_WIDTH = 860;

/**
 * Adjusts opacity of navigation bar depending on scroll on y axis
 * and mouse position.
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.mobile-menu-box');
    if (window.scrollY > 0 && !mobileMenu.classList.contains('open')) {
        navbar.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
    }
});

/**
 * Toggles the mobile menu bar open and closed when the mobile nav menu
 * is clicked.
 */
document.querySelector('.mobile-nav-menu').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu-box');
    mobileMenu.classList.toggle('open');
    const navbar = document.querySelector('.navbar');
    if (mobileMenu.classList.contains('open')) {
        navbar.classList.remove('opaque');
    }
});

/**
 * Closes the mobile menu when any link inside of it is clicked.
 */
document.querySelectorAll('.mobile-menu-box a').forEach(link => {
    link.addEventListener('click', function() {
        const mobileMenu = document.querySelector('.mobile-menu-box');
        mobileMenu.classList.remove('open');
    });
});

/**
 * Closes the mobile menu if the window is resized to be wider than
 * the minimum navbar desktop width.
 */
window.addEventListener('resize', function() {
    const mobileMenu = document.querySelector('.mobile-menu-box');
    if (window.innerWidth > (NAVBAR_MAX_SCREEN_WIDTH - 1)) {
        mobileMenu.classList.remove('open');
    }
});

/**
 * Closes the mobile menu if a click occurs outside of the mobile
 * menu or mobile nav menu.
 */
document.addEventListener('click', function(event) {
    const mobileMenu = document.querySelector('.mobile-menu-box');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    if (!mobileMenu.contains(event.target) && !mobileNavMenu.contains(event.target)) {
        mobileMenu.classList.remove('open');
    }
});