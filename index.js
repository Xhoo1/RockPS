// Fuction  that run a random number

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "even";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Human Win, Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Human Win, Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "raper") {
    return "Human Win, Scissors beats Paper";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "Bot Win,Rock beats Scissors";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "Bot Win, Paper beats Rock";
  } else {
    return "Bot Win, Scissors beats Paper";
  }
}

function theGame() {
  const validChoices = ["rock", "paper", "scissors"];

  for (let i = 0; i < 5; i++) {
    let isValidChoise = false;

    while (!isValidChoise) {
       playerSelection = prompt(
        "Rock, Paper or Scissors:"
      ).toLocaleLowerCase();
      if (validChoices.includes(playerSelection)) {
        isValidChoise = true;
      } else {
        alert("Enter  Rock, Paper or Scissors no other words");
      }
    }

    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
  }
}

theGame();
