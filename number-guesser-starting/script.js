let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10)
};

function numberOutOfRange(human) {
    if ((human < 0) || (human > 9)) {
        return alert('Number out of Range.')
    }
};

function compareGuesses(human, computer, secret) {
    humToSec = Math.abs(human - secret)
    compToSec = Math.abs(computer - secret)
    if (humToSec <= compToSec) {
        return true
    } else {
        return false
    }
};

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1
    } else {
        computerScore += 1
    }
};

function advanceRound() {
    currentRoundNumber += 1
};

