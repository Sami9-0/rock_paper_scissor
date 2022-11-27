let x = 0;
let y = GetComputerChoice();
console.log(game(x, y) + '\n');

function game(playerSelection, computerSelection)
{
    let player = 0;
    let computer = 0;
    for (let i = 1; i <= 5; i++)
    {
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) == 1)
        {
            player++;
        }
        else if (playRound(playerSelection, computerSelection) == 0 || playRound(playerSelection, computerSelection))
        {
            computer++;
        }
        else if (playRound(playerSelection, computerSelection) == 3)
        {
            computer++;
            player++;
        }
    }
    if (computer == player)
    {
        return 'Draw\n'
    }
    else if (computer > player)
    {
        return `You lose by a margin of ${computer - player}\n`;
    }
    else
    {
        return `You win by a margin of ${player - computer}\n`;
    }
}
//0 for rock, 1 for paper, 2 for scissor and 3 for a different selection.
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
//play's a one round game. Return 3 for draw, 0 for lose, 1 for win and 2 for unknown choice
function playRound(playerSelection, computerSelection)
{
    playerSelection = Player();
    computerSelection = GetComputerChoice();

    if (computerSelection == playerSelection)
    {
        return 3;
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
        return 2;
    }
}


//Returns a number from 0-2. 0 stands for rock, 1 for paper and 2 for scissor.function GetComputerChoice()
function GetComputerChoice()
{
    let num = Math.floor((Math.random() * 3));
    return num;
}