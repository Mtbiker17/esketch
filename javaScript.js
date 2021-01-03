let gridContainer = document.querySelector('#gridContainer');
const sliderRange = document.getElementById("sliderRange"); 
const gridSize = document.getElementById("size");
const resetPage = document.getElementById("resetPage");
const backgroundColorBtn = document.querySelector("#backgroundColorBtn");
const selectColor = document.querySelector("#selectColor");
const selectBackground = document.querySelector("#backgroundColor");
const eraserBtn = document.querySelector('#eraserBtn');
const shadeBtn = document.querySelector('#shadeBtn');
const tintBtn = document.querySelector('#tintBtn');
const pastelBtn = document.querySelector('#pastelBtn');
const warmBtn = document.querySelector('#warmBtn');
const coldBtn = document.querySelector('#coldBtn');

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
};
makeGrid(16, 16);



function colorGrid() {
    this.style.backgroundColor = selectColor.value;
}

function erase(){
    this.style.backgroundColor = '#ffffff';
}
function shade(){
    this.style.backgroundColor = 'gray';
}
function tint(){
    this.style.backgroundColor = 'yellow';
}
function pastel(){
    this.style.backgroundColor = 'pink';
}
function warm(){
    this.style.backgroundColor = 'red';
}
function cold(){
    this.style.backgroundColor = 'blue';
}


//Event Listeners//
colorCells = gridContainer.querySelectorAll('div')

//user select color
selectColor.addEventListener('input', () => {
    colorCells.forEach(userColor => userColor.addEventListener('mouseover', colorGrid));
})

//change background button
backgroundColor.addEventListener('input', () => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newBack => newBack.style.backgroundColor = selectBackground.value);
});

//erase button
eraserBtn.addEventListener('click', () => {
colorCells.forEach(newColor => newColor.addEventListener('mouseover', erase));
})

//shade button
shadeBtn.addEventListener('click', () => {
    colorCells.forEach(shader => shader.addEventListener('mouseover', shade));
})

//tint button
tintBtn.addEventListener('click', () => {
    colorCells.forEach(tinter => tinter.addEventListener('mouseover', tint));
})

//pastel button
pastelBtn.addEventListener('click', () => {
    colorCells.forEach(pastelColor => pastelColor.addEventListener('mouseover', pastel));
})

//warm spectrum button
warmBtn.addEventListener('click', () => {
    colorCells.forEach(warmer => warmer.addEventListener('mouseover', warm));
})

//cold spectrum button
coldBtn.addEventListener('click', () => {
    colorCells.forEach(colder => colder.addEventListener('mouseover', cold));
})

//reset button

resetPage.addEventListener('click', () => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newColor => newColor.style.backgroundColor = '#FFFFFF');
});




