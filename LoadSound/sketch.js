let sound;
let button1;
let button2;
let img;

function preload() {
  soundFormats('wav');
  sound = loadSound('data/waves');
  img = loadImage('data/waves.gif');
}

function setup() {
  createCanvas(400, 400);
  button1 = createButton('play sound');
  button1.position(235, 400);
  button1.mousePressed(playSound);

  button2 = createButton('stop sound');
  button2.position(320, 400);
  button2.mousePressed(stopSound);

}

function playSound() {
  sound.play();
}

function stopSound() {
  sound.stop();
}

function draw() {
  image(img, 0, 0, width, height);
}