  (function () {
    "use strict";
    console.log("fired");
  })();


// hamburger


document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", function() {
    mobileNav.classList.toggle("show");
  });
});


//active link

document.addEventListener("DOMContentLoaded", function () {

  const currentURL = window.location.href;


  const navLinks = document.querySelectorAll('.nav-button');

  navLinks.forEach(link => {
    if (link.href === currentURL) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});



//dnd

document.addEventListener("DOMContentLoaded", function(){
const dropzone = document.getElementById('dropzone');
const replacedImages = document.querySelectorAll('.replaced-img img');

function preventDefault(e) {
  e.preventDefault();
}

function drop(e) {
  preventDefault(e);

  const droppedFlavor = e.dataTransfer.getData('text/flavor').toUpperCase();

  let matchingImage = null;

  for (const image of replacedImages) {
    if (image.getAttribute('alt').toUpperCase() === droppedFlavor) {
      matchingImage = image;
      break;
    }
  }

  if (matchingImage) {
    dropzone.innerHTML = `
      <img class="dnd" src="${matchingImage.src}" alt="flavour">
      <h3>${droppedFlavor}</h3>
    `;
  } else {
    dropzone.innerHTML = `
      <p>No matching image found for ${droppedFlavor}</p>
    `;
  }
}

dropzone.addEventListener('dragenter', preventDefault);
dropzone.addEventListener('dragover', preventDefault);
dropzone.addEventListener('drop', drop);

const associatedImages = document.querySelectorAll('.replaced-img img');

associatedImages.forEach(image => {
  image.draggable = true;

  image.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/flavor', image.getAttribute('alt'));
  });
});
});