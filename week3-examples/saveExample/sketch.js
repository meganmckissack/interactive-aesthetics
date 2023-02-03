var count = 1; 

function setup(){ 
  createCanvas(600, 400); 
  background(255); 
  noStroke(); 
} 

function draw() { 
  if (mouseIsPressed) { 
    fill(255, 0, 0, 40); 
    ellipse(mouseX, mouseY, 30, 30); 
  } 
} 

function keyPressed() { 
  // each keyboard key has a number - 32 is the spacebar
  if (keyCode == 32) { 
    saveCanvas('fileName' + count, 'png'); 
    count++; 
  } 
}