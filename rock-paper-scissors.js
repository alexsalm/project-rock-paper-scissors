function getComputerChoice() {
    let choice = (Math.floor((Math.random() * 3)));

    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanInput = prompt('Enter your shape:');
    if (humanInput.toLowerCase() === 'rock') {
        return 'rock';
    } else if (humanInput.toLowerCase() === 'paper') {
        return 'paper';
    } else if (humanInput.toLowerCase() === 'scissors'){
        return 'scissors';
    }
}


function playRound(humanChoice, computerChoice) {
    let winner;

    console.log('Computer: ', computerChoice);
    console.log('Human: ', humanChoice);

    if (computerChoice == 'rock' && humanChoice == 'paper') {
        console.log('You win! Paper beats rock!');
        winner = 'human';
    }

    else if (computerChoice == 'rock' && humanChoice == 'rock') {
        console.log('Its a tie!');
    }

    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log('You lose! Rock beats scissors.');
        winner = 'computer';
    }

    else if (computerChoice == 'paper' && humanChoice == 'paper') {
        console.log('Its a tie!');
    }

    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log('You lose! Paper beats rock.');
        winner = 'computer';
    }

    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        console.log('You win! Scissors beats paper!');
        winner = 'human';
    }
    
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log('You lose! Scissors beats paper.');
        winner = 'computer';
    }

    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        console.log('You win! Rock beats scissors.');
        winner = 'human';
    }

    else if (computerChoice == 'scissors' && humanChoice == 'scissors') {
        console.log('Its a tie!');
    }

    else {
        console.log('Something went wrong.');
    }

    if (winner == 'human') {
       return 1; 
    }
    else if (winner == 'computer') {
        return 2;
    }
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundWinner = playRound(humanSelection, computerSelection);
    
        if (roundWinner == 1) { 
            humanScore++; 
        }
    
        else if (roundWinner == 2) {
            computerScore++;
        }

        console.log("Human: " + humanScore + ", Computer: " + computerScore);
    }
    
    if (computerScore > humanScore) {
        console.log("The computer wins the trophy!");
    }
    
    else if (computerScore < humanScore) {
        console.log("The human wins the trophy!");
    }
}

let gameIntro = prompt('Get ready to play \'Rock, Paper, Scissors\' with a computer! The game will last a total of 5 rounds. A winner will be chosen at the end of the fifth round. Press RETURN, ENTER, or hit the OK button to play.');

playGame();