const rockBtn = document.querySelector(".rock-btn")
const paperBtn = document.querySelector(".paper-btn")
const scissorBtn = document.querySelector(".scissor-btn")
const resultDiv = document.querySelector(".resultDiv")
const playerScore = document.querySelector(".playerScore")
const computerScore = document.querySelector(".computerScore")
const playerScoreSpan = document.querySelector(".player-score-span")
const computerScoreSpan = document.querySelector(".computer-score-span")
const buttonDiv = document.querySelector(".buttons")

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
                console.log("It's a Draw! A Rock can't rock another Rock")
            }

            else if (comoputerChoice === "paper")
            {
                console.log("It's a Draw! A Paper can't fold another Paper")
            }

            else
            {
                console.log("It's a Draw! A Scissor can't cut another Scissor")
            }

            


        }

        else if (playRound(buttonSelected, comoputerChoice) === 1)
        {
            if(buttonSelected === "rock")
            {           
                console.log("Player Wins! A Rock smashes Scissors")
            }

            else if (buttonSelected === "paper")
            {
                console.log("Player Wins! A Paper folds a Rock")
            }

            else
            {
                console.log("Player Wins! A Scissor cuts through Paper")
            }

            playerCounter = playerCounter + 1
        }

        else if (playRound(buttonSelected, comoputerChoice) === 2)
        {
            if(comoputerChoice === "rock")
            {
                console.log("Computer Wins! A Rock smashes Scissors")
            }

            else if (comoputerChoice === "paper")
            {
                console.log("Computer Wins! A Paper folds a Rock")
            }

            else
            {
                console.log("Computer Wins! A Scissor cuts through a Paper")
            }

            computerCounter = computerCounter + 1
        }

        turn = turn - 1
    }

    else
    {
        console.log("The End")
        if (playerCounter > computerCounter)
        {
            console.log("You Win!")
            console.log("Final Winner: Player")
            console.log("----- Score ---" )
            console.log(playerCounter + " to " + computerCounter)
        }

        else if (playerCounter < computerCounter)
        {

            console.log("You Lost!")
            console.log("Final Winner: Computer")
            console.log("----- Score ---" )
            console.log(computerCounter + " to " + playerCounter)  
        }

        else
        {
            console.log("Its a Draw!")
            console.log("----- Score ---" )
            console.log(playerCounter + " to " + computerCounter)
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





