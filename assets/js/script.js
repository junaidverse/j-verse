'use strict';

/**
 * add event on element
 */

const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Image Slider

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slides');

let currentSlide = 0;
const slideCount = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 5000);
