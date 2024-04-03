const sketchBox = document.querySelector('#sketchContainer');

// Create a 16 by 16 square grid
function createGrid() {
    for (let i = 0; i < 257; i++){
        const sketchGrid = document.createElement('div');
        sketchGrid.classList.add('sketch');
        sketchGrid.addEventListener('mouseover', (event) => {
            sketchGrid.classList.replace('sketch', 'sketchActive');
        });
        sketchBox.appendChild(sketchGrid);
    }
}

createGrid();