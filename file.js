const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'scissors'
    case 2:
      return 'paper'
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

function determineWinner (userChoice, computerChoice) {
  switch(userChoice) {
      case "rock":
          if (computerChoice == "paper"){
              return 2;
          }
          else if (computerChoice == "scissors"){
              return 1;
          }
          else {
              return 0;
          }
      case "paper":
          if (computerChoice == "scissors"){
              return 2;
          }
          else if (computerChoice == "rock"){
              return 1;
          }
          else {
              return 0;
          }
      case "scissors":
          if (computerChoice == "rock"){
              return 2;
          }
          else if (computerChoice == "paper"){
              return 1;
          }
          else {
              return 0;
          }
    }
}

function game() {
  let scores = [5];
  let computerScore=0;
  let userScore=0;
  let userChoice;
  let computerChoice;

  for (let index = 0; index < 5; index++) {
    userChoice = prompt(`Round(${index + 1}) Choose rock, paper or scissors:`);
    computerChoice = computerPlay();
    scores[index] = determineWinner(userChoice, computerChoice)
  }
  for (let index = 0; index < scores.length; index++) {
    if (scores[index] == 2) {
      computerScore++;
    }
    else if (scores[index] == 1) {
      userScore++;
    }
  }
  if(computerScore>userScore){
    return "Sorry! The computer won!";
}
else if(userScore>computerScore){
    return "Congratulations! You won!";
}

}
console.log(game());




