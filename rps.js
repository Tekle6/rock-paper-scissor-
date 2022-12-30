function getComputerChoice()
{
    let rpsArray = ["rock", "paper", "scissor"]
    let currentValue = Math.floor(Math.random() * 3)

    return rpsArray[currentValue]
}


function playRound (playerSelection, computerSelection)
{

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

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


function game()
{
    

    let playerCounter = 0
    let computerCounter = 0

    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Enter your choice [from rock, paper, scissors]")
        let comoputerChoice = getComputerChoice()
        playRound(playerSelection, comoputerChoice)

        {
            if (playRound(playerSelection, comoputerChoice) === 0)
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

            else if (playRound(playerSelection, comoputerChoice) === 1)
            {
                if(playerSelection === "rock")
                {           
                    console.log("Player Wins! A Rock smashes Scissors")
                }

                else if (playerSelection === "paper")
                {
                    console.log("Player Wins! A Paper folds a Rock")
                }

                else
                {
                    console.log("Player Wins! A Scissor cuts through Paper")
                }

                playerCounter = playerCounter + 1
            }

            else if (playRound(playerSelection, comoputerChoice) === 2)
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


            
        }
    }

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

game()


