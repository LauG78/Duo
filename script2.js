// let favoriteColor = document.getElementById("color").innerHTML = "";
//spirit animal just a small adjustment! most info is already correct!
let spiritAnimal = document.getElementById("lanecat");
spiritAnimal.src = "images2/correctSpiritAnimal.jpg";
spiritAnimal.width = "200";
spiritAnimal.height = "450";

//spirit animal text adjust
let spirit = document.getElementById("spirit");
let spiritTxt = '<em><span style="font-weight: 700">Dimi always loved </span></em>cats. The cat is his spiritual animal and yes just any cat even this grumpy one'
spirit.innerHTML = spiritTxt;

//sports
// document.getElementById("elephant").src = 'images2/zorb.jpg';
let sport = document.getElementById("sport");
// alert(sport);
console.log(sport);
sport.innerHTML = `    <div id="sport"><img id="elephant" src="./images2/zorb.jpg" alt="zorb football"><p>Dimi used to be a sportsman, he doesn't like to watch sports on TV</p></div>`

//favorite character
let character = document.getElementById("character");
console.log(character);
character.innerHTML = `<div id="character"><p style="font-weight:700; color:chocolate; font-size:1.2rem">Dimi's favoriete fictional characters are anything from marvel. I grew up with spiderman, hulk, captain america and all the others.</p><img src="./images2/spiderman.webp" id="spiderman" alt="Spiderman"></div>`
//date
let date = document.getElementById("date");
date.src = "./images2/date2.png";
date.title = "I can't even remember when I last went on a date... ";

//description
let description = document.getElementById("description");
description.innerHTML = `<div id="description"><p>In three words Dimi is: <ul><li><span style="font-size: 1.3rem; font-weight: 700; color:aliceblue">Short haired</span></li><li>He never leaves home if doesn't have his <b>hair done</b></li><li id="pc">He <strong>LOVES</strong> computers</li></ul></p> </div>`

//challenge
let challenge = document.getElementById("challenge");
challenge.innerHTML = `<div class="col-12 box" id="boxA" style="background: greenyellow"><div class="chaser" style="background: red"></div></div>`
////////////////////////////////////////////
// Chaser
////////////////////////////////////////////
// chaser circle
let boxA = document.querySelector('.box');
let circle = document.getElementById('circle');
circle.width = 30+'px';
circle.height = 30+'px';

boxA.addEventListener('mousemove', (e) => {
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = `${left - 30}px`
    circle.style.top = `${top - 20}px`

})

circle.style.left = x + "px";
circle.style.top = y + "px";

function draw()
{
    var canvas = document.getElementById('circle');
    if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    }
}