const GRID_SIZE = 480;
let color = 'rainbow';

function makeGrid(cellNumber) {
  if(cellNumber > 100) {
    cellNumber = 100;
  }
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

function changeColor() {
  if(!this.style.backgroundColor) {
    this.style.opacity = 0.1;
  } else if (Number(this.style.opacity) < 1) {
    this.style.opacity = Number(this.style.opacity) + 0.1;
  }
  if(color === 'rainbow') {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r},${g},${b})`
  } else {
    this.style.backgroundColor = color;
  }
}
 
function makeDrawable() {
  const cells = document.querySelectorAll('.cell');
  for(let cell of cells) {
    cell.addEventListener('mouseover', changeColor);
  }
}

function etchASketch() {
  const dimensionBtn = document.querySelector('button');
  const colorSelectors = document.querySelectorAll('.color-selector');
  colorSelectors.forEach(colorSelector => {
    colorSelector.addEventListener('click', () => {
      if(getComputedStyle(colorSelector).getPropertyValue('background-color') !== 'rgba(0, 0, 0, 0)') {
        color = getComputedStyle(colorSelector).getPropertyValue('background-color');
      } else {
        color = 'rainbow';
      }
    })
  })
  dimensionBtn.addEventListener('click', () => {
    let dimension = prompt('Enter grid dimension');
    deleteGrid();
    makeGrid(dimension);
  })
  makeGrid(16);
}

etchASketch();