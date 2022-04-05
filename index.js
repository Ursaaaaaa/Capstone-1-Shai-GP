const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('.drop-menu');
const logo = document.querySelector('.logo');
const menuButton = document.querySelector('.menu-button');

hamburger.addEventListener('click' ,()=> {
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  menuButton.classList.toggle('active');
})