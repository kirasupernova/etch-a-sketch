//grab container div
//create 16x16 square divs
// > write for loop which creates appropriate nr of squares 
// > add numbered 16 x 16 grid-template-areas to container during loop
// > assign each container grid-area by number
// > append each div to container div

const sketchpad = document.querySelector('#sketchpad');
let padWidth = sketchpad.clientWidth;
let padHeight = sketchpad.clientHeight;

function drawCells (cellCount) {
  let cellWidth = padWidth / cellCount - 2;
  let cellHeight = padHeight / cellCount - 2;
  let templateAreas = ``;
// create rows
  for (let r = 0; r < cellCount; r++) {
    let templateRow = ``;
// create columns
    for (let c = 1; c <= cellCount; c++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.cssText = `grid-area: cell${c + r * cellCount}; height: ${cellHeight}; width: ${cellWidth}; border: 1px solid black;`;
      templateRow += ` cell${c + r * cellCount}`;
      sketchpad.appendChild(cell);
    }
    templateAreas += `"${templateRow}"`;
  }
  sketchpad.style.gridTemplateAreas =`${templateAreas}`;
}

drawCells(16);
