export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        return "Seriously";
    }

    return a / b;
}

export function percentage(a) {
    return a / 100;
}

export function negate(a) {
    return a * -1;
}

export function operate(a, b, operator) {
    // if second number is empty, set equal to first number
    if (b === "") {
        b = a;
    }

    // convert a/b to numbers
    a = +a;
    b = +b;

    // no break statement required
    // return ensures no fallthrough
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }

    // if no operator, return a
    return a;
}