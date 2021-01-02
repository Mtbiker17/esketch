let gridContainer = document.querySelector('#gridContainer');
const sliderRange = document.getElementById("sliderRange"); 
const gridSize = document.getElementById("size");
const resetPage = document.getElementById("resetPage");
const backgroundColorBtn = document.querySelector("#backgroundColorBtn");
const selectColor = document.querySelector("#selectColor");
const selectBackground = document.querySelector("#backgroundColor");
const eraserBtn = document.querySelector('#eraserBtn');





//shows grid size underneath slider
gridSize.textContent = sliderRange.value + ` x ${sliderRange.value}`;
sliderRange.oninput = function gridValue() {
    gridSize.textContent = `${this.value} x ${this.value}`;
};

//function to remove child nodes when user changes slider value
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};

//add a div child element for given number of rows and cols;
function makeGrid (rows, cols) {
    removeAllChildNodes(gridContainer)
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div')
        gridContainer.appendChild(cell).className = "grid-cell"
    };
    colorCells = gridContainer.querySelectorAll('div')
    colorCells.forEach(newColor => newColor.addEventListener('mouseover', colorGrid));
    backgroundColor.addEventListener('input', () => {
        colorCells.forEach(newBack => newBack.style.backgroundColor = selectBackground.value);
    })
    eraserBtn.addEventListener('click', () => {
        colorCells.forEach(newColor => newColor.addEventListener('mouseover', erase));
    })
};
makeGrid(16, 16);

function colorGrid() {
    this.style.backgroundColor = selectColor.value;
}

function erase(){
    this.style.backgroundColor = '#ffffff';
}



   


//Event Listeners//


//reset button

resetPage.addEventListener('click', event => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newColor => newColor.style.backgroundColor = '#FFFFFF');
});









