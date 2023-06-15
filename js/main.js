(function(){
	"use strict";	
	console.log("fired");
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/


// JavaScript code to handle carousel functionality
const carouselImages = document.querySelectorAll('.hero-carousel img');
let currentImageIndex = 0;

function showNextImage() {
  carouselImages[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].style.display = 'block';
}

// Change the image every 3 seconds
setInterval(showNextImage, 3000);






// testimony carousel

var slideIndex = 0;
var slides = document.getElementsByClassName("testimonial-slide");

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex = n;
  slides[slideIndex].classList.add("active");
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

showSlide(slideIndex);
