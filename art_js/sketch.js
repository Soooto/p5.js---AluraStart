function setup() {
  createCanvas(800, 800);
  background("black");
}

function draw() {
  stroke("pink");
  fill("purple");

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
}
