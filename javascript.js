//AUTHOR JESS HAMILTON

function main(){

    let playerScore = 0
    let cpuScore = 0
    const rps = document.querySelectorAll("#rps button")
    const resultsDiv = document.querySelector('#results')
    
    rps.forEach((button) => {
        button.addEventListener('click', () => {
            let player = button.id
            let cpu = getComputerChoice()
            console.log('This is the player ',player)
            console.log('This is the cpu ',cpu)

            let round = playRound(cpu, player)
        })
    })

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){

    let choice = getRandomInt(3)
    if (choice == 0){
        return "rock"
    } 
    else if (choice == 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}


function playRound(computer, player){
    if (computer == player) {
        console.log("tied")
        return "Tied!"
    }
    else if ((computer == "rock" && player == "scissors") ||
            (computer == "paper" && player == "rock") ||
            (computer == "scissors" && player == "paper")) 
            {
                console.log("Computer Wins!")
                return "Computer Wins!"
    }else {
        console.log("Player Wins!")
        return "Player Wins!"
    }

}

function displayResults(player, cpu, result, playerScore, cpuScore){

    resultsDiv.innerHTML = ''

    const playerChoice = document.createElement('p')
    playerChoice.textContent = 'Player: ${player}'

    const cpuChoice = document.createElement('p')
    cpuChoice.textContent = 'CPU: ${cpu}'

    const roundResult = document.createElement('p')
    roundResult.textContent = 'Results: ${result}'

    const playerScoreDisplay = document.createElement('p')
    playerScoreDisplay.textContent = 'Player: ${playerScore}'

    const cpuScoreDisplay = document.createElement('p')
    cpuScoreDisplay.textContent = 'CPU: ${cpuScore}'

    resultsDiv.appendChild(playerChoice)
    resultsDiv.appendChild(cpuChoice)
    resultsDiv.appendChild(roundResult)
    resultsDiv.appendChild(playerScoreDisplay)
    resultsDiv.appendChild(cpuScoreDisplay)


}

main()




    // while (humanScore < 5 && computerScore < 5){
//     let computer = getComputerChoice()
//     let player = getHumanChoice()
//     let result = playRound(computer, player)

//     if (result == "Player Wins!") {
//         humanScore++
//     } else if (result == "Computer Wins!") {
//         computerScore++
//     }
//     console.log("Your score: ", humanScore)
//     console.log("Computer score: ",computerScore)

//     alert(`Computer choice: ${computer}\nYour choice: ${player}\nResult: ${result}\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
// }


// if (humanScore === 5){
//     console.log("You win!")
// } else {
//     console.log("You lost")
// }