const readline = require('readline-sync');

// Ask the user for the first number.
const firstNum = readline.question('Please enter your first number');
// Ask the user for the second number.
const secondNum = readline.question('Please enter your second number');
// Ask the user for an operation to perform.
const operation = readline.question(
  'What operation would you like to perform?\n+) Add -) Subtract *) Multiply /) Divide'
);

// Perform the operation on the two numbers.
if (operation === '+') {
  answer = Number(firstNum) + Number(secondNum);
} else if (operation === '-') {
  answer = Number(firstNum) - Number(secondNum);
} else if (operation === '*') {
  answer = Number(firstNum) * Number(secondNum);
} else if (operation === '/') {
  answer = Number(firstNum) / Number(secondNum);
}
// Print the result to the terminal.
console.log(`${answer}`);
console.log('Welcome to Calculator!');
