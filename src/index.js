'use strict';

import '../style.css';
import { Board } from './Board.js';
import { Cell } from './Cell.js';

const scoreDisplay = document.querySelector('.score');
const resultDisplay = document.querySelector('.result');

// checkIsGameOver();

class GameManager{
        constructor() {
            this.isGameOver = false;
            this.score = 0;
            this.board = null;
        }
        clickControl(event) {
        if (event.key === 'ArrowUp') {
            this.board.combineColumn();
            this.board.generateNewCell();
            this.board.movingColumn('up');
        } else if (event.key === 'ArrowLeft') {
            this.board.combineRow();
            this.board.generateNewCell();
            this.board.movingRow('left');
        } else if (event.key === 'ArrowRight') {
            this.board.combineRow();
            this.board.generateNewCell();
            this.board.movingRow();
        } else if (event.key === 'ArrowDown') {
            this.board.combineColumn();
            this.board.generateNewCell();
            this.board.movingColumn();
            }
    }
    init() {
        this.board = new Board();
        this.board.init();
        this.board.generateNewCell();
        this.board.generateNewCell();
        document.addEventListener('keyup', this.clickControl.bind(this));
        }
}

const start = new GameManager();
start.init();
