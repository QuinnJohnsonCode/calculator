import { add, subtract, divide, multiply, operate } from "./functions.js";

function main() {
    // variables to be used with operate()
    let operator;
    let num1;
    let num2;

    // Gather buttons
    const buttons = getAllButtons();
    const numberButtons = buttons.filter(button => isNumber(button.value));
    const functionButtons = buttons.filter(button => !isNumber(button.value));
    

}

function getAllButtons() {
    return Array.from(document.getElementsByTagName("button"));
}

function isNumber(num) {
    return !isNaN(num);
}

main();