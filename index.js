const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('.drop-menu');
const logo = document.querySelector('.logo');
const menuButton = document.querySelector('.menu-button');
const navmenu = document.querySelector('.drop-menu ul');

// popup variables
const modal = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".popup-close");
const projectBtn = document.querySelectorAll(".see-project");

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