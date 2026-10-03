// 1. Get computer choice //
function getComputerChoice() {
    // Get random number
    // Divide the random number by 3 and get the remainder --
    // -- for equal 3 way split for each choice probability
        // 0 = Rock
        // 1 = Paper
        // 2 = Scissors

    let choiceNumber = Math.floor(Math.random() * 100) % 3;
    let computerChoice = "Failed to assign RPS"

    if ( choiceNumber == 0 ) {
        computerChoice = "rock";
    }
    else if ( choiceNumber == 1 ) {
        computerChoice = "paper";
    }
    else
        computerChoice = "scissors";

    console.log(computerChoice);
    return computerChoice;
}

// 2. Get human choice //
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    console.log(humanChoice);
    return humanChoice;
}

getComputerChoice();
getHumanChoice();