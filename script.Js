function toggleMenu() {
    const menuButton = document.querySelector('.menu');
    const menuContainer = document.querySelector('.menu-container');

    menuButton.classList.toggle('opened');
    menuContainer.classList.toggle('active');
}