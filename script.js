'use strict';

const scoreDisplay =  document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
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


//checkIsGameOver(); 
class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.grid');
    }

    init() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const square = document.createElement('div');
            square.innerHTML = '';
            square.className = 'cell';
            this.dom = square;

            fragment.appendChild(square);
            this.squares.push(square);
        }
        this.wrapper.appendChild(fragment);
    }

    generateNewCell() {
        const randomNumber = Math.floor(Math.random() * this.squares.length);
    
        if (this.squares[randomNumber].innerHTML === '') {
            this.addColours();
            this.squares[randomNumber].innerHTML = 2;
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

class Cell {
    constructor() {
        this.value = '';
        this.dom = null;
    }

    getValue () {
        return this.value; 
    }

    setValue() {

    }

    getNewElement() {
    }
}

class GameManager{
        constructor() {
            this.isGameOver = false;
            this.score = 0;
            this.board = null;
        }

        clickControl (event) {
        if (event.key === 'ArrowUp') {
            console.log('Вы нажали клавишу вверх!')
        } else if (event.key === 'ArrowLeft') {
            console.log('Вы нажали клавишу влево!')
        } else if (event.key === 'ArrowRight') {
            console.log('Вы нажали клавишу вправо!')
        } else if (event.key === 'ArrowDown') {
            console.log('Вы нажали клавишу вниз!');
            }
    
    }
    init() {
        this.board = new Board()
        this.board.init()
        this.board.generateNewCell();
        this.board.generateNewCell();
        document.addEventListener('keyup', this.clickControl);
        }  
    
}      

const start = new GameManager();
start.init();




