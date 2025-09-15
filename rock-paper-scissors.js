function getComputerChoice() {
    let choice = (Math.floor((Math.random() * 100) + 1));
    if (choice < 33 && choice > 0) {
        return 'rock';
    } else if (choice < 67 && choice > 33) {
        return 'paper';
    } else if (choice < 100 && choice > 67) {
        return 'scissors';
    }
}

// console.log(getComputerChoice());

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const convertedChoice1 = humanChoice.toLowerCase();
    const convertedChoice2 = computerChoice.toLowerCase();
    if (convertedChoice1 == 'rock' && convertedChoice2 == 'paper') {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    }
    
    else if (convertedChoice1 == 'rock' && convertedChoice2 == 'scizzors') {
        console.log('You win! Rock beats scizzors!');
        humanScore++;
    } 
    
    else if (convertedChoice1 == 'rock' && convertedChoice2 == 'rock') {
        console.log("It's a tie!");
    } 
    
    else if (convertedChoice1 == 'paper' && convertedChoice2 == 'paper') {
        console.log("It's a tie!");
    } 
    
    else if (convertedChoice1 == 'paper' && convertedChoice2 == 'rock') {
        console.log('You win! Paper beats Rock!');
        humanScore++;
    } 
    
    else if (convertedChoice1 == 'paper' && convertedChoice2 == 'scizzors') {
        console.log('You lose! Scizzors beats Paper!');
        computerScore++;
    }

    else if (convertedChoice1 == 'scizzors' && convertedChoice2 == 'rock') {
        console.log('You lose! Rock beats Scizzors!');
        computerScore++;
    }

    else if (convertedChoice1 == 'scizzors' && convertedChoice2 == 'paper') {
        console.log('You win! Scizzors beats Paper!');
        humanScore++;
    }

    else if (convertedChoice1 == 'scizzors' && convertedChoice2 == 'scizzors') {
        console.log("It's a tie!");
    }
}   

let humansMove = getHumanChoice();
let computersMove = getComputerChoice();


console.log(playRound(humansMove, computersMove));