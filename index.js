const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('.drop-menu');
const logo = document.querySelector('.logo');
const menuButton = document.querySelector('.menu-button');
const navmenu = document.querySelector('.drop-menu ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  menuButton.classList.toggle('active');
});

navmenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  menuButton.classList.toggle('active');
});