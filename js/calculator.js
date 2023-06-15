import { add, subtract, divide, multiply, operate } from "./functions.js";

function main() {
    // Determines which number is being worked with
    let activeNumberOne = true;

    // variables to be used with operate()
    let operator = null;
    let num1 = "0";
    let num2 = "";

    // Get display
    const display = document.getElementById("display");

    // Gather buttons
    const buttons = getAllButtons();
    const numberButtons = buttons.filter(button => isNumber(button.value));
    const functionButtons = buttons.filter(button => !isNumber(button.value));
    
    // Setup event listeners
    numberButtons.forEach(button => button.addEventListener("click", event => {
        if (activeNumberOne) {
            num1 = appendNumber(num1, event.target.value);
            updateDisplay(display, num1);
        } else {
            num2 = appendNumber(num2, event.target.value);
            updateDisplay(display, num2);
        }
    }));

    functionButtons.forEach(button => button.addEventListener("click", event => {
    }));
}

function appendNumber(number, newNumber) {
    // Check for trailing 0's
    if (number == "0")
        number = newNumber;
    else
        number += newNumber;

    return number;

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