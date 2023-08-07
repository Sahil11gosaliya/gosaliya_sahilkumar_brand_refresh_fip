document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentURL = window.location.href;
  
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-button');
  
    // Add active class to the corresponding link
    navLinks.forEach(link => {
      if (link.href === currentURL) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  