const sketchContainer = document.querySelector(".sketchContainer");
const resetButton = document.querySelector("#reset");
let girdSize = 16;
let blockAmount = girdSize ** 2;
let gridRow = sketchContainer.style.gridTemplateRows = `repeat(${girdSize}, 1fr)`;
let gridColumn = sketchContainer.style.gridTemplateColumns = `repeat(${girdSize}, 1fr)`;

function addTiles(blockAmount, penColor) {
    for (let i = 0; i < blockAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tiles");
        tile.addEventListener("mouseover", penColor);
        sketchContainer.appendChild(tile);
    }
}
addTiles(blockAmount, blackPen);

//Hover Colors
function blackPen() {
    this.style.backgroundColor = "black";
}
function eraser() {
    this.style.backgroundColor = "white";
}
function rainbowPen() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;
    this.style.backgroundColor = rgb;
    this.removeEventListener("mouseover", rainbowPen);
}
function grayscalePen() {
    this.style.backgroundColor = "black";
    if (this.style.opacity) {
        let opacityPercent = parseFloat(this.style.opacity);
        this.style.opacity = opacityPercent + .1;
    }else{
        this.style.opacity = .1;
    }
}

function deleteTiles() {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
}
function clearTable() {
    deleteTiles();
    girdSize = girdSize;
    blockAmount = girdSize ** 2;
    gridRow = sketchContainer.style.gridTemplateRows = `repeat(${girdSize}, 1fr)`;
    gridColumn = sketchContainer.style.gridTemplateColumns = `repeat(${girdSize}, 1fr)`;
}

//Rainbow Button
const rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click" ,() => {
    clearTable()
    addTiles(blockAmount, rainbowPen);
});
//Grayscale Button
const grayscaleButton = document.getElementById("grayscale");
grayscaleButton.addEventListener("click" ,() => {
    clearTable()
    addTiles(blockAmount, grayscalePen);
});

//reset button
function reset() {
    girdSize = prompt("chose");
    clearTable()
    addTiles(blockAmount, blackPen);
}

resetButton.addEventListener("click", reset);
