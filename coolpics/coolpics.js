document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
  
    menuButton.addEventListener('click', function () {
      if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'block';
      }
    });
  });
  