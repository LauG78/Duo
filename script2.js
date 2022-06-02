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
// let box = document.querySelector('.box');
// let chaser = document.querySelector('.chaser');
//
// box.addEventListener('mousemove', (e) => {
//     let left = e.offsetX;
//     let top = e.offsetY;
//     chaser.style.left = `${left - 30}px`
//     chaser.style.top = `${top - 20}px`
//
// })
//
//     chaser.style.left = x + "px";
//     chaser.style.top = y + "px";
//
// });