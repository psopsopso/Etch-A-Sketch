const container = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const generateBtn = document.querySelector("#generate-btn");
const gridsizeInput = document.querySelector("#gridsize-input");
// const clickMode = document.querySelector("#click-mode");

resetBtn.addEventListener("click", resetColors);
generateBtn.addEventListener("click", generateGrid);

function generateGrid() {
  container.innerHTML = "";
  let squares = gridsizeInput.value;
  for (let i = 0; i < squares * squares; i++) {
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    const square = document.createElement("div");
    square.classList.add("etch-div");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
    container.appendChild(square);
  }
}

function resetColors() {
  gridSquares = document.querySelectorAll(".etch-div");
  gridSquares.forEach((square) => {
    square.style.backgroundColor = "black";
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

generateGrid();
