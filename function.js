const sketchBox = document.querySelector('#sketchContainer');


// Create a 16 by 16 square grid
function createGrid(gridSize) {
    for (w = 0; w < gridSize; w++) {
        for (h = 0; h < gridSize; h++) {
            const sketchGrid = document.createElement('div');
            sketchGrid.classList.add('sketch');
            sketchGrid.style.width = 960 / gridSize + 'px';
            sketchGrid.style.height = 960 / gridSize + 'px';
            sketchBox.appendChild(sketchGrid);
            // Change the color of each square when 'mouseover'
            sketchGrid.addEventListener('mouseover', (event) => {
                sketchGrid.classList.replace('sketch', 'sketchActive');
                
            });
        }
    }
}






function startGrid() {
    let size = prompt('Grid size: ');
    document.getElementById('sketchContainer').innerHTML = '';
    createGrid(size);
}
