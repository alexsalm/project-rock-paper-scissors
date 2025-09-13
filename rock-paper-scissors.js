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

console.log(getComputerChoice());

function getHumanChoice() {
    
}