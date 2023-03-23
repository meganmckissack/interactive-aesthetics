let sound;
let button1;
let button2;
let soundPeaks;


function preload() {
  sound = loadSound('data/waves.wav');
}

function setup() {
  createCanvas(400, 400);
  // sound.loop();
  button1 = createButton('play sound');
  button1.position(235, 400);
  button1.mousePressed(playSound);

  button2 = createButton('stop sound');
  button2.position(320, 400);
  button2.mousePressed(stopSound);

  //using the getPeaks method on the sound variable and assigning it to the soundPeaks variable
  //we're using the width of the canvas as the lenght of the array of peaks
  soundPeaks = sound.getPeaks(width);
  console.log(soundPeaks); //can make sure we're getting data by logging the results
}

function playSound() {
  sound.play();
}

function stopSound() {
  sound.stop();
}

function draw() {
  background(0);
  stroke(221,160,221);
  for(let i = 0; i < soundPeaks.length; i++){
    //line takes values - x1, y1, x2, y2
    //we're multiplying the soundPeaks data by 100 because the data points are so small
    line(i, height/2 + soundPeaks[i] * 100, i, height/2 - soundPeaks[i] * 100);
  }
}

