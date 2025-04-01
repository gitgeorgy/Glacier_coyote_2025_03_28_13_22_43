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
     noStroke();
    
  }
  function draw() {
    background(0);
    rectMode(CENTER);
    translate(width / 2, height / 2);
  
    if (frameCount % 1 == 0) {
      for (let u = 0; u < 16; u++) {
        for (let i = 0; i < 16; i++) {
          push();
          
          
          let shapeType = random(['rect', 'ellipse']);
          
          // Случайный угол вращения
          rotate(radians(i * 22.5 * frameCount));
          translate(0, 100);
          
          // Случайный цвет с прозрачностью
          let r = random(255);
          let g = random(255);
          let b = random(255);
          let alpha = random(100, 255); // прозрачность от 100 до 255
          fill(r, g, b, alpha);
          
          // Рисуем случайную форму
          if (shapeType === 'rect') {
            rect(0, 0, random(10, 40), random(30, 100)); // случайный размер прямоугольника
          } else {
            ellipse(0, 0, random(10, 40), random(30, 100)); // случайный размер эллипса
          }
          
          pop();
        }
      }
    }
  }




  