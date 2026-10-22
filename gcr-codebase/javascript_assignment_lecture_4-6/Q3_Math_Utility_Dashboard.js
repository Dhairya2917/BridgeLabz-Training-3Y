// Q3. Math Utility Dashboard
// Display common mathematical calculations for x = 16.75.

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Math Utility Dashboard
Input: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x³): ${cube.toFixed(2)}
Random number (10–50): ${randomNumber}`);
