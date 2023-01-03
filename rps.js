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
const header = document.querySelector(".header")
const humanScoreParagraph = document.querySelector(".human-score")
const computerScoreParagraph = document.querySelector(".computer-score")
const playAgainBtn = document.querySelector(".play-again-btn")
const winnerText = document.querySelector(".winner-text")
const humanPoint = document.querySelector(".human-point")
const computerPoint = document.querySelector(".computer-point")
const scoreText = document.querySelector(".score")
const winnerEmoji = document.querySelector("#winnerEmoji")


let turn = 5
let playerCounter = 0
let computerCounter = 0

playAgainBtn.addEventListener('click', function(e)
{

    e.preventDefault()
    window.location.reload()
    winnerText.style.display = 'none'
    
})

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
                computerScore.innerHTML = `<span class="ec ec-fist" style="font-size: 40px;"></span>`
                playerScore.innerHTML = `<span class="ec ec-fist" style="font-size: 40px;"></span>`
                header.textContent = "It's a Draw! A Rock can't rock another Rock"
            }

            else if (comoputerChoice === "paper")
            {
                computerScore.innerHTML = `<span class="ec ec-raised-hand-with-fingers-splayed" style="font-size: 40px;"></span>`
                playerScore.innerHTML = `<span class="ec ec-raised-hand-with-fingers-splayed" style="font-size: 40px;"></span>`
                header.textContent = "It's a Draw! A Paper can't fold another Paper"
            }

            else
            {
                computerScore.innerHTML = `<span class="ec ec-crossed-fingers" style="font-size: 40px;"></span>`
                playerScore.innerHTML = `<span class="ec ec-crossed-fingers" style="font-size: 40px;"></span>`
                header.textContent = "It's a Draw! A Scissor can't cut another Scissor"
            }

            


        }

        else if (playRound(buttonSelected, comoputerChoice) === 1)
        {
            if(buttonSelected === "rock")
            {   
                playerScore.innerHTML = `<span class="ec ec-fist" style="font-size: 40px;"></span>` 
                computerScore.innerHTML = `<span class="ec ec-crossed-fingers" style="font-size: 40px;"></span>`      
                header.textContent = "Player Wins! A Rock smashes Scissors"
            }

            else if (buttonSelected === "paper")
            {
                playerScore.innerHTML = `<span class="ec ec-raised-hand-with-fingers-splayed" style="font-size: 40px;"></span>`
                computerScore.innerHTML = `<span class="ec ec-fist" style="font-size: 40px;"></span>`
                header.textContent = "Player Wins! A Paper folds a Rock"
            }

            else
            {
                computerScore.innerHTML = `<span class="ec ec-raised-hand-with-fingers-splayed" style="font-size: 40px;"></span>`
                playerScore.innerHTML = `<span class="ec ec-crossed-fingers" style="font-size: 40px;"></span>`
                header.textContent = "Player Wins! A Scissor cuts through Paper"
            }

            playerCounter = playerCounter + 1
            humanScoreParagraph.textContent = playerCounter
        }

        else if (playRound(buttonSelected, comoputerChoice) === 2)
        {
            if(comoputerChoice === "rock")
            {
                playerScore.innerHTML = `<span class="ec ec-crossed-fingers" style="font-size: 40px;"></span>`
                computerScore.innerHTML = `<span class="ec ec-fist" style="font-size: 40px;"></span>`
                header.textContent = "Computer Wins! A Rock smashes Scissors"
            }

            else if (comoputerChoice === "paper")
            {
                playerScore.innerHTML = `<span class="ec ec-fist" style="font-size: 40px;"></span>`
                computerScore.innerHTML = `<span class="ec ec-raised-hand-with-fingers-splayed" style="font-size: 40px;"></span>`
                header.textContent = "Computer Wins! A Paper folds a Rock"
            }

            else
            {
                playerScore.innerHTML = `<span class="ec ec-raised-hand-with-fingers-splayed" style="font-size: 40px;"></span>`
                computerScore.innerHTML = `<span class="ec ec-crossed-fingers" style="font-size: 40px;"></span>`
                header.textContent = "Computer Wins! A Scissor cuts through a Paper"
            }

            computerCounter = computerCounter + 1
            computerScoreParagraph.textContent = computerCounter
        }

        turn = turn - 1
    }

    else
    {
        winnerText.style.display = 'block'
        if (playerCounter > computerCounter)
        {
            header.textContent = "You Won!!!!" 
            scoreText.textContent = "----- SCORE -----"
            winnerAnnouncer.textContent = "You Won!!!!" 
            playerScoreSpan.textContent = playerCounter 
            computerScoreSpan.textContent = computerCounter
            humanPoint.textContent = playerCounter
            computerPoint.textContent = computerCounter

            
        }

        else if (playerCounter < computerCounter)
        {

            header.textContent = "You Lost!!!"
            winnerEmoji.setAttribute("class", "ec ec-disappointed")
            scoreText.textContent = "----- SCORE -----"
            winnerAnnouncer.textContent = "You Lost!!!"
            playerScoreSpan.textContent = playerCounter 
            computerScoreSpan.textContent = computerCounter 
            humanPoint.textContent = playerCounter
            computerPoint.textContent = computerCounter 
        }

        else
        {
            header.textContent = "The result is a Draw"
            scoreText.textContent = "----- SCORE -----"
            winnerEmoji.setAttribute("class", "ec ec-raised-hands")
            winnerAnnouncer.textContent = "The result is a Draw"
            playerScoreSpan.textContent = playerCounter 
            computerScoreSpan.textContent = computerCounter
            humanPoint.textContent = playerCounter
            computerPoint.textContent = computerCounter
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





