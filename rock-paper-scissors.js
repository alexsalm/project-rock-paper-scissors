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

console.log(getComputerChoice());

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
    if (humanChoice) {
        console.log(humanChoice.property);
    }
    else {
        console.log("humanChoice is undefined");
    }

    if (computerChoice) {
        console.log(computerChoice.property);
    }
    else {
        console.log("computerChoice is undefined");
    }
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    }
    
    else if (humanChoice == 'rock' && computerChoice == 'scizzors') {
        console.log('You win! Rock beats scizzors!');
        humanScore++;
    } 
    
    else if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log("It's a tie!");
    } 
    
    else if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log("It's a tie!");
    } 
    
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats Rock!');
        humanScore++;
    } 
    
    else if (humanChoice == 'paper' && computerChoice == 'scizzors') {
        console.log('You lose! Scizzors beats Paper!');
        computerScore++;
    }

    else if (humanChoice == 'scizzors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats Scizzors!');
        computerScore++;
    }

    else if (humanChoice == 'scizzors' && computerChoice == 'paper') {
        console.log('You win! Scizzors beats Paper!');
        humanScore++;
    }

    else if (humanChoice == 'scizzors' && computerChoice == 'scizzors') {
        console.log("It's a tie!");
    }
}   

const humansMove = getHumanChoice();
const computersMove = getComputerChoice();

console.log(humansMove);

let round1 = playRound(humansMove, computersMove);

console.log(round1);
console.log("Human score: " + humanScore + " Computer Score: " + computerScore);
