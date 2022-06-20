import Cell from "./Cell";

const colorCell = [
    '#afa192', 
    '#eee4da', 
    '#ede0c8', 
    '#f2b179', 
    '#ffcea4', 
    '#e8c064', 
    '#ffab6e', 
    '#fd9982', 
    '#ead79c', 
    '#76daff', 
    '#beeaa5', 
    '#d7d4f0',
];

export default class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.grid');
    }

    init() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const square = new Cell();

            fragment.appendChild(square.getNewElement());
            this.squares.push(square);
        }
        this.wrapper.appendChild(fragment);
    }

    generateNewCell() {
        const randomNumber = Math.floor(Math.random() * this.squares.length);
    
        if (this.squares[randomNumber].getValue() === '') {
            this.addColours();
            this.squares[randomNumber].setValue(2);
        } else {
            this.generateNewCell();
        }
    } 
    
    addColours() {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].style.backgroundColor = colorCell[Math.trunc(Math.sqrt(this.squares[i].innerHTML))];
        }
    }

}