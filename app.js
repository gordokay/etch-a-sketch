const grid = document.querySelector(".grid");

for(let i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("hovered-cell")
        })
        row.appendChild(cell);
    }
    grid.appendChild(row);
}