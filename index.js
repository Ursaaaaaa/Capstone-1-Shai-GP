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

//Speakers

let el = document.createElement('div')
el.innerHTML = `
<div class="speaker">
  <div class="speaker-img-block">
    <img class="speaker-img" src="${this.speakerImage}" alt="speaker image">
  </div>
  <div class="speaker-details">
    <h4>${speakerName}</h4>
    <em>${speakerGraduate}</em>
    <div class="speaker-separation"></div>
    <p>${speakerExperience}</p>
  </div>
</div>
`
speakersFeature.append(el)