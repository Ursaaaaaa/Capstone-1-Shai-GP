const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('.drop-menu');
const menuButton = document.querySelector('.menu-button');
const navmenu = document.querySelector('.drop-menu');
const main = document.querySelector('.main-scroll')
menuButton.addEventListener('click', () => {
  navmenu.classList.toggle('active');
  main.classList.toggle('active')
  menuButton.classList.toggle('active');
});

// menu.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   menuButton.classList.toggle('active');
// });