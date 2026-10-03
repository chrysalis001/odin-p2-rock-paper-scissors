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

// 4. Write the logic to play a single round //
function playRound(humanChoice, computerChoice) {
    // make humanChoice case insensitive //
    humanChoice = humanChoice.toLowerCase();

    // Conditionals to correspond winning conditions to human choices
    let roundResult = "Failure to resolve round";
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            roundResult = "draw";
        }
        else if (computerChoice == "paper") {
            roundResult = "lose";
        }
        else {
            roundResult = "win";
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            roundResult = "win";
        }
        else if (computerChoice == "paper") {
            roundResult = "draw";
        }
        else {
            roundResult = "lose";
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            roundResult = "lose";
        }
        else if (computerChoice == "paper") {
            roundResult = "win";
        }
        else {
            roundResult = "draw";
        }
    }
    
    // return round result //
    console.log(roundResult);
    return roundResult;
}

// 5. Play 5 rounds
function playGame() {
    // initiate round counter and scoreboard //
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    // loop for playRound //
    while(round < 5) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        let roundResult = playRound(humanSelection, computerSelection);
        if (roundResult == "win") {
            humanScore++
            alert("You won!");
        }
        else if (roundResult == "lose") {
            computerScore++
            alert("You lost!");
        }
        else {
            alert("Draw!");
        }
        round++;
    }
    
    // game result //
    console.log("Human: " + humanScore + " : " + "Computer: " + computerScore);
}




playGame()
