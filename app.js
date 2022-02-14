const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resultsParagraph = document.getElementById("results");
const showPlayerScore = document.getElementById("show-player-score");
const showComputerScore = document.getElementById("show-computer-score");

let playerSelection;

rockBtn.addEventListener("click", function () {
  playerSelection = "rock";
  game();
});

paperBtn.addEventListener("click", function () {
  playerSelection = "paper";
  game();
});

scissorsBtn.addEventListener("click", function () {
  playerSelection = "scissors";
  game();
});

let playerScore = 0;
let computerScore = 0;

let options = ["rock", "paper", "scissors"];

let computerSelection;

function computerPlay() {
  computerSelection = options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  computerPlay();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    resultsParagraph.innerHTML = "You Win! Rock beats scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    resultsParagraph.innerHTML = "You Win! Paper beats rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    resultsParagraph.innerHTML = "You Win! Scissors beats paper!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    resultsParagraph.innerHTML = "You Lose! Rock beats scissors!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    resultsParagraph.innerHTML = "You Lose! Paper beats rock!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    resultsParagraph.innerHTML = "You Lose! Scissors beats paper!";
  } else {
    resultsParagraph.innerHTML = "It's a tie, try again!";
  }
}

function game() {
  if (playerScore == 5) {
    return;
  } else if (computerScore == 5) {
    return;
  } else {
    playRound(playerSelection, computerSelection);
  }
  showPlayerScore.innerHTML = "Player score: " + playerScore;
  showComputerScore.innerHTML = "Computer score: " + computerScore;
  if (playerScore === 5) {
    resultsParagraph.innerHTML = "Game over, you win the game!";
  } else if (computerScore === 5) {
    resultsParagraph.innerHTML = "Game over, you lose the game!";
  }
}
