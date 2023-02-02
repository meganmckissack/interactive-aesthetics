function setup() {
  createCanvas(400, 400);
  //initialize background in setup so it doesn't redraw itself in the draw loop
  background(0); 
}

function draw() {
  noStroke();
  fill(220, 0, 200);
  /* using the mouseX and mouseY variables to track mouse movement
  coordinates and use those coordinates for the x and y values for the circle */
  circle(mouseX, mouseY, 30);
}
