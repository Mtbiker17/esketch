const gridContainer = document.querySelector('#gridContainer');
var rangeSlider = document.getElementById("sliderRange"); 
var output = document.getElementById("demo"); 
output.innerHTML = rangeSlider.value + ` x ${rangeSlider.value}`; 
  
rangeSlider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`; 
} 


//add a div child element for given number of rows and cols;
function makeGrid (rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div')
        gridContainer.appendChild(cell).className = "grid-cell"
    };
};
makeGrid(16, 16);