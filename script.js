function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return(prompt("Make your choice; Rock, Paper or Scissors"));
}

let humanSore = 0;

let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    let temp = null;
    humanSelection = humanSelection.toLowerCase();

    if (humanSelection == "rock"){
        if (computerSelection == "rock") {
            temp = "tie";
        } else if (computerSelection == "paper"){
            temp = "lose";
        } else {
            temp = "win";
        }
    } else if (humanSelection == "paper") {
        if (computerSelection == "rock") {
            temp = "win";
        } else if (computerSelection == "paper"){
            temp = "tie";
        } else {
            temp = "lose";
        }
    } else {
        if (computerSelection == "rock") {
            temp = "lose";
        } else if (computerSelection == "paper"){
            temp = "win";
        } else {
            temp = "tie";
        }
    }

    if (temp == "win") {
        console.log(`You win!${humanSelection} beats ${computerSelection}!`);
        humanSore++;
    } else if (temp == "tie") {
        console.log(`We tie! You and I both picked ${humanSelection}!`)
    } else {
        console.log(`LOSER!${computerSelection} beats ${humanSelection}!`)
        computerScore++;
    }
console.log(`Your score is ${humanSore} and my score is ${computerScore}.`)
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
