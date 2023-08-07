let getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

let getPlayerChoice = () => {
    let choice = prompt('Choose rock, paper or scissors');
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Tie';
    }
    if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
    )
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
};

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if(result.includes('Win')) playerScore++;
        if(result.includes('Lose')) computerScore++;

    }

    console.log(`player: ${playerScore}`);
    console.log(`computer : ${computerScore}`);

    if (playerScore === computerScore) return 'Tie!';
    return playerScore > computerScore ? 'You Win!' : 'You Lose!';

}
console.log(game())
