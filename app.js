const grid = document.querySelector(".grid");
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
    let squaresPerSide = prompt("Enter a number of grid squares per side (no more than 100)")
    if(squaresPerSide > 100){
        while(squaresPerSide > 100){
            squaresPerSide = prompt("Enter a number less than 100");
        }
    }
    clearGrid();
    makeGrid(squaresPerSide);
})

function makeGrid(squaresPerSide = 16){
    
    for(let i = 0; i < squaresPerSide; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < squaresPerSide; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", () => {
                cell.classList.add("hovered-cell")
            })
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function clearGrid(){
    const rows = grid.childNodes;
    rows.forEach(row => {
        while(row.firstChild){
            row.removeChild(row.firstChild);
        }
    })
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

 makeGrid();