document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.innerHTML = navLinks.classList.contains("active") ? '✖' : '☰';
  });

  // Sticky navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Lazy-load hero section
  const heroSection = document.querySelector(".hero.lazy-load");
  if (heroSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroSection.classList.add("loaded");
          observer.unobserve(heroSection);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    });

    observer.observe(heroSection);
  }
});


/*
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '✖'; 
    } else {
        menuToggle.innerHTML = '☰'; 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector('.hero.lazy-load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroSection.classList.add('loaded');
                observer.disconnect(); 
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1 
    });

    observer.observe(heroSection);
});
*/