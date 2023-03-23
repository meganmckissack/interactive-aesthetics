let webCapture;
let graphicLayer;

function setup() {
  createCanvas(1000, 800);
  //createCapture() is a buit in p5 function that gets the webcam video and we store it in the variable webCapture
  webCapture = createCapture(); 
  webCapture.hide();
  graphicLayer = createGraphics();
}

function draw() {
  background(220);
  //grab the pixel values of the video
  webCapture.loadPixels();
  let x = random(webCapture.width);
  let y = random(webCapture.height);
  let pixelColor = webCapture.get(x, y);

  //draws the webcam video on the canvas
  image(webCapture, 20, 20);
  filter('invert');
  //drawing the video again in a different position without a filter
  image(webCapture, 200, 200);
  
}