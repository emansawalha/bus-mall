'use strict';


let maximumClicks = 25;


let attempts = 0;
//let divContainer = document.getElementById('container')
let firstImageElement = document.getElementById('firstImage');
let secondImageElement = document.getElementById('secondImage');
let thirdImageElement = document.getElementById('thirdImage');

//let arrOfObjects = [];

let arrOfProduct = [];
let arrOfprodSelect = [];
let arrImageShown = [];
let arrayOfThreeImg=[];


function BusMall(prodName, imgPath) {
    this.prodName = prodName;
    this.imgPath = imgPath;
    this.imageShown = 0;
    this.prodSelect = 0;


    BusMall.product.push(this);

    arrOfProduct.push(this.prodName);

}
BusMall.product = [];

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
//new BusMall('dog-duck', 'img/assets-lab11/dog-duck.jpg')
new BusMall('pen', 'img/assets-lab11/pen.jpg')

//console.log(arrOfObjects);
let firstImageIndex = -1;
let secondImageIndex =-1;
let thirdImageIndex=-1;
function renderThreeRandomImages() {
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();

    //  while (firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex || 
    //   arrayOfThreeImg.includes(firstImageIndex) || arrayOfThreeImg.includes(secondImageIndex)||arrayOfThreeImg.includes(thirdImageIndex) )
    //     {
    //  secondImageIndex = generateRandomIndex();
    //   thirdImageIndex = generateRandomIndex();
    //   }

    //   arrayOfThreeImg[0]=firstImageIndex;
    //   arrayOfThreeImg[1]=secondImageIndex;
    //  arrayOfThreeImg[2]=thirdImageIndex;

    //  arrOfObjects[firstImageIndex].imageShown++;
    //  arrOfObjects[secondImageIndex].imageShown++;
    //  arrOfObjects[thirdImageIndex].imageShown++;
    // firstImageElement.setAttribute('src', arrOfObjects[firstImageIndex].imgPath)
    // secondImageElement.setAttribute('src', arrOfObjects[secondImageIndex].imgPath);
    //thirdImageElement.setAttribute('src', arrOfObjects[thirdImageIndex].imgPath)

    while ((firstImageIndex === secondImageIndex) || (firstImageIndex === thirdImageIndex) || (secondImageIndex === thirdImageIndex)||  arrayOfThreeImg.includes(firstImageIndex) || arrayOfThreeImg.includes(secondImageIndex)||arrayOfThreeImg.includes(thirdImageIndex)) {
        firstImageIndex= generateRandomIndex();
        secondImageIndex = generateRandomIndex();
        thirdImageIndex = generateRandomIndex();
        
    }
    
      
    //to show image of products 
    firstImageElement.setAttribute('src', BusMall.product[firstImageIndex].imgPath)
    secondImageElement.setAttribute('src', BusMall.product[secondImageIndex].imgPath);
    thirdImageElement.setAttribute('src', BusMall.product[thirdImageIndex].imgPath)
    
    
      console.log(arrayOfThreeImg)
    // to count the no. of shown image 
    BusMall.product[firstImageIndex].imageShown++;
    BusMall.product[secondImageIndex].imageShown++;
    BusMall.product[thirdImageIndex].imageShown++;
    arrayOfThreeImg[0]=firstImageIndex;
    arrayOfThreeImg[1]=secondImageIndex;
   arrayOfThreeImg[2]=thirdImageIndex;


}


function generateRandomIndex() {

    let randomIndex = Math.floor(Math.random() * BusMall.product.length);
    return randomIndex;
}

renderThreeRandomImages();




firstImageElement.addEventListener('click', handleClicking);
secondImageElement.addEventListener('click', handleClicking);
thirdImageElement.addEventListener('click', handleClicking);


function handleClicking(event) {
    attempts++;
    if (attempts <= maximumClicks) {

        if (event.target.id === 'firstImage') {
            BusMall.product[firstImageIndex].prodSelect++;

        }
        if (event.target.id === 'secondImage') {
            BusMall.product[secondImageIndex].prodSelect++;

        }
        if (event.target.id === 'thirdImage') {
            BusMall.product[thirdImageIndex].prodSelect++;

        }
        savedSelectedItem();
        renderThreeRandomImages();
        //console.log(BusMall.product)

    } else {
        let unorderdList = document.getElementById('unList');
        let li;
        for (let i = 0; i < BusMall.product.length; i++) {
            li = document.createElement('li');
            unorderdList.appendChild(li);
            li.textContent = `${BusMall.product[i].prodName}  had ${BusMall.product[i].prodSelect} votes and shown  ${BusMall.product[i].imageShown}times.`


        }
        for (let j = 0; j < BusMall.product.length; j++) {
            arrOfprodSelect.push(BusMall.product[j].prodSelect)
            arrImageShown.push(BusMall.product[j].imageShown)

        }
    
        chartRender();
        firstImageElement.removeEventListener('click', handleClicking);
        secondImageElement.removeEventListener('click', handleClicking);
        thirdImageElement.removeEventListener('click', handleClicking);

    }
}
//function resultBtn() {
  //  let btn = document.getElementById('unList');

//}
function chartRender() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: arrOfProduct,

            datasets: [{
                label: 'Selected Item Chart',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(191,230,0)',
                    'rgb(255,153,153)',
                    'rgb(102,255,230)',
                    'rgba(153, 102, 255, 1)',
                    'rgb(221,204,255)',
                    'rgb(77,255,225)',
                    'rgb(255,255,153)',
                    'rgb(221,204,255)',
                    'rgb(149,255,128)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgb(221,204,255)',
                    'rgb(149,255,128)',
                    'rgb(255,179,102)',
                    'rgb(102,255,230)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderColor: ['rgb(255, 99, 132)',
                    'rgb(191,230,0)',
                    'rgb(255,153,153)',
                    'rgb(102,255,230)',
                    'rgba(153, 102, 255, 1)',
                    'rgb(221,204,255)',
                    'rgb(77,255,225)',
                    'rgb(255,255,153)',
                    'rgb(221,204,255)',
                    'rgb(149,255,128)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgb(221,204,255)',
                    'rgb(149,255,128)',
                    'rgb(255,179,102)',
                    'rgb(102,255,230)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1,
                data: arrOfprodSelect,
            }, {
                label: 'Product Images Counter Chart',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgb(77,255,225)',
                    'rgb(255,255,153)',
                    'rgb(221,204,255)',
                    'rgb(149,255,128)',
                    'rgb(255,179,102)',
                    'rgb(102,255,230)',
                    'rgb(255,153,153)',
                    'rgb(191,230,0)'


                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgb(77,255,225,1)',
                    'rgb(77,255,225,1)',
                    'rgb(255,255,153,1)',
                    'rgb(221,204,255,1)',
                    'rgb(149,255,128,1)',
                    'rgb(255,179,102,1)',
                    'rgb(102,255,230,1)',
                    'rgb(255,153,153,1)',
                    'rgb(191,230,0,1)'
                ],
                borderWidth: 1,
                data: arrImageShown,

            }]
        },

        // Configuration options go here
        options: {}
    });
}

function savedSelectedItem() {
    let saved = JSON.stringify(BusMall.product);
    localStorage.setItem('SelectedItem', saved);
    console.log(savedSelectedItem)
}

function getSelectedItem() {
    let selected = localStorage.getItem('SelectedItem')
    let item = JSON.parse(selected)
    if (item) {
        BusMall.product = item;
    }

  //  renderThreeRandomImages();
}
getSelectedItem();


