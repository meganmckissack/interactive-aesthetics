let climate;

function preload() {
  climate = loadTable('data/climateColors.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  text(climate.getRowCount() + ' total rows in table');
  text(climate.getColumnCount() + ' total columns in table');

  text(climate.getColumn('year'));
}

function draw() {
  background(220);
}
