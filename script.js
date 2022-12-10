const btn = document.querySelectorAll('button');
const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');
const playerImg = document.querySelector('.player');
const computerImg = document.querySelector('.computer');
const stat = document.querySelector('.stat');

const img = new Array('./image/rock.png', './image/paper.png', './image/scissor.png');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


btn.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.classList.value;
    stat.textContent = roundWinner();
    displaySelection();
    keepScore();
    winner();
}));


function winner()
{
    if (playerScore == 5 || computerScore == 5)
    {
        if (playerScore == 5)
        {
            
            alert("Congratulation you win!\nWanna play again?");
            playerScore = 0;
            computerScore = 0;player.textContent = `You: ${playerScore}`;
            computer.textContent = `Computer: ${computerScore}`
        }
        else
        {
            
            alert("You lost!\n Wanna play again?");
            playerScore = 0;
            computerScore = 0;
            player.textContent = `You: ${playerScore}`;
            computer.textContent = `Computer: ${computerScore}`
        }
    }
}
function keepScore() 
{
    if (stat.textContent == 'You win!')
    {
        playerScore++;
    }
    else if (stat.textContent == 'You lose!')
    {
        computerScore++;
    }
    player.textContent = `You: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

function displaySelection()
{
    if (playerSelection == 'rock')
    {
        playerImg.src = img[0];
        if (playerSelection == computerSelection)
        {
            computerImg.src = img[0];
        }
        else if (computerSelection == 'paper')
        {
            computerImg.src = img[1];
        }
        else if (computerSelection == 'scissor')
        {
            computerImg.src = img[2];
        }
    }
    else if (playerSelection == 'paper')
    {
        playerImg.src = img[1];
        if (playerSelection == computerSelection)
        {
            computerImg.src = img[1];
        }
        else if (computerSelection == 'rock')
        {
            computerImg.src = img[0];
        }
        else if (computerSelection == 'scissor')
        {
            computerImg.src = img[2];
        }
    }
    else if (playerSelection == 'scissor')
    {
        playerImg.src = img[2];
        if (playerSelection == computerSelection)
        {
            computerImg.src = img[2];
        }
        else if (computerSelection == 'paper')
        {
            computerImg.src = img[1];
        }
        else if (computerSelection == 'rock')
        {
            computerImg.src = img[0];
        }
    }
}
function roundWinner()
{
    ComputerChoice();
    if (computerSelection == playerSelection)
    {
        return "Draw";
    }
    else if (computerSelection == 'rock')
    {
        return (playerSelection == 'paper') ? 'You win!' : 'You lose!';
    }
    else if (computerSelection == 'paper')
    {
        return (playerSelection == 'scissor') ? 'You win!' : 'You lose!';
    }
    else if (computerSelection == 'scissor')
    {
        return (playerSelection == 'rock') ? 'You win!' : 'You lose!';
    }
}

function ComputerChoice()
{
    let randNum = Math.floor(Math.random() * 3);

    switch(randNum)
    {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissor';
            break;
    }
}