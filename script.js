function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  const container = document.querySelector("#container");
  const humanSelection = document.querySelectorAll("button");
  const scoreDisplay = document.createElement("div");
  container.appendChild(scoreDisplay);

  function updateScore(){
    scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore} `;
  }

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
 
  function playRound(humanChoice, computerChoice){
    if(( humanChoice === 'rock' && computerChoice === 'scissors') ||
     ( humanChoice === 'paper' && computerChoice === 'rock') ||
     ( humanChoice === 'scissors' && computerChoice === 'paper')
    ){
    return `You Win! ${humanChoice} beats ${computerChoice}.`;
    } else if(humanChoice === computerChoice){
    return `It's a tie!`;
    } else {
    return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  //initializes each button to return rock, paper, or scissors and appends result of the round to the DOM.
  humanSelection.forEach((button) => {
    button.addEventListener("click", () => {
      const computerChoice = getComputerChoice();
      const humanChoice = button.getAttribute("id"); 
      const selections = document.createElement("div");
          selections.textContent = `You selected ${humanChoice} and computer selected ${computerChoice}`;
          container.appendChild(selections);
      const results = document.createElement('div');
        results.textContent = `${playRound(humanChoice, computerChoice)}.`;
        container.appendChild(results);

      if(results.textContent.startsWith("You Win!")) {
        humanScore++;
        updateScore();
      }else if(results.textContent.startsWith("You Lose!")){
        computerScore++;
        updateScore();
      }

      if(humanScore === 5){
        const humanDub = alert('You have reached a score of 5. You are the winner. GG.');
        location.reload();
      }else if(computerScore === 5){
        const computerDub = alert('Computer has reached a score of 5. You Lose. GG.');
        location.reload();
      }
    })
  })
}

playGame();