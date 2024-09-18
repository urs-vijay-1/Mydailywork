function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let currentDisplay = document.getElementById('display').value;
    let lastChar = currentDisplay[currentDisplay.length - 1];

    // Prevent adding multiple operators in a row
    if (!isNaN(lastChar) || lastChar === '.') {
        document.getElementById('display').value += operator;
    }
}

function calculate() {
    let currentDisplay = document.getElementById('display').value;

    // Replace special characters for division and multiplication
    currentDisplay = currentDisplay.replace(/×/g, '*').replace(/÷/g, '/');
    
    try {
        document.getElementById('display').value = eval(currentDisplay);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
