//example of variables
let x = 50;
let y = 50;

// the setup function runs once
function setup() {
  createCanvas(400, 400); // width and height of the canvas in pixels
}

// the draw function runs in a continuous loop
function draw() {
  // a color function with one argument is grayscale, 0 = black, 255 = white
  background(220); 

  // color function with three arguments are (red, green, blue) with the intensitey of that color ranging from 0 = none of that color, 255 = the most amount of that color
  background(0, 0, 255); //should return a bright blue background

  fill(200, 0, 0);
  // example of a shape
  // a circle's starting point is in the center
  circle(0, 0, 100);  // x = 0, y = 0, radius = 100;

  rect(0, 0, 50, 50); // x = 0, y = 0, width = 50, height = 50;
}
