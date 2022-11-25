let x, y;
console.log(playRound(x, y))


//Gets player selection
function Player(playerSelection)
{
    //Ask player input then covert first letter to uppercase and the rest to lower case
    playerSelection = prompt("Let's play a game of Rock Paper Scissor.\nMake your choice:");
    const firsLetter = playerSelection.slice(0, 1);
    const theRest = playerSelection.slice(1);
    playerSelection = firsLetter.toUpperCase() + theRest.toLowerCase();
    if (!(playerSelection == 'Scissor') || !(playerSelection == 'Rock') || !(playerSelection == 'Paper'))
    {
        
        return "Choice an identified. Automatic lose!\nTry Again?";
    }
}


//play's a one round game
function playRound(playerSelection, computerSelection)
{
    playerSelection = Player();
    computerSelection = GetComputerChoice();

    if (computerSelection == playerSelection)
    {
        return "Draw";
    }
    else if (computerSelection == 'Scissor')
    {
        return (playerSelection == 'Rock') ? 'You win! Rock beats beats Scissor' : 'You lose! Paper beats Rock';
    }
    else if (computerSelection == 'Rock')
    {
        return (playerSelection == 'Paper') ? 'You win! Paper beats beats Rock' : 'You lose! Scissor beats Paper';
    }
    else if (computerSelection == 'Paper')
    {
        return (playerSelection == 'Scissor') ? 'You win! Scissor beats beats Paper' : 'You lose! Paper beats Rock';
    }
    else
    {
        consol.log(playerSelection);
        return;
    }
}


/*
 *Generates a random int form 0-2 and stores it in num
 * if num is 0 returns 'Rock', 'Paper' if num is 1 and 
 * 'Scissor' if num is 2
 */
function GetComputerChoice()
{
    let num = Math.floor((Math.random() * 3));
    if (num === 0)
    {
        return "Rock";
    }

    else if (num === 1)
    {
        return "Paper";
    }
    else
    {
        return "Scissor";
    }
}