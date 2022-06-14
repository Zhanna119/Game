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

import Board from "./utils.js";

import Cell from "./utils1.js";

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




