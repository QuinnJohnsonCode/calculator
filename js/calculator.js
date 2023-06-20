import { add, subtract, divide, multiply, operate } from "./functions.js";

function main() {
    // Determines which number is being worked with
    let activeNumberOne;

    // If an operator was changed
    let operatorChange;

    // variables to be used with operate()
    let operator, num1, num2;

    // Get display
    const display = document.getElementById("display");

    // Gather buttons
    const buttons = getAllButtons();
    const numberButtons = buttons.filter(button => isNumber(button.value));
    const functionButtons = buttons.filter(button => !isNumber(button.value));

    // clear function
    const clearCalculator = function() {
        operator = null;
        num1 = "0";
        num2 = "";
        activeNumberOne = true;
        operatorChange = false;
        updateDisplay(display, num1);
    };
    clearCalculator();

    // evaluate function
    const evaluate = function() {
        // Store Result -> Clear Calculator -> Change Num1 -> Update Display
        let result = operate(num1, num2, operator) + "";
        clearCalculator();
        num1 = result;
        updateDisplay(display, num1);
    }

    // switch numbers
    const switchActiveNumber = function() {
        activeNumberOne = !activeNumberOne;
    }
    
    // Setup event listeners
    numberButtons.forEach(button => button.addEventListener("click", event => {
        // Only change active number if the operator was just changed
        if (operatorChange) {
            operatorChange = false;
            switchActiveNumber();
        }

        if (activeNumberOne) {
            num1 = appendNumber(num1, event.target.value);
            updateDisplay(display, num1);
        } 
        else {
            num2 = appendNumber(num2, event.target.value);
            updateDisplay(display, num2);
        }
    }));

    functionButtons.forEach(button => button.addEventListener("click", event => {
        const functionName = event.target.value;
        // Clear Function
        if (functionName === "clear") {
            clearCalculator();
        }
        // Equals Function
        else if (functionName === "equal") {
            evaluate();
        }
        // Operator
        else {
            // Check if it's the same operator for chaining
            // If number two is active, also evaluate
            if (!activeNumberOne || operator === functionName) {
                evaluate();
            }
            operatorChange = true;
            operator = functionName;
            
        }
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