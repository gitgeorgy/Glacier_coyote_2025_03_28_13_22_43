let scene = 1;
let cols, rows;
let spacing = 60;
let t = 0;

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
  cols = width / spacing;
  rows = height / spacing;
  noFill();
  
}

function draw() {
  if (frameCount % 50 ==0){
    if (scene < 2) {
      scene++;
    } else {
      scene = 1;
    }
  }
  
  if (scene == 1) {
    scene1();
  }
  if (scene == 2) {
    scene2 ();
  }

} 
  
  


function scene1() {
  if (mouseIsPressed == true){
    fill(random(0,220),random(0,220),random(0,220));
  circle(random (0, windowWidth), random(0, windowWidth), random(0,100));
  }else {

fill(random(0,220),random(0,220),random(0,220));
  rect(random (0, windowWidth), random(0, windowWidth), random(0,100), random(0,100));

} 

}

function scene2() {
  background(10, 10, 30);
  t += 0.03;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      push();
      let x = i * spacing;
      let y = j * spacing;
      translate(x + spacing / 2, y + spacing / 2);
      
      let size = map(sin(t + i * 0.3 + j * 0.3), -1, 1, 10, spacing * 0.9);
      let angle = map(cos(t + i * 0.2 + j * 0.2), -1, 1, 0, TWO_PI);
      
      stroke(lerpColor(color('#ff5733'), color('#33aaff'), sin(t + i * 0.1 + j * 0.1)));
      strokeWeight(2);
      
      if ((i + j) % 3 == 0) {
        ellipse(0, 0, size, size);
      } else if ((i + j) % 3 == 1) {
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, size, size);
      } else {
        rotate(angle * 1.5);
        line(-size / 2, -size / 2, size / 2, size / 2);
        line(-size / 2, size / 2, size / 2, -size / 2);
      }
      pop();
    }
  }
}
