function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawBunnyCarrot();
  
}

function carrot(x, y, size, cColor, sColor) {
  push();
  translate(x, y);
  scale(size);
  //carrot
  fill(cColor);
  noStroke();
  strokeWeight(2);
  triangle(0, 20, 50, 20, 25, 100);
  stroke(sColor);
  line(10, 0, 25, 20);
  line(40, 0, 25, 20);
  line(25, 0, 25, 20);  
  pop();
}

function bunny(x, y, size, bColor, eColor, fColor) {
  push();
  translate(x, y);
  scale(size);
  //bunny ears
  noStroke();
  fill(bColor);
  ellipse(20, 30, 20, 60); //left
  ellipse(50, 30, 20, 60); //right
  fill(eColor);
  ellipse(20, 40, 10, 40); //left
  ellipse(50, 40, 10, 40); //right
  //head
  fill(bColor);
  ellipse(35, 70, 60, 60); //head
  //face
  stroke(fColor);
  strokeWeight(7);
  point(20, 65);//left eye
  point(50, 65);//right eye
  stroke(eColor);
  triangle(33, 77, 37, 77, 35, 80); //nose
  pop();
  
}
function drawBunnyCarrot () {
  if (mouseIsPressed) {
   carrot(200, 200, 1, 'orange', 'green'); 
  } else {
   bunny(0, 0, 1, 'white', 'pink', 'black');
  }
}
