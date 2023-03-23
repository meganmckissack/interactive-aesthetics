let webCapture;
let graphicLayer;

function setup() {
  createCanvas(1000, 800);
  background(220);
  //createCapture() is a buit in p5 function that gets the webcam video and we store it in the variable webCapture
  webCapture = createCapture(); 
  //hides the html video capture element
  webCapture.hide();
}

function draw() {
  // background(220);
  //grab the pixel values of the video
  webCapture.loadPixels();
  //draws the webcam video on the canvas
  image(webCapture, 20, 20);
  // filter('invert');
  // //drawing the video again in a different position without a filter
  // image(webCapture, 200, 200);

  for(let i = 0; i < 100; i++) {
      let x = random(webCapture.width);
      let y = random(webCapture.height);
      let pixelColor = webCapture.get(x, y);
      fill(pixelColor);
      circle(x, y, 50);
    }
}
  