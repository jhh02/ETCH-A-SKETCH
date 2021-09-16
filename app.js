const squares = document.querySelectorAll(".square");
const clear = document.querySelector(".clear");
const pixel = document.querySelector(".pixel");

function clean() {
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
  clear.addEventListener("click", clean);
}
init();
