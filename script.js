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
            fragment.appendChild(square);
            this.squares.push(square);
        }
        this.wrapper.appendChild(fragment);
    }
}

//generateNewCell();
/*addColours() {
    
};*/

class Cell {
    constructor(value, dom) {
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

    /*clickControl (event) {
        if (event.key === 'ArrowUp') {
            console.log('Вы нажали клавишу вверх!')
        } else if (event.key === 'ArrowLeft') {
            console.log('Вы нажали клавишу влево!')
        } else if (event.key === 'ArrowRight') {
            console.log('Вы нажали клавишу вправо!')
        } else {
            console.log('Вы нажали клавишу вниз!');
            }*/

        clickControl (event) {
            (event.key === 'ArrowUp') ? console.log('Вы нажали клавишу вверх!') :
            (event.key === 'ArrowLeft') ? console.log('Вы нажали клавишу влево!') :
            (event.key === 'ArrowRight') ? console.log('Вы нажали клавишу вправо!') :
            console.log('Вы нажали клавишу вниз!');
        }

    init() {
        this.board = new Board();
            //document.addEventListener('keyup', clickControl);
    }   
} 


const start = new GameManager();
start.init();
//document.addEventListener('keyup', clickControl);


