'use strict';
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const maxDisplayLength = 14;

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
            // Test returns true on digits '0'-'9' and '.'
            return /^[0-9\.]$/.test(choice) ? addDigit(choice) : processOperator(choice);
    }
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

function updateDisplay() {
    if (isNaN(currNum)) {
        display.textContent = 'Error';
        return;
    }
    let toDisplay = +parseFloat(currNum).toPrecision(maxDisplayLength - 1);
    if (toDisplay.toString().length > maxDisplayLength) {
        toDisplay = toDisplay.toExponential(maxDisplayLength - 7);
    }
    display.textContent = toDisplay;
}

function clearDisplay() {
    display.textContent = '0';
    previousNum = 0;
    operator = null;
    currNum = 0;
}


function processOperator(choice) {
    if (operator != null) {
        operate();
    }
    operator = choice;
    previousNum = currNum;
    currNum = 0;
}

function operate() {
    if (operator == null) {
        return;
    }
    switch (operator) {
        case 'mod':
            mod();
            break;
        case '/':
            divide();
            break;
        case '*':
            multiply();
            break;
        case '-':
            subtract();
            break;
        case '+':
            add();
            break;
        default:
            console.error("Unknown operator");
    }
    operationDone();
}

function mod() {
    currNum = previousNum % currNum;
}

function divide() {
    currNum = previousNum / currNum;
}

function multiply() {
    currNum = previousNum * currNum;
}

function subtract() {
    currNum = previousNum - currNum;
}

function add() {
    currNum = +previousNum + +currNum;
}

function operationDone() {
    operator = null;
    previousNum = 0;
    updateDisplay();
}
