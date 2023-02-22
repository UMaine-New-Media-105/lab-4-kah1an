function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  tri(0, 0, 90, 50, 70, 120, 100, 200, 200);
  myEllipse( 200, 200, 30, 60, 50, 75, 250);
  myQuad(100, 300, 156, 270, 100, 359, 190, 300, 96, 54, 30 );
}

function tri(x1, y1, x2, y2, x3, y3, r, g, b) {
  fill(r, g, b);
  triangle(x1, y1, x2, y2, x3, y3);
}

function myEllipse(x, y, w, h, r, g, b) {
  fill(r, g, b);
  ellipse(x, y, w, h);
}

function myQuad(x1, y1, x2, y2, x3, y3, x4, y4, r, g, b) {
  fill(r, g, b);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}
