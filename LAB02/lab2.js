

const prompt = require('prompt');

const choices = ['PAPER', 'SCISSORS', 'ROCK'];

//Getting a random value for Computer Selection
function getComputerSelection() {
  const random = Math.random();
  if (random <= 0.34) {
    return 'PAPER'
  }
  else if (random <= 0.67) {
    return 'SCISSORS'
  }
  else {
    return 'ROCK'
  }
}

prompt.start();

prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error('Encountered an error!');
    return;
  }

  const userSelection = result.userSelection.toUpperCase();
  const computerSelection = getComputerSelection();

  //Printing out user and computer selection
  console.log(`User selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);

  //Logic for the game using if-else
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('User Wins');
  } else {
    console.log('Computer Wins');
  }
});

