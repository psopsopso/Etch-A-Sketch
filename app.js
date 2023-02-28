const container = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const rainbowMode = document.querySelector("#rainbow-mode");

resetBtn.addEventListener("click", resetGrid);

for (let i = 0; i < 64 * 64; i++) {
  const div = document.createElement("div");
  div.classList.add("etch-div");
  container.appendChild(div);
  div.addEventListener("mouseenter", () => {
    if (rainbowMode.checked) {
      div.style.backgroundColor = getRandomColor();
    }
    div.style.backgroundColor = "black";
  });
}

function resetGrid() {
  gridSquares = document.querySelectorAll(".etch-div");
  gridSquares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
