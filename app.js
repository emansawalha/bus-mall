'use strict';

let maximumClicks = 10;
let attempts = 0;
//let divContainer = document.getElementById('container')
let firstImageElement = document.getElementById('firstImage');
let secondImageElement = document.getElementById('secondImage');
let thirdImageElement = document.getElementById('thirdImage');

let arrOfObjects = [];
function BusMall(prodName, imgPath) {
    this.prodName = prodName;
    this.imgPath = imgPath;
    this.imageShown = 0;
    this.prodSelect = 0;


    arrOfObjects.push(this);
}
new BusMall('bag', 'img/assets-lab11/bag.jpg')
new BusMall('banan', 'img/assets-lab11/banana.jpg')
new BusMall('bathroom', 'img/assets-lab11/bathroom.jpg')
new BusMall('boots', 'img/assets-lab11/boots.jpg')
new BusMall('breakfast', 'img/assets-lab11/breakfast.jpg')
new BusMall('bubblegum', 'img/assets-lab11/bubblegum.jpg')
new BusMall('dog-duck', 'img/assets-lab11/dog-duck.jpg')
new BusMall('cthulhu', 'img/assets-lab11/cthulhu.jpg')
new BusMall('dragon', 'img/assets-lab11/dragon.jpg')
new BusMall('pet-sweep', 'img/assets-lab11/pet-sweep.jpg')
new BusMall('scissors', 'img/assets-lab11/scissors.jpg')
new BusMall('shark', 'img/assets-lab11/shark.jpg')
new BusMall('tauntaun', 'img/assets-lab11/tauntaun.jpg')
new BusMall('unicorn', 'img/assets-lab11/unicorn.jpg')
new BusMall('water-can', 'img/assets-lab11/water-can.jpg')
new BusMall('wine-glass', 'img/assets-lab11/wine-glass.jpg')
new BusMall('chair', 'img/assets-lab11/chair.jpg')
new BusMall('dog-duck', 'img/assets-lab11/dog-duck.jpg')
new BusMall('pen', 'img/assets-lab11/pen.jpg')

//console.log(arrOfObjects);
let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;
function renderThreeRandomImages() {
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();
    while ((firstImageIndex === secondImageIndex) || (firstImageIndex === thirdImageIndex) || (secondImageIndex === thirdImageIndex)) {
        secondImageIndex = generateRandomIndex();
        thirdImageIndex = generateRandomIndex();
    }
    // to show image of products 
    firstImageElement.setAttribute('src',arrOfObjects[firstImageIndex].imgPath)
    secondImageElement.setAttribute('src' ,arrOfObjects[secondImageIndex].imgPath);
    thirdImageElement.setAttribute('src',arrOfObjects[thirdImageIndex].imgPath)

    // to count the no. of shown image 
    arrOfObjects[firstImageIndex].imageShown++;
    arrOfObjects[secondImageIndex].imageShown++;
    arrOfObjects[thirdImageIndex].imageShown++;
    

}


function generateRandomIndex() {

    let randomIndex = Math.floor(Math.random() * arrOfObjects.length);
    return randomIndex;
}

renderThreeRandomImages();

firstImageElement.addEventListener('click', handleClicking);
secondImageElement.addEventListener('click', handleClicking);
thirdImageElement.addEventListener('click', handleClicking);



function handleClicking(event){
attempts++;
if(attempts <= maximumClicks){

    if(event.target.id === 'firstImage'){
        arrOfObjects[firstImageIndex].prodSelect ++;

    }
    if(event.target.id === 'secondImage'){
        arrOfObjects[secondImageIndex].prodSelect++;

    }
    if(event.target.id === 'thirdImage'){
        arrOfObjects[thirdImageIndex].prodSelect++;

}
renderThreeRandomImages();
console.log(arrOfObjects)

}else{
    let unorderdList = document.getElementById('unList');
    let li;
    for(let i = 0 ; i < arrOfObjects.length; i++){
        li = document.createElement('li');
        unorderdList.appendChild(li);
        li.textContent = `${arrOfObjects[i].prodName}  had ${arrOfObjects[i].prodSelect} votes and shown  ${arrOfObjects[i].imageShown}times.`


}


firstImageElement.removeEventListener('click', handleClicking);
secondImageElement.removeEventListener('click', handleClicking);
thirdImageElement.removeEventListener('click', handleClicking);    
}
}
function resultBtn(){
    let btn = document.getElementById('unList');
    
    }


