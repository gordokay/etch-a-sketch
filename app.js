const GRID_SIZE = 480;

function makeGrid(cellNumber) {
  for(let i = 0; i < cellNumber; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < cellNumber; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${GRID_SIZE / cellNumber}px`;
      cell.style.height = `${GRID_SIZE / cellNumber}px`;
      row.appendChild(cell);
    }
    document.body.appendChild(row);
  }
  makeDrawable();
}

function deleteGrid() {
  for(let row of document.querySelectorAll('.row')) {
    for(let child of row.childNodes) {
      row.removeChild(child);
    }
    document.body.removeChild(row);
  }
}
 
function makeDrawable() {
  const cells = document.querySelectorAll('.cell');
  for(let cell of cells) {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'pink';
    }, once = true);
  }
}

function etchASketch() {
  const dimensionBtn = document.querySelector('button');
  dimensionBtn.addEventListener('click', () => {
    let dimension = prompt('Enter grid dimension');
    deleteGrid();
    makeGrid(dimension);
  })
  makeGrid(16);
}

etchASketch();