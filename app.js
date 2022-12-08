function etchASketch() {
  const GRID_SIZE = 480;
  const SQUARES_PER_SIDE = 16;
  const grid = document.querySelector('.grid');
  const colorButtons = document.querySelectorAll('.palette button');
  const colorPicker = document.querySelector('input');
  const clearButton = document.querySelector('.controls button');
  const squaresPerSideSelector = document.querySelector('select');
  const colorTranslator = {
    'red': '#F55536',
    'blue': '#5386E4',
    'yellow': '#FFF275',
    'green': '#53CAA1',
  };

  let color = 'rainbow';
  let isMouseDown = false;

  function makeGrid(squaresPerSide) {
    for(let i = 0; i < squaresPerSide; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for(let j = 0; j < squaresPerSide; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${Math.floor(GRID_SIZE / squaresPerSide)}px`;
        square.style.height = `${Math.floor(GRID_SIZE / squaresPerSide)}px`;
        row.appendChild(square);
      }
      grid.appendChild(row);
    }
  }

  function makePaintable() {
    const squares = document.querySelectorAll('.square');
    for(let square of squares) {
      square.addEventListener('mouseover', () => {
        if(isMouseDown) {
          changeColor(square);
        }
      });
      square.addEventListener('mousedown', e => {
        e.preventDefault();
        changeColor(square);
      })
    }
  }

  function connectControls() {
    grid.addEventListener('mousedown', e => {
      e.preventDefault();
      isMouseDown = true;
    });
    grid.addEventListener('mouseup', () => isMouseDown = false);

    colorButtons.forEach(colorButton => {
      colorButton.addEventListener('click', () => {
        if(colorButton.className !== 'rainbow' && colorButton.className !== 'eraser') {
          color = colorTranslator[colorButton.className];
        } else {
          color = colorButton.className;
        }
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
      square.style.opacity = 1;
    })
  }
  
  function changeColor(square) {
    if(color === 'eraser') {
      square.style.backgroundColor = '';
      square.style.opacity = 1;
      return;
    }

    if(!square.style.backgroundColor) {
      square.style.opacity = 0.1;
    } else if (Number(square.style.opacity) < 1) {
      square.style.opacity = Number(square.style.opacity) + 0.1;
    }

    if(color === 'rainbow') {
      square.style.backgroundColor = getRandomColor();
    } else {
      square.style.backgroundColor = color;
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