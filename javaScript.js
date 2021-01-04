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
let color = 'black';


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
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-cell";
    }
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(colorCell => colorCell.addEventListener('mouseover', colorGrid));
}
makeGrid(16, 16);

function colorGrid() {
    switch (color){
        case 'eraserBtn':
            this.style.backgroundColor = '#ffffff';
            break;
        case 'shadeBtn':
            this.style.backgroundColor = 'gray';
            break;
        case 'tintBtn':
            this.style.backgroundColor = 'yellow';
            break;
        case 'pastelBtn':
            this.style.backgroundColor = 'pink';
            break;
        case 'warmBtn':
            this.style.backgroundColor = 'red';
            break;
        case 'coldBtn':
            this.style.backgroundColor = 'blue';
            break;
        case 'defaultColor':
            this.style.backgroundColor = 'color'
            break;
    }
}
function changeColorInput(event){
    switch (event.target.id){
        case 'eraserBtn':
            color = 'eraserBtn';
            break;
        case 'shadeBtn':
            color = 'shadeBtn';
            break;
        case 'selectColor':
            color = 'selectColor';
            break;
        case 'tintBtn':
            color = 'tintBtn';
            break;
        case 'pastelBtn':
            color = 'pastelBtn';
            break;
        case 'warmBtn':
            color = 'warmBtn';
            break;
        case 'coldBtn':
            color = 'coldBtn';
            break;
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(colorButton => colorButton.addEventListener('click', changeColorInput));

let userColor = gridContainer.querySelectorAll('div');
selectColor.addEventListener('input', () => {
    userColor.forEach(user => user.addEventListener('mouseover', () =>{
        this.style.backgroundColor = selectColor.value;
    }))
});
//function colorGrid() {
  //  this.style.backgroundColor = selectColor.value;
//}

//function erase(){
   // this.style.backgroundColor = '#ffffff';
//}
//function shade(){
    //this.style.backgroundColor = 'gray';
//}
//function tint(){
   // this.style.backgroundColor = 'yellow';
//}
//function pastel(){
  //  this.style.backgroundColor = 'pink';
//}
//function warm(){
  //  this.style.backgroundColor = 'red';
//}
//function cold(){
  //  this.style.backgroundColor = 'blue';
//}


//Event Listeners//
let colorCells = gridContainer.querySelectorAll('div')

//user select color
//selectColor.addEventListener('input', () => {
//colorCells.forEach(userColor => userColor.addEventListener('mouseover', colorGrid));
//})

//change background button
backgroundColor.addEventListener('input', () => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newBack => newBack.style.backgroundColor = selectBackground.value);
});

////erase button
//eraserBtn.addEventListener('click', () => {
//colorCells.forEach(newColor => newColor.addEventListener('mouseover', erase));
//})

//shade button
//shadeBtn.addEventListener('click', () => {
  //  colorCells.forEach(shader => shader.addEventListener('mouseover', shade));
//})

//tint button
//tintBtn.addEventListener('click', () => {
   // colorCells.forEach(tinter => tinter.addEventListener('mouseover', tint));
//})

//pastel button
//pastelBtn.addEventListener('click', () => {
  //  colorCells.forEach(pastelColor => pastelColor.addEventListener('mouseover', pastel));
//})

//warm spectrum button
//warmBtn.addEventListener('click', () => {
  //  colorCells.forEach(warmer => warmer.addEventListener('mouseover', warm));
//})

//cold spectrum button
//coldBtn.addEventListener('click', () => {
  //  colorCells.forEach(colder => colder.addEventListener('mouseover', cold));
//})

//reset button

resetPage.addEventListener('click', () => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newColor => newColor.style.backgroundColor = '#FFFFFF');
});




