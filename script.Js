const burgerMenu = document.querySelector('.burger-menu');
const menuContainer = document.querySelector('.menu-container');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('opened');
  menuContainer.classList.toggle('active');
});