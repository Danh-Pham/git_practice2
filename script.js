let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*9+1);
}

const compareGuesses = (human,computer,target) =>
{
    const disHuman = Math.abs(target-human);
    const disComputer = Math.abs(target-computer);
    if(disHuman <= disComputer)
        return true; 
    else
        return false;
}

const updateScore = (winner) =>
{
    if(winner ==='human')
        humanScore++;
    else
        computerScore++;
}

const advanceRound = () => currentRoundNumber++;


