let vrKid;
let button;
let playing;



function preload() {
  vrKid = createVideo('data/vrKid.mp4');
}

function setup() {
  createCanvas(400, 700);

  button = createButton('play');
  button.position(310, 620);
  //is a callback function to use the toggle function as the parameter for the mousePressed function
  button.mousePressed(toggle);
}

function toggle() {
  if(playing) {
    //if video is playing, toggle button to pause state
    vrKid.pause();
    //update html of button to play when video is paused
    button.html("play");
  } else {
    //loop video if video is in a pause state, toggle button to play again
    vrKid.loop();
    //updated html of button to state pause while video is playing
    button.html("pause");
  }
  //state of playing variable switch to not playing (! means not or false) if the other state isn't true
  playing = !playing;
}

function draw() {
  background(200);
  //draws the video onto the canvas instead of as a stand alone element
  image(vrKid, 15, 15);
  //adds image filter to video - see filter reference for other options
  // filter(POSTERIZE, 3);
}
