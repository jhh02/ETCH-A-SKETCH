let squares = document.querySelectorAll(".square");
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const color = document.querySelector(".color");
const userSelect = document.querySelector("input");
const newPixel = document.querySelector('.newPixel')
const BG_WHITE = "white";

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

function askUserPixel() {
  let pixelGrid = +window.prompt("Enter grid size between 1 - 64", 64);
  if (pixelGrid > 64 || pixelGrid < 0 || isNaN(pixelGrid) || null) {
    return;
  }
  deletePixel();
  makeBoard(pixelGrid);
  container.style.gridTemplate = `repeat(${pixelGrid}, 1fr) / repeat(${pixelGrid}, 1fr)`;
  squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseenter", changeColor)
  );
}

function reset() {
  squares.forEach((square) => (square.style.backgroundColor = BG_WHITE));
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function erase(e) {
  squares.forEach((square) => {
    square.addEventListener("mouseenter", erasing);
  });
}

function erasing(e) {
  this.style.backgroundColor = "white";
}

function drawRainbow() {
  squares.forEach((square) => {
    square.removeEventListener("mouseenter", erasing);
    square.removeEventListener("mouseenter", drawUserColor);
    square.addEventListener("mouseenter", changeColor);
  });
}

function changeColor(e) {
  this.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

function drawUserColor(e) {
  e.target.style.backgroundColor = `${userSelect.value}`;
}

function drawColor() {
  squares.forEach((square) => {
    square.removeEventListener("mouseenter", erasing);
    square.addEventListener("mouseenter", drawUserColor);
  });
}

function init() {
  squares.forEach((square) =>
    square.addEventListener("mouseenter", changeColor)
  );
  clear.addEventListener("click", reset);
  eraser.addEventListener("click", erase);
  rainbow.addEventListener("click", drawRainbow);
  color.addEventListener("click", drawColor);
  newPixel.addEventListener('click', askUserPixel)
}
init();
