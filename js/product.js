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



//dnd flavour


// Get the drag and drop zone element
const dropzone = document.getElementById('dropzone');

// Add event listeners for drag and drop events
dropzone.addEventListener('dragenter', dragEnter);
dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('drop', drop);

// Prevent default behavior for drag and drop events
function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  // Get the dropped flavor image's source URL
  const droppedImageUrl = e.dataTransfer.getData('text/plain');

  // Replace the dropzone image with the dropped flavor image
  const dropzoneImage = dropzone.querySelector('img');
  dropzoneImage.src = droppedImageUrl;

  // Replace the dropped flavor image with the dropzone image in the replaced-img div
  const replacedImages = document.querySelectorAll('.replaced-img img');
  replacedImages.forEach(image => {
    if (image.getAttribute('data-flavor') === dropzoneImage.getAttribute('data-flavor')) {
      image.src = droppedImageUrl;
    }
  });
}

// Enable dragging for the associated flavor images
const associatedImages = document.querySelectorAll('.replaced-img img');
associatedImages.forEach(image => {
  image.draggable = true;
  image.addEventListener('dragstart', dragStart);
});

// Set the flavor image as the drag data
function dragStart(e) {
  const flavorImage = e.target;
  const flavorImageUrl = flavorImage.getAttribute('src');
  e.dataTransfer.setData('text/plain', flavorImageUrl);
}



//still image is not replacing! it is underflow