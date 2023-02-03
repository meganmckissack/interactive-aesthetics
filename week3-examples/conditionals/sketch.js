var x = 20;  
var speed = 3;  

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(220, 0, 230);

  //gives the circle x starting point the same as the variable and can be changed later
  circle(x, 200, 100, 100);
  
  // this code block animates the ball to move on the x-axis
  
  // add 1 to x value updates x to equal the new value
  x = x + 1;
  // short hand version of x = x + 1
  x++;
 
  // this code block gives the illusion that the ball bounces of the x-axis edges

  //applies a conditional statement that if the x value is greater than 400 or the x value is less than 0, we speed is multiplied by -1 and assigned the new value
  /*
  if (x > 400 || x < 0) {
    speed = speed * -1;
  }
  
  // adds the speed value and the value of x and assigns the new value to x
  x = x + speed
  */
}