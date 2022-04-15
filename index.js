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
const speaksList = [
  {
    name : "Lewis Hamilton",
    image : "images/speakers/hamilton.jpg",
    graduate: "Formula 1 Driver",
    experience: "Lewis is the most decorated F1 driver active with numerous run and championships under his belt",
  },
  {
    name : "Sebastian Vettel",
    image : "images/speakers/hamilton.jpg",
    graduate: "Formula 1 Driver",
    experience: "Vettel is a veteran F1 driver active with numerous championships under his belt",
  },
  {
    name : "Elon Musk",
    image : "images/speakers/hamilton.jpg",
    graduate: "CEO of SpaceX & Tesla",
    experience: "Elon is world renowned entreprenuer and kickstarter in electric vehicles",
  },
  {
    name : "Donald Trump",
    image : "images/speakers/hamilton.jpg",
    graduate: "Former President of USA",
    experience: "Trump is a succesful businessman and Former President of the USA",
  },
]

// console.log(speaksList)
const speakers = document.querySelector('.top-speakers');
for(let i = 0; i < speaksList.length; i++){
  let el = document.createElement('div')
el.innerHTML = `

  <div>
     <img
         class="speaker-img"
         src="${speaksList[i].image}"
         alt="Lewis Hamilton"
      />
  </div>
  <div>
     <h2>${speaksList[i].name}</h2>
     <h3>${speaksList[i].graduate}</h3>
        <p>
        ${speaksList[i].experience}
        </p>
   </div>
`
speakers.appendChild(el)
};
