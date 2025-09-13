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
    } else {
        return 'scissors';
    }
}

// console.log(getHumanChoice());

// let humanScore = 0;

// let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const convertedChoice1 = humanChoice.toLowerCase();
    const convertedChoice2 = computerChoice.toLowerCase();
    console.log('Human chose ' + convertedChoice1);
    console.log('Computer chose ' + convertedChoice2);
}   

const humansMove = getHumanChoice();
const computersMove = getComputerChoice();


console.log(playRound(humansMove, computersMove));