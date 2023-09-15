let getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

let getPlayerChoice = () => {
  //let choice = prompt('Choose rock, paper or scissors');
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
};

const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
const p = document.createElement("p");
div.appendChild(p);
p.textContent = "Start the game";
const p2 = document.createElement("p");
div.appendChild(p2);

let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let result = playRound(e.target.textContent, getComputerChoice());
      p.textContent = result;
      if (result.includes("Win")) playerScore++;
      if (result.includes("Lose")) computerScore++;
      p2.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
      if (playerScore === 5 || computerScore === 5) {
        p.textContent = "End of the game";
        if (playerScore > computerScore) {
          p2.textContent = "You Win!";
        } else {
          p2.textContent = "You Lose!";
        }
        playerScore = 0;
        computerScore = 0;
      }
    });
  });
};
game();
