import { add, subtract, divide, multiply, operate } from "./functions.js";

function main() {
    // variables to be used with operate()
    let operator = null;
    let num1 = null;
    let num2 = null;

    // Get display
    const display = document.getElementById("display");

    // Gather buttons
    const buttons = getAllButtons();
    const numberButtons = buttons.filter(button => isNumber(button.value));
    const functionButtons = buttons.filter(button => !isNumber(button.value));
    
    // Setup event listeners
    numberButtons.forEach(button => button.addEventListener("click", event => {
        updateDisplay(display, event.target.value);
    }));
}

function updateDisplay(display, num) {
    display.textContent = num;
}

function getAllButtons() {
    return Array.from(document.getElementsByTagName("button"));
}

function isNumber(num) {
    return !isNaN(num);
}

main();