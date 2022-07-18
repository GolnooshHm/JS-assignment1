const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    default:
      break;
  }
};

const userPlay = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error, please type "rock", "paper" or "scissors" ')
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry! computer won!';
    } else {
      return 'Congratulations! You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry! computer won!';
    } else {
      return 'Congratulations! You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, You won!'
    }
  }
};

function game() {
  let scores = [5];
  let computerScore = 0;
  let userScore = 0;
  let userChoice;
  let computerChoice;

  for (let index = 0; index < 5; index++) {
    userChoice = window.prompt(`Round(${index + 1}) Choose rock, paper or scissors:`);
    computerChoice = computerPlay();
    scores[index] = determineWinner(userChoice, computerChoice)
  }
  for (let index = 0; index < scores.length ; index++) {
    if (scores[index] == 2) {
      computerScore++;
    }
    else if (scores[index] == 1) {
      userScore++;
    }
  }
  if (computerScore > userScore) {
    return "The computer won";
   if (userScore > computerScore) {
      return "You won!";
    }
    else {
      return "It is a tie.";
    }
  }
}
console.log(game());






