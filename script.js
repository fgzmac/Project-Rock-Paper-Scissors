//                   ***RPS Project Plan***

  //Initialize humanChoice and computerChoice functions
    //humanChoice obtained via prompt input
      //user inputs "rock", "paper", or "scissors"
      //input will be case-insensitive so that players can input "rock", "ROCK", etc.

    //computerChoice obtained via randomized selection
      //a number between 0 - 1 will be selected at random.
        //if number is between 0 and .33, rock is chosen by pc
        //else if number is between .34 and .66, paper is chosen by pc
        //else scissors is chosen by pc
   
  //Track scores
    //initialize humanScore variable starting at 0 and increment by 1 each round user wins
    //initialize computerScore variable starting at 0 and increment by 1 each round pc wins
      
  //Play a round
    //initialize playRound function that takes humanChoice and computerChoice as arguments
      //IF: user chooses "rock" and pc chooses "scissors" 
        //or user chooses "paper" and pc chooses "rock"
        //or user chooses "scissors" and pc chooses "paper"
          //humanScore will increment by 1 and "You Win! humanChoice beats computerChoice" will  be logged in console.
      //ELSE IF: pc chooses "rock" and user chooses "scissors" 
        //or pc chooses "paper" and user chooses "rock"
        //or pc chooses "scissors" and user chooses "paper"
          //computerScore will increment by 1 and "You Lose! computerChoice beats humanChoice" will  be logged in console.
      //ELSE: pc and user choices are equal
        //score will not increment and "Tie! humanChoice and computerChoice cancels out"

    //Play an entire game
      //initialize playGame function
        //calls playRound 5 times, keeps track of the scores, and declares a winner at the end



function getComputerChoice(pcChoice){
  if(Math.random(pcChoice) <= .33){
    return "Rock"
  }else if(Math.random(pcChoice) <= .66){
    return "Paper"
  }else{
    return "Scissors"
  }
}

function getHumanChoice(userChoice){
  userSelection = window.prompt("Do you choose Rock, Paper, or Scissors?")

  if(userSelection.toLowerCase() === 'rock'){
    console.log('rock')
  }else if(userSelection.toLowerCase() === 'paper'){
    console.log('paper')
  }else if(userSelection.toLowerCase() === 'scissors'){
    console.log('scissors')
  }else{
    alert("Invalid Selection")
  }
}

let humanScore = 0
let computerScore = 0