let playerSelection = 0;
let computerSelection = GetComputerChoice();
printWinner();

//Plays a 5 round game with computer
function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        let winner = playRound(playerSelection, computerSelection);
        if (winner == 0)
        {
            computerScore++;
        }
        else if (winner == 1)
        {
            playerScore++;
        }
    }

    return playerScore - computerScore;
}

//Prints winner and margin of lose
function printWinner()
{
    let winner = game();
    if (winner > 0)
    {
        console.log(`You win! By a margin of ${winner} Congratulation.`);
    }
    else
    {
        console.log(`You lose! By a margin of ${-1 * winner} Good luck next time.`);
    }
}
//play's a one round game. Return 2 for draw, 0 for lose, 1 for win and 3 for unknown choice
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


//Returns a number from 0-2. 0 stands for rock, 1 for paper and 2 for scissor.function GetComputerChoice()
function GetComputerChoice()
{
    let num = Math.floor((Math.random() * 3));
    return num;
}