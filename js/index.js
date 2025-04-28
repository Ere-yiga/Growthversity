const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '✖'; // Change to X
    } else {
        menuToggle.innerHTML = '☰'; // Change back to hamburger
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector('.hero.lazy-load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'loaded' class to trigger CSS transition
                heroSection.classList.add('loaded');
                observer.disconnect(); // Stop observing after the section is loaded
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px', // Trigger 50px before the hero section is in view
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    observer.observe(heroSection);
});

