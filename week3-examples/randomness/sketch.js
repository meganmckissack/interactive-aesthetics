
function setup() {
  createCanvas(400, 400);
  background(220);  // adding the background color to setup so it doesn't get redrawn
}

function draw() {

  // declaring my circle values as variables so I can generate random values
   var circleX = random(width);
   var circleY = random(height);
   var circleDia = random(20, 100);

  //noStroke();

  // using the mouse x position value to change the color 
  //fill(mouseX, 230, 220);

  // making each of my red, green, and blue values a random number between 0 and 255(max color value)
  fill(random(255), random(255), random(255));

  
  circle(circleX, circleY, circleDia);
}