export class Board {
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

    // После сложения, добавляем пустые значения, чтобы получить 4 элемента в строке или столбце (после сложения их становится меньше)
    makeNewSequence(numbers, emptySequensSize, isReverse) {
        let emptySequence = Array(emptySequensSize).fill('');

        return isReverse ? numbers.concat(emptySequence) : emptySequence.concat(numbers);
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

    movingRow(direction) {
        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            if (i % 4 === 0) {
                this.fillRow(i, direction === 'left');
            }
        }
    }
}