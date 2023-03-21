let grad1;
let gui;

function setup() {
	createCanvas(500, 500);
	textFont('Roboto');  //font family name, using quotations because it's a string
	grad1 = createLinearGradient(0, 200);
	grad1.colors(0, "lightblue", 0.5, "pink", 1, "magenta");

	gui = createGui('slider-range-2');
	sliderRange(1, 200, 1);
} 

function draw() {
	textSize(40);
	text("text we want to render", 30, 30); 
	fillGradient(grad1);
  rect(0, 0, 200, 200); 
}