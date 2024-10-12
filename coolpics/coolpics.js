document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    const viewer = document.querySelector('.viewer');
    const viewerImage = viewer.querySelector('img');
    const closeViewerButton = document.querySelector('.closse-viewer');
  
    menuButton.addEventListener('click', function () {
      navLinks.classList.toggle('hide');
    });

    function handleResize() {
      if (window.innerWidth > 1000) {
        navLinks.classList.remove('hide');
      } else {
        navLinks.classList.add('hide');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    document.querySelector('gallery').addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG') {
        const src = event.target.src.replace('-sm.jpeg', '-full.jpeg');
        viewerImage.src = src;
        viewer.classList.remove('hide');
      }
    });

    closeViewerButton.addEventListener('click', function () {
      viewer.classList.add('hide');
  });
});
  
