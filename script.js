let display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

function clearDisplay() {
    currentInput = '';
    display.value = '0';
}

function appendValue(value) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }

    currentInput += value;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput && !currentInput.endsWith(' ')) {
        currentInput += ` ${op} `;
        display.value = currentInput;
    }
}

function calculate() {
    try {
        display.value = eval(currentInput.replace('×', '*').replace('÷', '/'));
        currentInput = display.value;
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
