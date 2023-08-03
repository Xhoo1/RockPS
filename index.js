// Fuction  that run a random number

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Even";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "Human Win, Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "Human Win, Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Human Win, Scissors beats Paper";
  } else if ( computerSelection == "Rock" && playerSelection == "Scissors"){
     return "Bot Win,Rock beats Scissors";
  } else if(computerSelection == "Paper" && playerSelection == "Rock"){
    return "Bot Win, Paper beats Rock";
  } else {
    return "Bot Win, Scissors beats Paper";
  }
}



function theGame(){
  
  for(let i = 0; i < 5; i ++) {
    
    const playerSelection = prompt()
    const computerSelection = getComputerChoice();
  alert(playRound(playerSelection, computerSelection));
}



 
    
}

theGame();
