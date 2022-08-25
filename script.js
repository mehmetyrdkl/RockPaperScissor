// adding event listener of the function when the page loads
document.addEventListener("DOMContentLoaded", gameStart);

// declaring our variables for player and computer choices
let playerChoice = "";
let computerChoice = "";

// adding even listeners for each option and assigning them a function showing which option was chosen
function gameStart() {
  document
    .querySelector("#buttons .rock")
    .addEventListener("click", choiceRock);
  document
    .querySelector("#buttons .paper")
    .addEventListener("click", choicePaper);
  document
    .querySelector("#buttons .scissors")
    .addEventListener("click", choiceScissors);
}

// creating the aformentioned functions for each choice, also calling the computer randomizing function
function choiceRock() {
  playerChoice = "rock";
  randomizeComputerChoice();
}

function choicePaper() {
  playerChoice = "paper";
  randomizeComputerChoice();
}

function choiceScissors() {
  playerChoice = "scissors";
  randomizeComputerChoice();
}

// creating the fucntion in which we assing the values 0,1,2 to rock,paper,scissors
// declaring the random number with math.floor(math.random), returning a pseudo-random number between 0 and 2
// adding classes to the hands for the animations
// ending animation as the outcome is reached
// ensuring results are hidden after each outcome
function randomizeComputerChoice() {
  let randomArray = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  computerChoice = randomArray[randomNumber];
  console.log(computerChoice);
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", showOutcome);
  // document
  //   .querySelector("#player2")
  //   .addEventListener("animationend", showOutcome); - this would be the same thing as above, as both start shaking at the same time
  document.querySelector("#draw").className = "hidden";
  document.querySelector("#win").className = "hidden";
  document.querySelector("#lose").className = "hidden";
}

// showoutcome should check the two choices, compare them and the enable the class for win, loose or draw

// declaring constant variables that can't be changed for the ids of player 1 and 2 to be differentiated
//
function showOutcome() {
  const player = document.querySelector("#player1");
  const computer = document.querySelector("#player2");
  player.className = "player " + playerChoice;
  computer.className = "player " + computerChoice;

  // creating if statements for each possible outcome, 3 players wins, 3 bot wins, 1 draw
  // after an if statements parameters, console log the winner, and remove the hidden class of the outcome screens(win, loose, draw)
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("human wins");
    document.querySelector("#win").classList.remove("hidden");
  } else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")
  ) {
    console.log("bot wins");
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    console.log("it's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  }
}
