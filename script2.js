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
// ////////////////////////////////////////////
// // Chaser
// ////////////////////////////////////////////
// // chaser circle
// let boxA = document.querySelector('.box');
// let circle = document.getElementById('circle');
// circle.width = 30+'px';
// circle.height = 30+'px';
//
// boxA.addEventListener('mousemove', (e) => {
//     let left = e.offsetX;
//     let top = e.offsetY;
//     circle.style.left = `${left - 30}px`
//     circle.style.top = `${top - 20}px`
//
// })
//
// circle.style.left = x + "px";
// circle.style.top = y + "px";


const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d');

// To set width and height of current viewport do
canvas.width  = window.innerWidth   // canvas.width  = 900
canvas.height = window.innerHeight    // canvas.height = 600
// x = 10
// y = 20



const width = 800;
const height= 400;
drawRectangle((canvas.width/2)-(width/2), (canvas.height/2)-(height/2), width, height, 'yellow', '');

drawRectangle(210, 10, 60, 100,  '','red');
drawRectangle(215, 15, 50, 90,  '','orange');
drawRectangle(220, 20, 40, 80,  '','yellow');
drawRectangle(225, 25, 30, 70,  '','green');
drawRectangle(230, 30, 20, 60,  '','blue');
drawRectangle(235, 35, 10, 50,  '','indigo');
drawRectangle(240, 40, 3, 40,  'violet','');

drawCircle(300, 300, 75, 'red');
drawCircle(300, 300, 70, 'orange');
drawCircle(300, 300, 65, 'yellow');
drawCircle(300, 300, 60, 'green');
drawCircle(300, 300, 55, 'blue');
drawCircle(300, 300, 50, 'indigo');
drawCircle(300, 300, 45, 'violet');

let a = [400, 200];   // [x, y]
let b = [420, 290];   // [x, y]
let c = [600, 300];   // [x, y]
drawTriangle(a, b, c);



function drawTriangle(a, b, c){
    ctx.beginPath();
    console.log(`A=${a} B=${b} C=${c}`);
    alert(`A=${a[0]}  -  B=${a[1]}`);
    drawLine(a[0],a[1], b[0],b[1], color);    //drawLine(xFrom, yFrom, xTo, yTo, color="DeepPink")
    drawLine(b[0], b[1], c[0], c[1], color);
    drawLine(c[0], c[1], a[0], a[1], color);
    ctx.closePath()
}

/********************************************************************************
*   drawRectangle Function as written for Becode Class 2022 @ Antwerpen
*   -------------------------------------------------------------------
* Usage: drawRectangle (x, y, width, height, color, fillColor)
* ------
* x and y are self explanatory width and height also.
 *
 * Added: x= center and y= center
 *         if(x === 'center' || y === 'center'){
 *             ctx.strokeRect((canvas.width/2)-(width/2), (canvas.height/2)-(height/2), width, height, color);
 *         } else {
 *             ctx.strokeRect(x, y, width, height, Color);
 *         }
 *
* Color is a bit adapted to use include fillColor
 ******************************************************************************** */
function drawRectangle(x=10, y=20, width=200, height=300, color='red', fillColor=''){
    // Allways Step 1. fire up the beginPath method
        ctx.beginPath()
    if(fillColor === ''){
        // pencil style to just stroke (no fill)
        ctx.strokeStyle = color;
        // draw rectangle without fill Color
            ctx.strokeRect(x, y, width, height, color);
    } else {
        // draw rectangle with fill color!
        ctx.fillStyle = fillColor;
        ctx.fillRect(x, y, width, height, '', fillColor);
    }
}       //function drawRectangle


/*****************************************************************************************
*           Function drawCircle as written for Becode Class 2022 @ Antwerpen
*         ------------------------------------------------------------------
*   usage:    drawCircle(x, y, radius, color)
*   ------
*****************************************************************************************/
function drawCircle(x=300, y=300, radius= 75, color=''){
    // Step 1. Invoke beginPath method
    ctx.beginPath()
    // Step 2. create arc with start angle =  0      end angle = 360degrees or 2*PI
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    // Fill style with Lavender color
    ctx.fillStyle = color;
    //Step 3. Now ink on canvas
    ctx.fill()
}
function drawLine(xFrom, yFrom, xTo, yTo, color="DeepPink"){
    // Step 1. Invoke beginPath method
    ctx.beginPath();
    // Point A
    ctx.moveTo(xFrom, yFrom);
// Point B
    ctx.lineTo(xTo, yTo);

    ctx.strokeStyle = color;
    ctx.stroke();

}