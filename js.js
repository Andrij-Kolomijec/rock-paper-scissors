const choices = ["Rock", "Paper", "Scissors"];
let computerChoice = null;

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return "It is a tie";
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    };
};

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (i = 0; i < 5; i++) {       
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock-paper-scissors!", "SCISSORS").toLowerCase()
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.substring(1)
        let outcome = playRound(computerSelection, playerSelection);
        console.log(outcome);
        if (outcome.includes("win")) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }
    console.log(`Computer's score is ${computerScore} and yours is ${playerScore}.`)
}

game()