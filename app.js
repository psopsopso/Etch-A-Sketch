const container = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const rainbowMode = document.querySelector("#rainbow-mode");

resetBtn.addEventListener("click", resetGrid);

const BASE_WIDTH_HEIGHT = 64;

for (let i = 0; i < BASE_WIDTH_HEIGHT * BASE_WIDTH_HEIGHT; i++) {
  const div = document.createElement("div");
  div.classList.add("etch-div");
  container.appendChild(div);
  div.addEventListener("mouseenter", () => {
    if (rainbowMode.checked) {
      div.style.backgroundColor = getRandomColor();
    } else {
      div.style.backgroundColor = "black";
    }
  });
}

function resetGrid() {
  gridSquares = document.querySelectorAll(".etch-div");
  gridSquares.forEach((square) => {
    square.style.backgroundColor = "lightgray";
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
