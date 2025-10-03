

const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask user for their choice
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.log('Error occurred:', err);
    return;
  }

  const userSelection = result.userSelection.trim().toUpperCase();

  // Validate user input
  if (!['ROCK', 'PAPER', 'SCISSORS'].includes(userSelection)) {
    console.log('Invalid choice! Please enter ROCK, PAPER, or SCISSORS.');
    return;
  }

  // Generate computer selection
  const randomNum = Math.random();
  let computerSelection = '';

  if (randomNum <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNum <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  // Display selections
  console.log(`\nUser selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("\nIt's a tie!");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log('\nUser Wins!');
  } else {
    console.log('\nComputer Wins!');
  }
});
