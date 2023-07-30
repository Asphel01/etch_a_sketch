function changeColour(e) {
    let hexColorRep = "#";

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor (Math.random() * hexCharacters.length); 
    	hexColorRep += hexCharacters[randomPosition];
	}
    
    this.style.backgroundColor = hexColorRep;
}

function changeGrid(e) {
    let dim;
    while(true) {
        dim = prompt("Enter the number of squares per side to be resized on the grid:");
        if(dim <= 100) {
            break;
        }
        alert("Try again. Input must be no greater than 100.");
    }
    

    while(container.firstChild) {
        container.removeChild(container.firstChild);
        array.shift();
    }

    for(let i = 0; i < dim * dim; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.minWidth = `${800 / dim}px`;
        square.style.height = `${800 / dim}px`;
        container.appendChild(square);
        square.addEventListener('mouseover' , changeColour);
        array.push(square);
    }
}

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let array = [];
const container = document.querySelector('.container');
const button = document.querySelector('button');
button.addEventListener('click', changeGrid);

for(let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = '50px';
    square.style.height = '50px'
    container.appendChild(square);
    square.addEventListener('mouseover' , changeColour);
    array.push(square);
}