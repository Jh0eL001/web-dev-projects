const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("resetButton");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "Tie🤝";
  } 
  else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "Win😎" : "lose🥶";
        break;
      case "paper":
        result = computerChoice === "rock" ? "Win😎" : "lose🥶";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "Win😎" : "lose🥶";
        break;
    }
  }
  playerDisplay.textContent = `🧔🏼chose: ${playerChoice}.`;
  computerDisplay.textContent = `🖥️chose: ${computerChoice}.`;
  resultDisplay.textContent = result;
  
  switch(result){
    case "Win😎":
      resultDisplay.style.color = "#98D8EF";
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "lose🥶":
      resultDisplay.style.color = "#A94A4A";
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    case "Tie🤝":
      resultDisplay.style.color = "#578E7E";
      break;
  }
}
// Reset function
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerDisplay.textContent = "🧔🏼";
  computerDisplay.textContent = "🖥️";
  resultDisplay.textContent = "";
  resultDisplay.style.color = "";
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Add event listener for reset button
resetButton.addEventListener("click", resetGame);