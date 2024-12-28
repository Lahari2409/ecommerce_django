// js/scripts.js

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function moveSlide(direction) {
  slideIndex = (slideIndex + direction + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// Show the first slide initially
showSlide(slideIndex);