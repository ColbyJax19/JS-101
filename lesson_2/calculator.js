const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

// Ask the user for the first number.
prompt("What's the first number?");
let firstNum = readline.question();
// Number validation
while (invalidNumber(firstNum)) {
  prompt("Hmm... that doesn't look like a valid number.");
  firstNum = readline.question();
}

// Ask the user for the second number.
prompt("What's the second number?");
let secondNum = readline.question();

while (invalidNumber(secondNum)) {
  prompt("Hmm... that doesn't look like a valid number.");
  secondNum = readline.question();
}

// Ask the user for an operation to perform.
prompt(
  'What operation would you like to perform?\n+) Add -) Subtract *) Multiply /) Divide'
);
let operation = readline.question();

while (!['+', '-', '*', '/'].includes(operation)) {
  prompt('Must choose +, -, * or /');
  operation = readline.question();
}

// Perform the operation on the two numbers.

let answer;
switch (operation) {
  case '+':
    answer = Number(firstNum) + Number(secondNum);
    break;
  case '-':
    answer = Number(firstNum) - Number(secondNum);
    break;
  case '*':
    answer = Number(firstNum) * Number(secondNum);
    break;
  case '/':
    answer = Number(firstNum) / Number(secondNum);
    break;
}

// Print the result to the terminal.
console.log(`${answer}`);
// Ask the user if they'd like to perform another calculation
prompt('Would you like to perform another calculation? (y/n)');
let repeat = readline.question();
