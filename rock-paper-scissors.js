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
    if (humanInput === 'Rock' || humanInput === 'rock') {
        return 'rock';
    } else if (humanInput === 'Paper' || humanInput === 'paper') {
        return 'paper'
    } else if (humanInput === 'Scissors' || humanInput === 'scissors'){
        return 'scissors';
    }
}


function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let winner;

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log('Computer: ', computerChoice);
    console.log('Human: ', humanChoice);

    if (computerChoice == 'rock' && humanChoice == 'paper') {
        console.log('You win! Paper beats rock!');
        humanScore++;
        winner = 'human';
    }

    else if (computerChoice == 'rock' && humanChoice == 'rock') {
        console.log('Its a tie!');
    }

    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log('You lose! Rock beats scissors.');
        computerScore++;
        winner = 'computer';
    }

    else if (computerChoice == 'paper' && humanChoice == 'paper') {
        console.log('Its a tie!');
    }

    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log('You lose! Paper beats rock.');
        computerScore++;
        winner = 'computer';
    }

    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        console.log('You win! Scissors beats paper!');
        humanScore++;
        winner = 'human';
    }
    
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log('You lose! Scissors beats paper.');
        computerScore++;
        winner = 'computer';
    }

    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        console.log('You win! Rock beats scissors.');
        humanScore++;
        winner = 'human';
    }

    else if (computerChoice == 'scissors' && humanChoice == 'scissors') {
        console.log('Its a tie!');
    }

    else {
        console.log('Something went wrong.');
    }

    if (winner == 'human') {
       return humanScore; 
    }
    else if (winner == 'computer') {
        return computerScore;
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

/*
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    } 
}

playGame();
*/