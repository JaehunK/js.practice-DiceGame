
var randomNumber1 = Math.random()*6+1;
var randomNumber2 = Math.random()*6+1;
randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var randomImageSource1 = "./images/dice" + randomNumber1 +".png";
var randomImageSource2 = "./images/dice" + randomNumber2 +".png";
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

var title = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    title.innerHTML = "Player 1 won!";
} 
if (randomNumber2 > randomNumber1){
    title.innerHTML = "Player 2 won!"
} 
if (randomNumber1==randomNumber2){
    title.innerHTML = "Draw!";
}