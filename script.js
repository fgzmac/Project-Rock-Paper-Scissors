function getComputerChoice(){
  let randomIndex = Math.random()
  if(randomIndex <= .33){
    return "rock";
  }else if(randomIndex <= .66){
    return "paper";
  }else{
    return "scissors";
  }
}

function getHumanChoice(){
  let userSelection = window.prompt("Do you choose Rock, Paper, or Scissors?");

  if (userSelection) {
    userSelection = userSelection.toLowerCase();

    if (userSelection === 'rock' || userSelection === 'paper' || userSelection === 'scissors'){
      return userSelection;
    } else {
      alert('Invalid Selection');
      return getHumanChoice();
    }
  } else {
    alert('Make a selection');
    return getHumanChoice();
  }
}

function playGame(){
const choices = ["rock", "paper", "scissors"]
const div = document.querySelector('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorButton = document.createElement('button');

let humanScore = 0;
let computerScore = 0;

const playRound = function(humanChoice, computerChoice){
  if(( humanChoice === 'rock' && computerChoice === 'scissors') ||
     ( humanChoice === 'paper' && computerChoice === 'rock') ||
     ( humanChoice === 'scissors' && computerChoice === 'paper')
  ){
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  } else if(humanChoice === computerChoice){
    return `It's a tie!`;
  } else {
    return `You Lose! ${computerChoice} beats ${humanChoice}`;
  }
}
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  console.log(result);
  
  if(result.includes(`You Win! ${humanSelection} beats ${computerSelection}`)){
    humanScore++;
    }else if(result.includes(`You Lose! ${computerSelection} beats ${humanSelection}`)){
    computerScore++;
    }

  console.log(`Final Score: Player:${humanScore} - Computer:${computerScore}`);
  
  if(humanScore > computerScore){
    return "YOU WIN!"
  }else if(computerScore > humanScore){
    return "YOU LOSE!"
  }else{
    return "IT IS A TIE!"
  }
}

console.log(playGame())