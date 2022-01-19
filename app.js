const sketchContainer = document.querySelector(".sketchContainer");
const resetButton = document.querySelector("#reset");
let girdSize = 12;
let blockAmount = girdSize * girdSize;
let gridRow = sketchContainer.style.gridTemplateRows = `repeat(${girdSize}, 1fr)`;
let gridColumn = sketchContainer.style.gridTemplateColumns = `repeat(${girdSize}, 1fr)`;


function addTiles() {
    for (let i = 0; i < blockAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tiles");
        tile.addEventListener("mouseover", blackPen);
        sketchContainer.appendChild(tile);
    }
}
addTiles()
const gridTiles = document.querySelectorAll(".tiles");

//Hover Colors
function blackPen() {
    this.style.backgroundColor = "black";
}
function eraser() {
    this.style.backgroundColor = "white";
}

// gridTiles.forEach(tile => {
//     tile.addEventListener("mouseover", blackPen);
// });

//reset button
function reset() {
    
    girdSize = prompt("chose");
    blockAmount = girdSize * girdSize;
    gridRow = sketchContainer.style.gridTemplateRows = `repeat(${girdSize}, 1fr)`;
    gridColumn = sketchContainer.style.gridTemplateColumns = `repeat(${girdSize}, 1fr)`;
}
resetButton.addEventListener("click", reset);
