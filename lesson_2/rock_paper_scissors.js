const readline = require('readline-sync');
const VALID_CHOICES = [
  'rock',
  'r',
  'paper',
  'p',
  'scissors',
  's',
  'spock',
  'lizard',
  'l',
];

let computerScore = 0;
let userScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function incrementWinner(player) {
  player++;
  return player;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === 's') {
    prompt('Please choose 1) for Scissors or 2) for Spock');
    let userInput = readline.question();

    if (userInput === '1') {
      choice = 'scissors';
    } else if (userInput === '2') {
      choice = 'spock';
    }
  }

  if (computerChoice === 's') {
    prompt('Please choose 1) for Scissors or 2) for Spock');
    let userInput = readline.question();

    if (userInput === '1') {
      choice = 'scissors';
    } else if (userInput === '2') {
      choice = 'spock';
    }
  }

  if (
    ((choice === 'lizard' || choice === 'l') && computerChoice === 'spock') ||
    ((choice === 'lizard' || choice === 'l') &&
      (computerChoice === 'paper' || computerChoice === 'p')) ||
    ((choice === 'rock' || choice === 'r') && computerChoice === 'scissors') ||
    ((choice === 'rock' || choice === 'r') &&
      (computerChoice === 'lizard' || computerChoice === 'l')) ||
    ((choice === 'paper' || choice === 'p') &&
      (computerChoice === 'rock' || computerChoice === 'r')) ||
    ((choice === 'paper' || choice === 'p') && computerChoice === 'spock') ||
    ((choice === 'spock' || choice === '2') && computerChoice === 'scissors') ||
    ((choice === 'spock' || choice === '2') &&
      (computerChoice === 'rock' || computerChoice === 'r')) ||
    ((choice === 'scissors' || choice === '1') &&
      (computerChoice === 'paper' || computerChoice === 'p')) ||
    ((choice === 'scissors' || choice === '1') &&
      (computerChoice === 'lizard' || computerChoice === 'l'))
  ) {
    // incrementWinner(userScore);
    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    userScore = incrementWinner(userScore);
    console.log(`Your score is ${userScore}`);
    console.log(`Computer score is ${computerScore}`);
    // console.log(userScore);
    prompt('You win!');
  } else if (
    ((choice === 'rock' || choice === 'r') && computerChoice === 'spock') ||
    ((choice === 'rock' || choice === 'r') &&
      (computerChoice === 'paper' || computerChoice === 'p')) ||
    ((choice === 'spock' || choice === 's') &&
      (computerChoice === 'lizard' || computerChoice === 'l')) ||
    ((choice === 'spock' || choice === 's') &&
      (computerChoice === 'paper' || computerChoice === 'p')) ||
    ((choice === 'paper' || choice === 'p') && computerChoice === 'scissors') ||
    ((choice === 'scissors' || choice === 's') && computerChoice === 'spock') ||
    ((choice === 'scissors' || choice === 's') &&
      (computerChoice === 'rock' || computerChoice === 'r')) ||
    ((choice === 'lizard' || choice === 'l') &&
      (computerChoice === 'rock' || computerChoice === 'r')) ||
    ((choice === 'lizard' || choice === 'l') && computerChoice === 'scissors')
  ) {
    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    computerScore = incrementWinner(computerScore);
    console.log(`Your score is ${userScore}`);
    console.log(`Computer score is ${computerScore}`);
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  if (userScore < 3 && computerScore < 3) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);
  }

  if (computerScore === 3) {
    console.log('Computer has won 3 rounds! Game over');
    break;
  } else if (userScore === 3) {
    console.log('Congrats! You have won 3 rounds!');
    break;
  } else {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
  }
}
