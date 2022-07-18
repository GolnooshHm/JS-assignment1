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
              console.log('The computer won!');
          }
          else if (computerChoice == "scissors"){
             console.log('You won!');
          }
          else {
             console.log('This is a tie!');
          }
      case "paper":
          if (computerChoice == "scissors"){
              console.log('Sorry! The computer won!');
          }
          else if (computerChoice == "rock"){
             console.log('You won!');
          }
          else {
              console.log('This is a tie!');
          }
      case "scissors":
          if (computerChoice == "rock"){
              console.log('The computer won!');
          }
          else if (computerChoice == "paper"){
              console.log('You won!');
          }
          else {
              console.log('This is a tie!');
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
    userChoice =window.prompt(`Round(${index + 1}) Choose rock, paper or scissors:`);
    computerChoice = computerPlay();
    console.log( determineWinner(userChoice, computerChoice));
  }
 
  }
  if(computerScore>userScore) {
    console.log ("Sorry! The computer won!");
}
else if(userScore>computerScore){
   console.log ("Congratulations! You won!");
}
else{
  console.log ('It is a tie!');
}

console.log(game());




