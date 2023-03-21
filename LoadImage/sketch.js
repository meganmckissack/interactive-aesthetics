//declare variable to store img
let img;

//p5 function to preload image so it's ready when code runs
function preload() {
  img = loadImage("images/dancer.png");

}

//creates our canvas size and offsets our image
function setup() {
  createCanvas(1024, 780);
  image(img, 0, 0);
  
  makeBtn = createButton("Save Canvas");
  makeBtn.position(20, 750);
  makeBtn.mousePressed(saveToFile);
}

function draw() {
  //first x and y coordinates of image details are copied and the new copy's target position and width are randomized and stored in variables we can use later
  let x1 = random(width);
  let y1 = random(height);

  let x2 = round(x1 + random(-10, 10));
  let y2 = round(y1 + random(-10, 10));

  let w = round(random(10, 40));
  let h = height;

  //the get function copies some of the canvas content and set pastes it into the new x2,y2 position
  set(x2, y2, get(x1, y1, w, h));
}

//function clears and restarts loop based on which key is pressed.
function keyReleased() {
  if (key || keyCode == BACKSPACE) {
    clear();
    image(img, 0, 0);
  }
  return false; // prevent any default behavior
}

function saveToFile() {
  // Save the current canvas to file as png
  saveCanvas('mycanvas', 'png')
}