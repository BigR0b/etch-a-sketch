const sketchContainer = document.querySelector(".sketchContainer");

function newTiles() {
    for (let i = 0; i < 256; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tiles");
    
        sketchContainer.appendChild(tile);
    }
}
newTiles()