let playerSelection = 0;
let computerSelection = GetComputerChoice();


//1 for win 0 for lose
function playRound(playerSelection, computerSelection)
{
    playerSelection = Player();
    computerSelection = GetComputerChoice();

    if (computerSelection == playerSelection)
    {
        return 2;
    }
    else if (playerSelection == 0)
    {
        return (computerSelection == 2) ? 1 : 0;
    }
    else if (playerSelection == 1)
    {
        return (computerSelection == 0) ? 1 : 0;
    }
    else if (playerSelection == 2)
    {
        return (computerSelection == 1) ? 1 : 0;
    }
    else
    {
        return 3;
    }
}


function Player(playerSelection)
{
    //Ask's for player selection
    playerSelection = prompt("Let's play a game of Rock Paper Scissor.\nMake your choice:");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock')
    {
        return 0;
    }
    else if (playerSelection == 'paper')
    {
        return 1;
    }
    else if (playerSelection == 'scissor')
    {
        return 2;
    }
    else 
    {
        return 3;
    }
}


function GetComputerChoice()
{
    let num = Math.floor((Math.random() * 3));
    return num;
}