// To provide a random number



  let playerName = prompt("Enter:Your name:")


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

// To show the result

let resultDom = document.getElementById("result");
let resultOne = document.getElementById("resultOne")

// To provide the input and and show to the page
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors")

rockButton.addEventListener("click",()=> theGame("rock"));
scissorsButton.addEventListener("click",()=> theGame("scissors"));
paperButton.addEventListener("click",()=> theGame("paper"));


// To compare the random number and input


function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Even, no one Wins";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `${playerName} Win, Rock beats Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `${playerName} win, Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `${playerName} win, Scissors beats Pape`;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "Artificial Intelligence Win, Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "Artificial Intelligence Win, Paper beats Rock";
  } else {
    return "Artificial Intelligence Win, Scissors beats Paper";
  }
}

// to track wins on each player

let humanWins = 0;
let botWins = 0;


// to output the winner 

function theGame(playerSelection) {

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

  resultOne.textContent= `${result}`;
    if (result.includes("Artificial Intelligence")) {
      botWins++;
    } else if (result.includes(playerName)) {
      humanWins++;
    }
  if ( humanWins === 5 || botWins === 5 ){

    resultDom.textContent = `Final Scores:${playerName} ${humanWins} || Artificial Intelligence: ${botWins}`;
    resultDom.style.color = "red";
    if (humanWins === 5 || botWins === 5) {
      setTimeout(() => {
        humanWins = 0;
        botWins = 0;
        resultDom.textContent = "Let the best Win!";
        resultOne.textContent = "New game started!";
      }, 5000); // Wait for 5 seconds before resetting the game
    }
  }
}