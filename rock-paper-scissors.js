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
    let humanInput = prompt('Enter your shape:', 'Shape');
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

    if (computerChoice == 'rock') {
        console.log('Computer: rock')
    }

    if (computerChoice == 'paper') {
        console.log('Computer: paper')
    }

    if (computerChoice == 'scizzors') {
        console.log('Computer: scizzors')
    }

    if (humanChoice == 'rock') {
        console.log('Human: rock');
    }

    if (humanChoice == 'paper') {
        console.log('Human: paper');   }

    if (humanChoice == 'scizzors') {
        console.log('Human: scizzors');
    }  
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 0; i < 5; i++) {
        const humansMove = getHumanChoice();
        const computersMove = getComputerChoice();
        playRound(humansMove, computersMove);
        console.log("Human score: " + humanScore + " Computer Score: " + computerScore);
    } 
}

playGame();