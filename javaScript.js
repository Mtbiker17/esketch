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


//inputs grid size underneath slider
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
            let currentShade = this.style.backgroundColor;
            let matchShade = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
            let matchS = matchShade.exec(currentShade);
                if (matchS !== null) {
                    let r = (parseInt(matchS[1]) - 15);
                    let g = (parseInt(matchS[2]) - 15);
                    let b = (parseInt(matchS[3]) - 15);
                    this.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
                }
            break;
        case 'tintBtn':
            let currentTint = this.style.backgroundColor;
            let matchTint = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
            let matchT = matchTint.exec(currentTint);
                if (matchT !== null) {
                    let r = (parseInt(matchT[1]) + 15);
                    let g = (parseInt(matchT[2]) + 15);
                    let b = (parseInt(matchT[3]) + 15);
                    this.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
                }
            break;
        case 'pastelBtn':
            let randomPastel = Math.floor((Math.random() * 4) + 1);
            console.log(randomPastel);
            if(randomPastel === 1){
                this.style.backgroundColor = '#FFB5E8';
            } else if(randomPastel === 2){
                this.style.backgroundColor = '#AFF8DB';
            } else if(randomPastel === 3){
                this.style.backgroundColor = '#85E3FF';
            } else if (randomPastel === 4){
                this.style.backgroundColor = '#FFABAB';
            }
            break;
        case 'warmBtn':
            let randomWarm = Math.floor((Math.random() * 4) + 1);
            console.log(randomWarm);
            if(randomWarm === 1){
                this.style.backgroundColor = 'red';
            } else if(randomWarm=== 2){
                this.style.backgroundColor = '#E73927';
            } else if(randomWarm === 3){
                this.style.backgroundColor = '#EF7C24';
            } else if (randomWarm === 4){
                this.style.backgroundColor = '#EC6D10';
            }
            break;
        case 'coldBtn':
            let randomCold = Math.floor((Math.random() * 4) + 1);
            console.log(randomCold);
            if(randomCold === 1){
                this.style.backgroundColor = '#88c7dc';
            } else if(randomCold === 2){
                this.style.backgroundColor = '#3c89d0';
            } else if(randomCold === 3){
                this.style.backgroundColor = '#7ecfd4';
            } else if (randomCold === 4){
                this.style.backgroundColor = '#99fadc';
            }
            break;
        case 'selectColor':
            this.style.backgroundColor = selectColor.value;
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
        case 'selectColor':
            break;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(colorButton => colorButton.addEventListener('click', changeColorInput));

//Event Listeners//
let colorCells = gridContainer.querySelectorAll('div')

//change background button
backgroundColor.addEventListener('input', () => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newBack => newBack.style.backgroundColor = selectBackground.value);
});


//reset button

resetPage.addEventListener('click', () => {
    let colorCells = gridContainer.querySelectorAll('div');
    colorCells.forEach(newColor => newColor.style.backgroundColor = '#FFFFFF');
});




