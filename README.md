Part 1*******************************************
Start with a 16x16 grid (made in Javascript)
Make the color change on the square you hoover over

Part 2*********************************************
Make a button at the top that
    Prompts for input(number of square you want) (limit to 100)
    Clear the body field of any square's
    Fill with the square's asked, using the same size container (960px wide)

Part 3***********************************************
Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.








THIS IS MY VERSION***********************MIGHT USE LATER********************
const sketchBox = document.querySelector('#sketchContainer');

// Create a 16 by 16 square grid
function createGrid() {
    for (w = 0; w < 16; w++) {
        for (h = 0; h < 16; h++) {
            const sketchGrid = document.createElement('div');
            sketchGrid.classList.add('sketch');
            sketchGrid.addEventListener('mouseover', (event) => {
                sketchGrid.classList.replace('sketch', 'sketchActive');
            });
            sketchBox.appendChild(sketchGrid);
        }
    }
}

createGrid();






