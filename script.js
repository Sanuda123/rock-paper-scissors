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
        editDiv(`You win! Your ${humanSelection} beat my ${computerSelection}!`, ".result");
        humanScore++;
    } else if (temp == "tie") {
        editDiv(`We tie! You and I both picked ${humanSelection}!`, ".result");
    } else {
        editDiv(`LOSER! My ${computerSelection} beat your ${humanSelection}!`, ".result");
        computerScore++;
    }
editDiv(`Your score is ${humanScore} and my score is ${computerScore}.`, ".score")
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);
        checkOver();
    });
});



function editDiv(string, divClass) {
    const div = document.querySelector(divClass);
    div.textContent = string;
}

function checkOver() {
    if (humanScore + computerScore == 5) {

        if (humanScore > computerScore) {
            alert("The game is over. You win.");
        } else {
            alert("The game is over. I win");
        }

        humanScore = 0;
        computerScore = 0;


        editDiv(`Your score is ${humanScore} and my score is ${computerScore}.`, ".score");
        editDiv(`Press one of the buttons to play!`, ".result");
    }
}