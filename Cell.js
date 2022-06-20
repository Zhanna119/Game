export default class Cell {
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