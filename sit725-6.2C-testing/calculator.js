function isValidNumber(n) {
    return typeof n === 'number' && !isNaN(n);
}

function add(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        throw new Error("Invalid input");
    }
    return a + b;
}

function subtract(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        throw new Error("Invalid input");
    }
    return a - b;
}

function multiply(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        throw new Error("Invalid input");
    }
    return a * b;
}

function divide(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        throw new Error("Invalid input");
    }
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };