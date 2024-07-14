//AUTHOR JESS HAMILTON

const resultsDiv = document.querySelector('#results')
const rps = document.querySelectorAll("#rps button")

function main(){

    let playerScore = 0
    let cpuScore = 0


    rps.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 5 && cpuScore < 5 ){
                let player = button.id
                let cpu = getComputerChoice()
                let result = playRound(cpu, player)
        
                if (result == "Player Wins!"){
                    playerScore++
                }else if (result == "Computer Wins!"){
                    cpuScore++
                }
    
                resultsDiv.innerHTML = ''
                displayResults(player,cpu,result,playerScore,cpuScore)
            }
            if (playerScore == 5 || cpuScore == 5){
                resultsDiv.innerHTML += `<p>Game Over!</p>`
                if (playerScore == 5 ){
                    resultsDiv.innerHTML += `<p>You win!</p>`
                }
                else {
                    resultsDiv.innerHTML += `<p>You lost :( </p>`
                    resultsDiv.innerHTML += `<h1>REFRESH PAGE TO PLAY AGAIN</h1>`
                }
            }

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
        return "Tied!"
    }
    else if ((computer == "rock" && player == "scissors") ||
            (computer == "paper" && player == "rock") ||
            (computer == "scissors" && player == "paper")) 
            {
                return "Computer Wins!"
    }else {
        return "Player Wins!"
    }



}

function displayResults(player, cpu, result, playerScore, cpuScore){

    const playerChoice = document.createElement('p')
    playerChoice.textContent = `Player: ${player}`

    const cpuChoice = document.createElement('p')
    cpuChoice.textContent = `CPU: ${cpu}`

    const roundResult = document.createElement('p')
    roundResult.textContent = `Results: ${result}`

    const playerScoreDisplay = document.createElement('p')
    playerScoreDisplay.textContent = `Player: ${playerScore}`

    const cpuScoreDisplay = document.createElement('p')
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`

    resultsDiv.appendChild(playerChoice)
    resultsDiv.appendChild(cpuChoice)
    resultsDiv.appendChild(roundResult)
    resultsDiv.appendChild(playerScoreDisplay)
    resultsDiv.appendChild(cpuScoreDisplay)


}

main()
