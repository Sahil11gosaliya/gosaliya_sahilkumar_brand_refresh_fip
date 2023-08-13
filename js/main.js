(function(){
	"use strict";	
	console.log("fired");
})();

//Can also be written like this:
//(() => {  })();   

//  testimony carousel this was for hero image carousel

// const intervalTime = 5000; // 5 seconds
// let currentSlide = 0;
// const slides = document.querySelectorAll('.slider div');

// function showSlide(n) {
//     slides.forEach(slide => slide.style.display = 'none');
// }

// function changeSlide(n) {
//     currentSlide += n;
//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     } else if (currentSlide < 0) {
//         currentSlide = slides.length - 1;
//     }
//     showSlide(currentSlide);
// }

// function startSlider() {
//     showSlide(currentSlide); // Show the first slide before starting the interval
//     setInterval(() => {
//         changeSlide(1);
//     }, intervalTime);
// }

// startSlider(); 




// // hamburger


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
  
    //  active class to the corresponding link
    navLinks.forEach(link => {
      if (link.href === currentURL) {
        link.classList.add('active');
      }
    });
  });
  



//accordian


document.addEventListener("DOMContentLoaded", function () {
    const flavors = document.querySelectorAll(".flavor");

    flavors.forEach(function (flavor) {
        const description = flavor.querySelector(".description");
        const toggleBtn = flavor.querySelector(".toggle-description");

        toggleBtn.addEventListener("click", function () {
            if (!flavor.classList.contains("show")) {
                // Close other open accordion items when one is clicked
                flavors.forEach(function (otherFlavor) {
                    if (otherFlavor !== flavor && otherFlavor.classList.contains("show")) {
                        otherFlavor.classList.remove("show");
                        const otherToggleBtn = otherFlavor.querySelector(".toggle-description");
                        otherToggleBtn.textContent = "Read More";
                    }
                });

                flavor.classList.add("show");
                toggleBtn.textContent = "Read Less";
            } else {
                flavor.classList.remove("show");
                toggleBtn.textContent = "Read More";
            }
        });
    });
});



// dnd for flavours


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