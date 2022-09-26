'use strict';

/*Globals */
const imgObjectArray = [];
let guesses = 25;
const numberOfImages = 3; //How many images to be rendered on screen
//

/*DOM Selectors */
let section = document.querySelector('section');
let buttonElement = document.createElement('button');
let footerMessage = document.querySelector('#copyright');
let yearMessage = document.querySelector('#year');

/*Utility Functions */
function randomNum() {
  const randomNumbers = [];

  while (randomNumbers.length < numberOfImages) {
    let numberToAdd = Math.floor(Math.random() * imgObjectArray.length);
    if (!randomNumbers.includes(numberToAdd)) {
      randomNumbers.push(numberToAdd);
    }
  }
  return randomNumbers;
}
const getYear = function () {
  return new Date().getFullYear();
};

/*Constructors */
function Image(name, image) {
  this.name = name;
  this.image = image;
  this.alt = `An image of a ${name}`;
  this.views = 0;
  this.click = 0;

  imgObjectArray.push(this);
}

/*Prototype methods */
Image.prototype.addClick = function () {
  this.click++;
};


Image.prototype.render = function () {
  let imgElement = document.createElement('img');
  console.log(this.image);
  imgElement.setAttribute('src', this.image);
  imgElement.setAttribute('class', 'image');
  imgElement.setAttribute('alt', this.alt);
  section.appendChild(imgElement);
  this.views++;
};

/*Object Creation */
new Image('bag', '/img/bag.jpg');
new Image('banana', '/img/banana.jpg');
new Image('bathroom', '/img/bathroom.jpg');
new Image('boots', '/img/boots.jpg');
new Image('breakfast', '/img/breakfast.jpg');
new Image('bubblegum', '/img/bubblegum.jpg');
new Image('chair', '/img/chair.jpg');
new Image('cthulhu', '/img/cthulhu.jpg');
new Image('dog-duck', '/img/dog-duck.jpg');
new Image('dragon', '/img/dragon.jpg');
new Image('pen', '/img/pen.jpg');
new Image('pet-sweep', '/img/pet-sweep.jpg');
new Image('scissors', '/img/scissors.jpg');
new Image('shark', '/img/shark.jpg');
new Image('sweep', '/img/sweep.png');
new Image('tauntaun', '/img/tauntaun.jpg');
new Image('unicorn', '/img/unicorn.jpg');
new Image('water-can', '/img/water-can.jpg');
new Image('wine-glass', '/img/wine-glass.jpg');

/* Build HTML */
let randomImageIndex = randomNum(); //Store an array of 3 random unique numbers
for (let i = 0; i < numberOfImages; i++) {
  imgObjectArray[imgObjectArray[randomImageIndex[i]].render()];
}

/*Event Handlers */
let imgElement = document.querySelectorAll('.image');

function voteClicking(e) {
  for (let image of imgObjectArray) {
    if (e.target.alt === image.alt) {
      image.addClick();
      guesses--;
    }
  }
}

/*Event Listoners */
for (let images of imgElement) {
  images.addEventListener('click', voteClicking);
}
/*Logic */
