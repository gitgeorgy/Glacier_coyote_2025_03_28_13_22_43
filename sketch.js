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
   frameRate(12);
  background(0); background(random(0,255),random(0,255),random(0,255));
}

function draw() {
  
  if (mouseIsPressed == true){
    fill(random(0,220),random(0,220),random(0,220));
  circle(random (0, windowWidth), random(0, windowWidth), random(0,100));
  }else {

fill(random(0,220),random(0,220),random(0,220));
  rect(random (0, windowWidth), random(0, windowWidth), random(0,100), random(0,100));

} 
  
  
}