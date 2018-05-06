'use strict';

// function setup() {
//     createCanvas(500,500);
//     a = 10;
//     draw();
// }

// var a = 10;

// function draw() {

//     fill(90, 90, 90);
//     ellipse(250, 150, 100, 100);

//     fill(90, 90, 90);
//     rect(255, 199, 10, 160);
//     }
// }



var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(10, 60, 0)';
ctx.fillRect(0, 0, 400, 400);

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(25, 100, 175, 50);
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.strokeRect(25, 25, 175, 200);
ctx.lineWidth = 5;

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
// function setup(){

//     createCanvas(500,500);
  
//     // initialize a, assign the value 5 to a
//     a = 5;
//   }
  
//   function draw(){
//     background(0,0,0);
  
//     fill(255,255,255);
//     text("M for Stickman, F for Flower",10,30);
  
//     if (a == 5)
//     {
  
  
//       ellipseMode (CENTER);
  
//   ellipse (150,60,50,50);
//   point (140,60);
//   point (160,60);
  
//   rectMode (CENTER);
  
//   rect (150,135,50,100);
  
//   line (125,85,100,160);
//   line (175,85,200,160);
//   line (130,185,130,250);
//   line (130,250,125,250);
//   line (170,185,170,250);
//   line (170,250,175,250);
//     }
// }
