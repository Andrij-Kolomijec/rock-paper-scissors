const choices = ["Rock", "Paper", "Scissors"];
let computerChoice = null;
let playerSelection = null;
let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return "It is a tie";
    } else {
        computerScore += 1;
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    };
};

const div = document.querySelector("#result");
const outcome = document.querySelector("#outcome");
const score = document.querySelector("#score");

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", e => {
    playerSelection = e.target.textContent;
    let computerSelection = getComputerChoice();
    outcome.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `Current score: Computer ${computerScore} wins | Player ${playerScore} wins`;
    if ((computerScore === 5) || (playerScore === 5)) {
        let newDiv = document.createElement('div')
        if (computerScore > playerScore) {
            newDiv.textContent = `You loose! The machine has bested you!`
            newDiv.style.color = 'red';
        } else {
            newDiv.textContent = `You win!`;
            newDiv.style.color = 'green';
        }
        div.appendChild(newDiv);
        computerScore = 0;
        playerScore = 0;
    }
    console.log(playerScore, computerScore)
});
