const container = document.querySelector("#main-container");
const resetBtn = document.querySelector("#reset-btn");
const generateBtn = document.querySelector("#generate-btn");
const gridsizeInput = document.querySelector("#gridsize-input");
const modeToggleBtn = document.querySelector("#mode-toggle");
const colorPicker = document.querySelector("#color-picker");

let isRainbowMode = true;

resetBtn.addEventListener("click", resetColors);

gridsizeInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        generateGrid();
    }
});

modeToggleBtn.addEventListener("click", () => {
    isRainbowMode = !isRainbowMode;
    modeToggleBtn.textContent = isRainbowMode ? "Rainbow Mode" : "Plain Mode";
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
    let isMouseDown = false;

    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    square.addEventListener("mousemove", () => {
        if (isMouseDown) {
            if (isRainbowMode) {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = colorPicker.value;
            }
        }
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
