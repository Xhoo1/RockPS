// To provide a random number

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
    return "even";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Human Win, Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Human Win, Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Human Win, Scissors beats Paper";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "Bot Win,Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "Bot Win, Paper beats Rock";
  } else {
    return "Bot Win, Scissors beats Paper";
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
    if (result.includes("Bot Win")) {
      botWins++;
    } else if (result.includes("Human Win")) {
      humanWins++;
    }
  if ( humanWins === 5 || botWins === 5 ){

    resultDom.textContent = `Final Scores:Human ${humanWins} Bot: ${botWins}`;
    if (humanWins === 5 || botWins === 5) {
      setTimeout(() => {
        humanWins = 0;
        botWins = 0;
        resultDom.textContent = "Scores: Human 0 Bot: 0";
        resultOne.textContent = "New game started!";
      }, 2000); // Wait for 2 seconds before resetting the game
    }
  }
}