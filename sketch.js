let rectY = 0;
let rectSpeed = 3;
let angle = 0; // Rotation angle

function windowResized() {
  console.log("resized");
  let width = document.querySelector("#sketch-div").clientWidth;
  console.log(width);
  let height = document.querySelector("#sketch-div").clientHeight;
  console.log(height);
 
  resizeCanvas(width, windowHeight);
  
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('sketch-div')
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  frameRate(90);
}

function draw() {
  background(205);
  noStroke();

  rectY = rectY + rectSpeed;
  rectMode(CENTER);
  rect(height/2, rectY, 50, 50);

  if (rectY > height || rectY < 0 ) {
    //rectSpeed = -5;
    // rectY = 0;
    rectSpeed = rectSpeed*-1;
    fill(random(0,255),random(0, 255),random(0, 255));
  } 

   
}