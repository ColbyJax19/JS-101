const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

// Gather information for the following properties:
// Loan Amount
prompt("What's loan amount?");
let loanAmount = readline.question();
while (invalidNumber(loanAmount)) {
  prompt('invalid input, please enter a number value for Loan Amount.');
  monthlyRate = readline.question();
}
// APR
prompt('Please enter your APR.');
let APR = readline.question() / 12;
let monthlyRate = APR / 100;

while (invalidNumber(monthlyRate)) {
  prompt('invalid input, please enter a number value for APR.');
  monthlyRate = readline.question();
}
// Loan Duration in months
prompt('How long is the loan duration, in months?');
let loanDuration = readline.question();

//Calculate

let monthlyPayment =
  loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanDuration)));

//print results
console.log(`Your Monthly Payment will be $ ${monthlyPayment.toFixed(2)}`);
