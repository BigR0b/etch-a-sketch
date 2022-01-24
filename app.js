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
addTiles(blockAmount, grayscalePen);

function deleteTiles() {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
}

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
}
function grayscalePen() {
    this.style.backgroundColor = "black";
    let opacity = this.style.opacity += .1;
    // if (opacity < 1) {
    //     opacity += 0.1;
    // }

}
//Rainbow Button
const rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click" ,() => {
    deleteTiles();
    girdSize = girdSize;
    blockAmount = girdSize ** 2;
    gridRow = sketchContainer.style.gridTemplateRows = `repeat(${girdSize}, 1fr)`;
    gridColumn = sketchContainer.style.gridTemplateColumns = `repeat(${girdSize}, 1fr)`;
    addTiles(blockAmount, rainbowPen);
})
//Grayscale Button


//reset button
function reset() {
    deleteTiles();
    girdSize = prompt("chose");
    blockAmount = girdSize ** 2;
    gridRow = sketchContainer.style.gridTemplateRows = `repeat(${girdSize}, 1fr)`;
    gridColumn = sketchContainer.style.gridTemplateColumns = `repeat(${girdSize}, 1fr)`;
    addTiles(blockAmount, blackPen);
}

resetButton.addEventListener("click", reset);
