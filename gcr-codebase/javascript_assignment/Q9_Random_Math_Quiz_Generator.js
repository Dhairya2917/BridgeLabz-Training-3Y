// Q9. Random Math Quiz Generator
// Generate two numbers and a random arithmetic operator.

const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let answer;

switch (operator) {
    case "+":
        answer = firstNumber + secondNumber;
        break;
    case "-":
        answer = firstNumber - secondNumber;
        break;
    case "*":
        answer = firstNumber * secondNumber;
        break;
    case "/":
        answer = firstNumber / secondNumber;
        break;
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${operator === "/" ? answer.toFixed(2) : answer}`);
