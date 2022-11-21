function makeGrid(cellNumber){
  for(let i = 0; i < cellNumber; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < cellNumber; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    document.body.appendChild(row);
  }
}

function makeDrawable(){
  const cells = document.querySelectorAll('.cell');
  for(let cell of cells) {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'pink';
    }, once = true);
  }
}

makeGrid(16);
makeDrawable();