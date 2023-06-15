import { add, subtract, divide, multiply, operate } from "./functions.js";

function main() {
    // variables to be used with operate()
    let operator;
    let num1;
    let num2;


    const buttons = getAllButtons();
}

function getAllButtons() {
    return Array.from(document.getElementsByTagName("button"));
}

main();