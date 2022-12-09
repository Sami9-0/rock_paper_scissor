const btn = document.querySelectorAll('button');
const computer = document.querySelectorAll('.game');
let playerSelection;
let computerSelection;
btn.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.classList.value;
    console.log(playerSelection);
}));










































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

function GetComputerChoice()
{
    let num = Math.floor((Math.random() * 3));
    return num;
}