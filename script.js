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

const newCell = document.createElement('div');
    const grid = document.querySelector('.grid');
    const fragment = document.createDocumentFragment();

    for(let i = 0; i <= 15; i++) {
        
        var div = document.createElement('div');
        fragment.appendChild(div);
        newCell.className = 'cell';
        div.classList.add('cell');
    }
    grid.appendChild(fragment);
    

document.addEventListener('keyup', clickControl);

//checkIsGameOver();

class Board {
    constructor(widthBoard, squares, wrapper) {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.grid');
    }

    init() {
        this.board = new Board();
            document.addEventListener('keyup', clickControl);
    }  

    init() {
        const fragment = document.createDocumentFragment();
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

    constructor(isGameOver, score, board, clickControl) {
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
        } else {
            console.log('Вы нажали клавишу вниз!');
            }
    }

    init() {
        this.board = new Board();
            document.addEventListener('keyup', clickControl);
    }    
}

const start = new GameManager();
start.init();

