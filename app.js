let squares = document.querySelectorAll(".square");
const clear = document.querySelector(".clear");
const container = document.querySelector(".container");

function deletePixel() {
  squares.forEach((square) => square.remove());
}

function makeBoard(pixel) {
  let totalPixels = pixel * pixel;
  for (let i = 0; i < totalPixels; i++) {
    let newPixel = document.createElement("div");
    newPixel.classList.add("square");
    container.appendChild(newPixel);
  }
}

function askUser() {
  let pixelSize = +window.prompt("Enter grid size between 1 - 64", 64);
  if (pixelSize > 64 || pixelSize < 0) {
    return;
  }
  deletePixel();
  makeBoard(pixelSize * pixelSize);
  container.style.gridTemplate = `repeat(${pixelSize}, 1fr) / repeat(${pixelSize}, 1fr)`;
  squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", changeColor)
  );
}

function reset() {
  askUser();
  squares.forEach((square) => (square.style.backgroundColor = "white"));
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  this.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

function init() {
  squares.forEach((square) =>
    square.addEventListener("mouseover", changeColor)
  );
  clear.addEventListener("click", reset);
}
init();
