let firstNumber = '';
let operator = '';
let secondNumber = '';
let shouldResetDisplay = false;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? 'Error: Division by zero' : a / b;

function operate(operator, a, b) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch(operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return 'Error';
    }
}

const display = document.getElementById('display');

function updateDisplay(value) {
    display.textContent = value;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
    display.textContent = display.textContent === '0' ? 
        number : display.textContent + number;
}

function appendDecimal() {
    if (shouldResetDisplay) {
        display.textContent = '0';
        shouldResetDisplay = false;
    }
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function handleOperator(op) {
    if (firstNumber && operator && !shouldResetDisplay) {
        calculate();
    }
    firstNumber = display.textContent;
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (!firstNumber || !operator) return;
    
    secondNumber = display.textContent;
    const result = operate(operator, firstNumber, secondNumber);
    
    if (typeof result === 'string' && result.includes('Error')) {
        updateDisplay(result);
    } else {
        const roundedResult = Math.round(result * 1000000) / 1000000;
        updateDisplay(roundedResult);
        firstNumber = roundedResult.toString();
    }
    
    operator = '';
    shouldResetDisplay = true;
}

function percent() {
    const currentValue = parseFloat(display.textContent);
    if (isNaN(currentValue)) return;

    const percentResult = currentValue / 100;
    updateDisplay(percentResult);
    firstNumber = percentResult.toString();
    operator = '';
    shouldResetDisplay = true;
}

function clearCalculator() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay('0');
    shouldResetDisplay = false;
}

function handleBackspace() {
    if (display.textContent.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendDecimal();
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        handleOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Backspace') {
        handleBackspace();
    } else if (event.key === 'Escape') {
        clearCalculator();
    }else if (event.key === '%') { 
        percent();
    }
});