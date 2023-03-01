const container = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const generateBtn = document.querySelector("#generate-btn");
const gridsizeInput = document.querySelector("#gridsize-input");
// const clickMode = document.querySelector("#click-mode");

resetBtn.addEventListener("click", resetColors);
// generateBtn.addEventListener("click", generateGrid);
gridsizeInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    generateGrid();
  }
});

function generateGrid() {
  container.innerHTML = "";
  let squares = gridsizeInput.value;
  setGridTemplate(squares);
  for (let i = 0; i < squares * squares; i++) {
    const square = createSquare();
    container.appendChild(square);
  }
}

function setGridTemplate(squares) {
  container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
}

function resetColors() {
  gridSquares = document.querySelectorAll(".etch-div");
  gridSquares.forEach((square) => {
    square.style.backgroundColor = "black";
  });
}

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("etch-div");
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

generateGrid();
