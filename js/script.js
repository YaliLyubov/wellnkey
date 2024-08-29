const imageContainers = document.querySelectorAll('.image-container');
const mainImage = document.querySelector('.main-image');

imageContainers.forEach(container => {
  container.addEventListener('click', () => {
    const imgSrc = container.querySelector('img').src;
    mainImage.src = imgSrc;
  });
});

// about link
const linksAbout = document.querySelectorAll('.about_links-link');
linksAbout.forEach((link) => {
  let isActive = link.classList.contains('active');
  link.addEventListener('click', function () {
    event.preventDefault();

    linksAbout.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  })
  
})