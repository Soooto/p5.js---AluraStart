let cor;
let horizontalPosition; // x
let verticalPosition; // y

function setup() {
  createCanvas(800, 800);
  background(color(random(0, 255), random(0, 255), random(0, 255)));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  horizontalPosition = 200;
  verticalPosition = 200;
}

function draw() {
  fill(cor);
  circle(horizontalPosition, verticalPosition, 20);

  if (mouseX < horizontalPosition) {
    horizontalPosition = horizontalPosition - 1;
  }
  if (mouseX > horizontalPosition) {
    horizontalPosition = horizontalPosition + 1;
  }
  if(mouseY < verticalPosition) {
    verticalPosition--;
  }
  if(mouseY > verticalPosition) {
    verticalPosition++;
  }
  
  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0,100));
  }
}
