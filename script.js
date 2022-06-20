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

//import Board from "./Board.js";
//import Cell from "./Cell.js";

class GameManager{
        constructor() {
            this.isGameOver = false;
            this.score = 0;
            this.board = null;
        }

        clickControl (event) {
        if (event.key === 'ArrowUp') {
            this.board.combineColumn1();
            this.board.generateNewCell();
            this.board.movingColumn1();
        } else if (event.key === 'ArrowLeft') {
            this.board.combineRow();
            this.board.generateNewCell();
            this.board.movingRow();
        } else if (event.key === 'ArrowRight') {
            this.board.combineRow1();
            this.board.generateNewCell();
            this.board.movingRow1();
        } else if (event.key === 'ArrowDown') {
            this.board.combineColumn();
            this.board.generateNewCell();
            this.board.movingColumn();
            }
    
    }
    init() {
        this.board = new Board()
        this.board.init()
        this.board.generateNewCell();
        this.board.generateNewCell();
        document.addEventListener('keyup', this.clickControl.bind(this));
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

    setValue(value) {
        this.value = value;
        this.dom.textContent = this.value;
        this.dom.style.backgroundColor = colorCell[Math.trunc(Math.sqrt(value))];
    }

    getNewElement() {
        console.log('getNewElement');
        if (this.dom !== null) {
            throw new Error('Cell уже существует!');
        }
        const square = document.createElement('div');
        square.innerHTML = '';
        square.className = 'cell';
        this.dom = square;

        return square;
    }
}

class Board {
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
            this.squares[randomNumber].setValue(2);
        } else {
            this.generateNewCell();
        }
    } 

    movingColumn(direction) {
        for (let i = 0; i < this.widthBoard; i++) {
            this.fillColumn(i, direction === 'up');
        }
    }

    movingColumn1(direction) {
        for (let i = 0; i < this.widthBoard; i++) {
            this.fillColumn1(i, direction === 'up');
        }
    }

    // объединение значений в столбцах
            fillColumn(indexColumn, isUp) {
            const column = [];

            for (let i = 0; i < this.widthBoard; i++) {
                column.push(this.squares[indexColumn + this.widthBoard * i ].getValue());
            }

            let filteredColumn = column.filter(num => num);
            let emptyCellInColumnSize = this.widthBoard - filteredColumn.length;

            let newColumn = this.makeNewSequence(filteredColumn, emptyCellInColumnSize, isUp);

            newColumn.forEach((value, i) => {
                this.squares[indexColumn + (this.widthBoard * i)].setValue(value);
            });
        }

    // объединение значений в столбцах
        fillColumn1(indexColumn, isUp) {
            const column = [];

            for (let i = 0; i < this.widthBoard; i++) {
                column.push(this.squares[indexColumn + this.widthBoard * i ].getValue());
            }

            let filteredColumn = column.filter(num => num);
            let emptyCellInColumnSize = this.widthBoard - filteredColumn.length;

            let newColumn = this.makeNewSequence1(filteredColumn, emptyCellInColumnSize, isUp);

            newColumn.forEach((value, i) => {
                this.squares[indexColumn + (this.widthBoard * i)].setValue(value);
            });
        }

        // объединение значений в строках
        fillRow(rowIndex, isLeft) {
            const row = [];
    
            for (let i = 0; i < this.widthBoard; i++) {
                row.push(this.squares[rowIndex + i].getValue());
            }
    
            let filteredRow = row.filter(num => num);
            let emptyCellInRowSize = this.widthBoard - filteredRow.length;
    
            let newRow = this.makeNewSequence1(filteredRow, emptyCellInRowSize, isLeft);
    
            newRow.forEach((value, i) => {
                this.squares[rowIndex + i].setValue(value);
            });
        }

            // объединение значений в строках
            fillRow1(rowIndex, isRight) {
                const row = [];
        
                for (let i = 0; i < this.widthBoard; i++) {
                    row.push(this.squares[rowIndex + i].getValue());
                }
        
                let filteredRow = row.filter(num => num);
                let emptyCellInRowSize = this.widthBoard - filteredRow.length;
        
                let newRow = this.makeNewSequence1(filteredRow, emptyCellInRowSize, isRight);
        
                newRow.forEach((value, i) => {
                    this.squares[rowIndex + i].setValue(value);
                });
            }

    // После сложения, добавляем пустые значения, чтобы получить 4 элемента в строке или столбце (после сложения их становится меньше)
    makeNewSequence(numbers, emptySequensSize, isReverse) {
        let emptySequence = Array(emptySequensSize).fill('');

        return isReverse ? numbers.concat(emptySequence) : emptySequence.concat(numbers);
    }

    // После сложения, добавляем пустые значения, чтобы получить 4 элемента в строке или столбце (после сложения их становится меньше)
    makeNewSequence1(numbers, emptySequensSize, isReverse) {
        let emptySequence = Array(emptySequensSize).fill('');

        return isReverse ? emptySequence.concat(numbers) : numbers.concat(emptySequence);
    }

    combineColumn() {
        for (let i = 15; i >= 4; i--) {
            if ((this.squares[i].getValue() === this.squares[i - this.widthBoard].getValue()) && this.squares[i].getValue() !== '') {
                let combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - this.widthBoard].getValue());
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - this.widthBoard].setValue('');
            }
        }
        
        // проверить на выигрыш
    }

    combineColumn1() {
        for (let i = 15; i >= 4; i--) {
            if ((this.squares[i].getValue() === this.squares[i - this.widthBoard].getValue()) && this.squares[i].getValue() !== '') {
                let combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - this.widthBoard].getValue());
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - this.widthBoard].setValue('');
            }
        }
        
        // проверить на выигрыш
    }

    combineRow() {
        for (let i = 15; i > 1; i--) {
            if ((this.squares[i].getValue() === this.squares[i - 1].getValue()) && this.squares[i].getValue() !== '' && i % 4 !== 0) {
                let combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - 1].getValue())
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - 1].setValue('');
            }
        }
        
        // проверить на выигрыш
    }

    combineRow1() {
        for (let i = 15; i > 1; i--) {
            if ((this.squares[i].getValue() === this.squares[i - 1].getValue()) && this.squares[i].getValue() !== '' && i % 4 !== 0) {
                let combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - 1].getValue())
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - 1].setValue('');
            }
        }
        
        // проверить на выигрыш
    }

    movingRow(direction) {
        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            if (i % 4 === 0) {
                this.fillRow(i, direction === 'left');
            }
        }
    }

    movingRow1(direction) {
        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            if (i % 4 === 0) {
                this.fillRow1(i, direction === 'right');
            }
        }
    }
}



const start = new GameManager();
start.init();




