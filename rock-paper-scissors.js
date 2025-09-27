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
    let winner;

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

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
       return 'human'; 
    }
    else if (winner == 'computer') {
        return 'computer';
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


function playGame() {
    let totalHumanScore = 0;
    let totalComputerScore = 0;
    let humanScore = 0;
    let computerScore = 0;
    
    let roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner == 'human') {
        humanScore++;
        totalHumanScore = totalHumanScore + humanScore;
    }
    if (roundWinner == 'computer') {
        computerScore++;
        totalComputerScore = totalComputerScore + computerScore;
    }

    console.log("Human: " + totalHumanScore + ", Computer: " + totalComputerScore);


}

playGame();