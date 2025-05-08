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
    return(prompt("Make your choice; Rock, Paper or Scissors").toLowerCase());
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    let temp = null;

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
        console.log(`You win! Your${humanSelection} beat my ${computerSelection}!`);
        humanScore++;
    } else if (temp == "tie") {
        console.log(`We tie! You and I both picked ${humanSelection}!`)
    } else {
        console.log(`LOSER! My ${computerSelection} beat your ${humanSelection}!`)
        computerScore++;
    }
console.log(`Your score is ${humanScore} and my score is ${computerScore}.`)
}



// function playGame() {
//     for ( let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//     }
// }

// playGame();


const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
        console.log(button.id)
    });
});