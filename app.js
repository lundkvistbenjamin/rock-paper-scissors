let options = ["rock", "paper", "scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

let playerScore = 0;
let computerScore = 0;

//if statement
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    playerScore++;
    return "You Win! Rock beats scissors!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    playerScore++;
    return "You Win! Paper beats rock!";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    playerScore++;
    return "You Win! Scissors beats paper!";
  } else if (
    computerSelection == "rock" &&
    playerSelection.toLowerCase() == "scissors"
  ) {
    computerScore++;
    return "You Lose! Rock beats scissors!";
  } else if (
    computerSelection == "paper" &&
    playerSelection.toLowerCase() == "rock"
  ) {
    computerScore++;
    return "You Lose! Paper beats rock!";
  } else if (
    computerSelection == "scissors" &&
    playerSelection.toLowerCase() == "paper"
  ) {
    computerScore++;
    return "You Lose! Scissors beats paper!";
  } else {
    return "It's a tie, try again!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Please enter rock, paper or scissors");
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore < playerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
  playerScore = 0;
  computerScore = 0;
}
