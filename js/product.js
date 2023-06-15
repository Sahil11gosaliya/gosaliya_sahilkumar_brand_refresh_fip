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
