let currentInput = '';
let operation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function performOperation(op) {
    if (currentInput === '') return;
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    document.getElementById('display').value = result;
    currentInput = result.toString();
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('display').value = '';
}
