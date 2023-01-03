const rockBtn = document.querySelector(".rock-btn")
const paperBtn = document.querySelector(".paper-btn")
const scissorBtn = document.querySelector(".scissor-btn")
const resultDiv = document.querySelector(".resultDiv")
const playerScore = document.querySelector(".playerScore")
const computerScore = document.querySelector(".computerScore")
const playerScoreSpan = document.querySelector(".player-score-span")
const computerScoreSpan = document.querySelector(".computer-score-span")
const buttonDiv = document.querySelector(".buttons")
const winnerAnnouncer = document.querySelector(".winner-announcement")
const scoreParagraph = document.querySelector(".score-p")


let turn = 5
let playerCounter = 0
let computerCounter = 0

buttonDiv.addEventListener('click', function(e)
{
    let buttonSelected = e.target.className
    let comoputerChoice = getComputerChoice()
    e.preventDefault()

   

    if(turn > 0)
    {
        if (buttonSelected === "ec ec-fist")
        {
            buttonSelected = "rock"
            
        }

        else if (buttonSelected === "ec ec-raised-hand-with-fingers-splayed")
        {
            buttonSelected = "paper"
            
        }

        else if (buttonSelected === "ec ec-crossed-fingers")
        {
            buttonSelected = "scissor"
            
        }

        playRound(buttonSelected, getComputerChoice())

        if (playRound(buttonSelected, comoputerChoice) === 0)
        {
            if (comoputerChoice === "rock")
            {
                winnerAnnouncer.textContent = "It's a Draw! A Rock can't rock another Rock"
            }

            else if (comoputerChoice === "paper")
            {
                winnerAnnouncer.textContent = "It's a Draw! A Paper can't fold another Paper"
            }

            else
            {
                winnerAnnouncer.textContent = "It's a Draw! A Scissor can't cut another Scissor"
            }

            


        }

        else if (playRound(buttonSelected, comoputerChoice) === 1)
        {
            if(buttonSelected === "rock")
            {           
                winnerAnnouncer.textContent = "Player Wins! A Rock smashes Scissors"
            }

            else if (buttonSelected === "paper")
            {
                winnerAnnouncer.textContent = "Player Wins! A Paper folds a Rock"
            }

            else
            {
                winnerAnnouncer.textContent = "Player Wins! A Scissor cuts through Paper"
            }

            playerCounter = playerCounter + 1
            playerScore.textContent = playerCounter
        }

        else if (playRound(buttonSelected, comoputerChoice) === 2)
        {
            if(comoputerChoice === "rock")
            {
                winnerAnnouncer.textContent = "Computer Wins! A Rock smashes Scissors"
            }

            else if (comoputerChoice === "paper")
            {
                winnerAnnouncer.textContent = "Computer Wins! A Paper folds a Rock"
            }

            else
            {
                winnerAnnouncer.textContent = "Computer Wins! A Scissor cuts through a Paper"
            }

            computerCounter = computerCounter + 1
            computerScore.textContent = computerCounter
        }

        turn = turn - 1
    }

    else
    {
        console.log("The End")
        if (playerCounter > computerCounter)
        {
            winnerAnnouncer.textContent = "You Won!!!!"
            scoreParagraph.textContent = "----- Score ---" 
            playerScoreSpan.textContent = playerCounter 
            computerScoreSpan.textContent = computerCounter

            
        }

        else if (playerCounter < computerCounter)
        {

            winnerAnnouncer.textContent = "You Lost!!!"
            scoreParagraph.textContent = "----- Score ---"
            playerScoreSpan.textContent = playerCounter 
            computerScoreSpan.textContent = computerCounter  
        }

        else
        {
            winnerAnnouncer.textContent = "It's a Draw"
            scoreParagraph.textContent = "----- Score ---"
            playerScoreSpan.textContent = playerCounter 
            computerScoreSpan.textContent = computerCounter
        }
        
    }

    

    
    


})



function getComputerChoice()
{
    let rpsArray = ["rock", "paper", "scissor"]
    let currentValue = Math.floor(Math.random() * 3)

    return rpsArray[currentValue]
}



function playRound (playerSelection, computerSelection)
{


    if (playerSelection === computerSelection)
    {

       
        return 0
        
        
    }

    else
    {
        if (playerSelection === "rock")
        {
            if (computerSelection === "scissor")
            {
               
                return 1
            }

            else
            {
                return 2
            }
        }

        else if (playerSelection === "paper")
        {
            if (computerSelection === "rock")
            {
                return 1
            }

            else 
            {
                return 2
            }
        }

        else if (playerSelection === "scissor")
        {
            if(computerSelection === "rock")
            {
                return 2
            }

            else
            {
                return 1
            }
        }
    }

}





