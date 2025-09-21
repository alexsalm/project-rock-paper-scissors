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
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log('Computer: ' +  computerChoice);
    console.log('Human: ' + humanChoice);

    if (computerChoice == 'rock' && humanChoice == 'paper') {
        console.log('You win! Paper beats rock!');
    }

    else if (computerChoice == 'rock' && humanChoice == 'rock') {
        console.log('Its a tie!');
    }

    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log('You lose! Rock beats scissors.');
    }

    else if (computerChoice == 'paper' && humanChoice == 'paper') {
        console.log('Its a tie!');
    }

    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log('You lose! Paper beats rock.');
    }

    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        console.log('You win! Scissors beats paper!');
    }
    
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log('You lose! Scissors beats paper.');
    }

    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        console.log('You win! Rock beats scissors.');
    }

    else if (computerChoice == 'scissors' && humanChoice == 'scissors') {
        console.log('Its a tie!');
    }

    else {
        console.log('Something went wrong.');
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
        const humansMove = getHumanChoice();
        const computersMove = getComputerChoice();
        playRound(humansMove, computersMove);
    } 
    console.log("Human score: " + humanScore + " Computer Score: " + computerScore);
}

playGame();
*/