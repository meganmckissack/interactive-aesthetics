function setup() {
  createCanvas(400, 400);
  background(220)
}

function draw() {
  // background(220);
  // flower(0, 40, 30, 80);
  // flower(10, 50, 40, 90);

  line(mouseX, mouseY, 40, 40);
  // circle(mouseX, mouseY, 60);
}

// function flower(x, y, d, d2) {
//   translate(mouseX, mouseY);
//   fill(200, 150, 127);
//   for (var i = 0; i < 10; i ++) {
//     ellipse(x, y, d, d2);
//     rotate(PI/5);
//   }
// }