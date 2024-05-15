'use strict';
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

let previousNum = 0;
let operator = null;
let currNum = 0;


buttons.forEach(button => {
    button.addEventListener('click', () => {
        process(button.id);
    });
});

function process(choice) {
    switch (choice) {
        case 'ac':
            clearDisplay();
            break;
        case 'square':
            square();
            break;
        case 'sqrt':
            sqrt();
            break;
        case '=':
            operate();
            break;
        default:
            return /^[0-9\.]$/.test(choice) ? addDigit(choice) : processOperator(choice);
    }
}

function clearDisplay() {
    display.textContent = '0';
    previousNum = 0;
    operator = null;
    currNum = 0;
}

function updateDisplay() {
    display.textContent = +parseFloat(currNum).toPrecision(11);
}

function square() {
    currNum *= currNum;
    updateDisplay();
}

function sqrt() {
    currNum = Math.sqrt(currNum);
    updateDisplay();
}

function addDigit(choice) {
    currNum += choice;
    updateDisplay();
}

function processOperator(choice) {
    // Implement
    console.log(choice);
}

function operate() {
    if (operator == null) {
        return;
    }
    switch (choice) {
        case 'mod':
            break;
        case '/':
            break;
        case '*':
            break;
        case '-':
            break;
        case '+':
            break;
        default:
            console.error("Unknown operator");
    }
}
