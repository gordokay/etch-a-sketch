function etchASketch() {
  const GRID_SIZE = 480;
  const SQUARES_PER_SIDE = 16;
  const grid = document.querySelector('.grid');
  const colorButtons = document.querySelectorAll('.palette button');
  const colorPicker = document.querySelector('input');
  const clearButton = document.querySelector('.controls button');
  const squaresPerSideSelector = document.querySelector('select');

  let color = 'rainbow';

  function makeGrid(squaresPerSide) {
    for(let i = 0; i < squaresPerSide; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for(let j = 0; j < squaresPerSide; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${GRID_SIZE / squaresPerSide}px`;
        square.style.height = `${GRID_SIZE / squaresPerSide}px`;
        row.appendChild(square);
      }
      grid.appendChild(row);
    }
  }

  function makePaintable() {
    const squares = document.querySelectorAll('.square');
    for(let square of squares) {
      square.addEventListener('mouseover', changeColor);
    }
  }

  function connectControls() {
    colorButtons.forEach(colorButton => {
      colorButton.addEventListener('click', () => {
        color = colorButton.className;
      })
    })

    colorPicker.addEventListener('input', () => {
      color = colorPicker.value;
    })

    clearButton.addEventListener('click', () => {
      clearGrid();
    })

    squaresPerSideSelector.addEventListener('change', () => {
      deleteGrid();
      makeGrid(Number(squaresPerSideSelector.value));
      makePaintable();
    })
  }
  
  function deleteGrid() {
    for(let row of document.querySelectorAll('.row')) {
      for(let child of row.childNodes) {
        row.removeChild(child);
      }
      grid.removeChild(row);
    }
  }

  function clearGrid() {
    document.querySelectorAll('.square').forEach(square => {
      square.style.backgroundColor = '';
    })
  }
  
  function changeColor() {
    if(!this.style.backgroundColor) {
      this.style.opacity = 0.1;
    } else if (Number(this.style.opacity) < 1) {
      this.style.opacity = Number(this.style.opacity) + 0.1;
    }

    if(color === 'rainbow') {
      this.style.backgroundColor = getRandomColor();
    } else {
      this.style.backgroundColor = color;
    }
  }

  function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  makeGrid(SQUARES_PER_SIDE);
  makePaintable();
  connectControls();
}

etchASketch();