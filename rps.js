const rockBtn = document.querySelector(".rock-btn")
const paperBtn = document.querySelector(".paper-btn")
const scissorBtn = document.querySelector(".scissor-btn")
const resultDiv = document.querySelector(".resultDiv")
const playerScore = document.querySelector(".playerScore")
const computerScore = document.querySelector(".computerScore")
const playerScoreSpan = document.querySelector(".player-score-span")
const computerScoreSpan = document.querySelector(".computer-score-span")
const buttonDiv = document.querySelector(".buttons")

buttonDiv.addEventListener('click', function(e)
{
    e.preventDefault()

    let buttonSelected = e.target.className
    let computerChoice = getComputerChoice()



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

    
    playRound(buttonSelected, computerChoice)
    

    



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

        console.log("It's a Draw")
        console.log(playerSelection + "  " + computerSelection)
    }

    else
    {
        if (playerSelection === "rock")
        {
            if (computerSelection === "scissor")
            {
                console.log("Player Wins!! Rocks breaks Scissors")
                console.log(playerSelection + "  " + computerSelection)
            }

            else
            {
                console.log("Computer Wins!! Paper folds a rock")
                console.log(playerSelection + "  " + computerSelection)
            }
        }

        else if (playerSelection === "paper")
        {
            if (computerSelection === "rock")
            {
                console.log("Player Wins!! Paper folds a rock")
                console.log(playerSelection + "  " + computerSelection)
            }

            else 
            {
                console.log("Computer Wins!! Scissor cuts through paper")
                console.log(playerSelection + "  " + computerSelection)
            }
        }

        else if (playerSelection === "scissor")
        {
            if(computerSelection === "rock")
            {
                console.log("Computer Wins!! Rock breaks scissors")
                console.log(playerSelection + "  " + computerSelection)
            }

            else
            {
                console.log("Player Wins!! Scissor cuts throught paper")
                console.log(playerSelection + "  " + computerSelection)
            }
        }
    }

}

// function game()
// {
    

//     let playerCounter = 0
//     let computerCounter = 0

//     for (let i = 0; i < 5; i++)
//     {
//         let playerSelection = prompt("Enter your choice [from rock, paper, scissors]")
//         let comoputerChoice = getComputerChoice()
//         playRound(playerSelection, comoputerChoice)

//         {
//             if (playRound(playerSelection, comoputerChoice) === 0)
//             {
//                 if (comoputerChoice === "rock")
//                 {
//                     console.log("It's a Draw! A Rock can't rock another Rock")
//                 }

//                 else if (comoputerChoice === "paper")
//                 {
//                     console.log("It's a Draw! A Paper can't fold another Paper")
//                 }

//                 else
//                 {
//                     console.log("It's a Draw! A Scissor can't cut another Scissor")
//                 }


//             }

//             else if (playRound(playerSelection, comoputerChoice) === 1)
//             {
//                 if(playerSelection === "rock")
//                 {           
//                     console.log("Player Wins! A Rock smashes Scissors")
//                 }

//                 else if (playerSelection === "paper")
//                 {
//                     console.log("Player Wins! A Paper folds a Rock")
//                 }

//                 else
//                 {
//                     console.log("Player Wins! A Scissor cuts through Paper")
//                 }

//                 playerCounter = playerCounter + 1
//             }

//             else if (playRound(playerSelection, comoputerChoice) === 2)
//             {
//                 if(comoputerChoice === "rock")
//                 {
//                     console.log("Computer Wins! A Rock smashes Scissors")
//                 }

//                 else if (comoputerChoice === "paper")
//                 {
//                     console.log("Computer Wins! A Paper folds a Rock")
//                 }

//                 else
//                 {
//                     console.log("Computer Wins! A Scissor cuts through a Paper")
//                 }

//                 computerCounter = computerCounter + 1
//             }


            
//         }
//     }

//     if (playerCounter > computerCounter)
//     {
//         console.log("You Win!")
//         console.log("Final Winner: Player")
//         console.log("----- Score ---" )
//         console.log(playerCounter + " to " + computerCounter)
//     }

//     else if (playerCounter < computerCounter)
//     {

//         console.log("You Lost!")
//         console.log("Final Winner: Computer")
//         console.log("----- Score ---" )
//         console.log(computerCounter + " to " + playerCounter)  
//     }

//     else
//     {
//         console.log("Its a Draw!")
//         console.log("----- Score ---" )
//         console.log(playerCounter + " to " + computerCounter)
//     }

// }



