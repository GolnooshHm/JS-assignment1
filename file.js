// const userPlay = userInput => {
//   userInput = userInput.toLowerCase();
//   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
//     return userInput;
//   } else {
//     console.log('Error, please type "rock", "paper" or "scissors" ')
//   }
// };


// const computerPlay = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return 'rock'
//       break;
//     case 1:
//       return 'paper'
//     case 2:
//       return 'scissors'
//     default:
//       break;
//   }
// };

// const determineWinner = (userChoice, computerChoice) => {
//   if (userChoice === computerChoice) {
//     return 'This game is a tie!'
//   }
//   if (userChoice === 'rock') {
//     if (computerChoice === 'paper') {
//       return 'Sorry! computer won!';
//     } else {
//       return 'Congratulations! You won!';
//     }
//   }

//   if (userChoice === 'paper') {
//     if (computerChoice === 'scissors') {
//       return 'Sorry! computer won!';
//     } else {
//       return 'Congratulations! You won!';
//     }
//   }

//   if (userChoice === 'scissors') {
//     if (computerChoice === 'rock') {
//       return 'Sorry, computer won!';
//     } else {
//       return 'Congratulations, You won!'
//     }
//   }
// };

// const playGame = () => {
//   const userChoice = userPlay('paper');
//   const computerChoice = computerPlay();
//   console.log(`You threw ${userChoice}`);
//   console.log(`The computer threw: ${computerChoice}`);

//   console.log(determineWinner(userChoice, computerChoice));
// };
// playGame()


function computerPlay() {
  let choices = ['rock', 'paper','scissors'];
  return choices[Math.floor(Math.round()*choices.length)]
}
let playerSelection = prompt ('Choose Rock, paper or scissors');
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if ((playerSelection.toLowerCase() === 'Rock') && (computerSelection === 'paper')) {
    return ('You lose, paper beats rock!');
  } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'rock')){
    return ('It is a tie!');
  } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
    return ('You win, rock beats scissors');
  }

  if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock')) {
    return ('You lose, rock beats scissors!');
  } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'scissors')) {
    return ('It is a tie!');
  } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
    return('You win, scissors cuts paper!');
  }
    
if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')) {
  return ('You lose, Scissors beats paper!')
} else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'paper')) {
  return ('It is a tie!')
} else if ((playerSelection.toLowerCase () === 'Paper') && (computerSelection === 'rock')) {
  return ('You win, paper beats rock!')
} 
  
  }
  function game() {
    for (let i = 0; i < 5; i++) {
      console.log(playerSelection, computerSelection);
    }
  }
  
  game();

  function scoreboard() {
    let playerScore = 0;
    x = playerScore;
    let computerScore = 0
    y = computerScore
    //player chooses rock//
    if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Paper")) {
      return (Number(x), (Number(y) + 1));
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Rock")) {
      return (Number(x), Number(y));
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Scissors")) {
      return (Number(x) + 1), Number(y);
    }
    //player chooses scissors//
    if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection === "Rock")) {
      return (Number(x), (Number(y) + 1));
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection === "Scissors")) {
      return (Number(x), Number(y));
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection === "Paper")) {
      return (Number(x) + 1), Number(y);
    }
    //player chooses paper//
    if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "Scissors")) {
      return (Number(x), (Number(y) + 1));
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "Paper")) {
      return (Number(x), Number(y));
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "Rock")) {
      return (Number(x) + 1), Number(y);
    }
  
    if (x > y) {
      console.log("PLAYER WON");
    } else if (x < y) {
      console.log("COMPUTER WON");
    }
  }




