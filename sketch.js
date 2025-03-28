let rectY = 0;
let rectSpeed = 3;
let angle = 0; // Rotation angle

function setup() {
  createCanvas(400, 400);
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