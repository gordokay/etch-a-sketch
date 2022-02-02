const grid = document.querySelector(".grid");
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
    const rows = grid.childNodes;
    for(let row of rows){
        row.childNodes.forEach(cell => {
            cell.classList.remove("hovered-cell");
        })
    }
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
 makeGrid();