const randomNumber = Math.floor(Math.random() * 3);

const computerSelection = () => {
  switch (randomNumber) {
    case 0:
      computerSelection = 'Rock';
      break;
    case 1:
      computerSelection = 'scissors';
      break;
    case 2:
      computerSelection = 'paper';
    default:
      break;
  }
  return computerSelection;
};


const checkValidity = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return true;
      break;
    default:
      return false;
  };
}


const playRound = (playerSelection, computerSelection) => {
  let Round = {
    playerSelection: playerSelection,
    computerSelection: computerSelection,
    winner: '',
  };
  if (playerSelection == computerSelection) {
    Round.winner = 'Tie!'
  } else {
    if (playerSelection == 'rock') {
      if (computerSelection == 'paper') {
        Round.winner = 'computer';
      } else if (computerSelection == 'scissors') {
        Round.winner = 'player';
      }
    } else if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        Round.winner = 'player';
      } else if (computerSelection == 'scissors') {
        Round.winner = 'computer';
      }
    } else if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        Round.winner = 'computer';
      } else if (computerSelection == 'paper') {
        Round.winner = 'player';
      }
    }
  }
  return Round;
};



const game = () => {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userInput = prompt('Choose rock, paper or scissors!');
    while (checkValidity(userInput) == false) {
      userInput = prompt('INVALID! TRY AGAIN!')
    };
    let Round = playRound(userInput, computerSelection());
    if (Round.winner == 'computer') {
      computerScore += 1;
      console.log(`You lose. ${Round.computerSelection} hits ${Round.playerSelection}`)
    } else if (Round.winner == 'player') {
      playerScore += 1;
      console.log(`You win.${Round.playerSelection} hits ${Round.computerSelection}`)
    } else {
      console.log(`It is a tie.`)
    }
  }
  if (computerScore > playerScore) {
    console.log('Computer won!')
  } else if (computerScore < playerScore) {
    console.log('Congratulations! You won!')
  } else {
    console.log('This is a tie.')
  };

}
game();