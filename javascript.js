//AUTHOR JESS HAMILTON

//IMPORTING FROM THE HTML
const game = document.querySelector("#game")
const resultsDiv = document.querySelector('#results')
const rps = document.querySelector("#rps")

//CREATING ELEMENTS TO ADD TO THE HTML
const scoreDiv = document.createElement('div')
scoreDiv.id='score'
game.prepend(scoreDiv)
const playerChoice = document.createElement('p')
const cpuChoice = document.createElement('p')
const roundResult = document.createElement('p')
const playerScoreDisplay = document.createElement('p')
const cpuScoreDisplay = document.createElement('p')

let playerScore =  0
let cpuScore = 0
const choices = ['rock', 'paper', 'scissors']



function createButtons(){
    choices.forEach(choice => {
        const button = document.createElement('button')
        button.id = choice;
        const img = document.createElement('img')
        img.src = `./img/${choice}.jpeg`
        button.appendChild(img)
        rps.appendChild(button)
        
        button.addEventListener('click', ()=> {
            handlePlayerChoice(choice)
        })

    })
}

function handlePlayerChoice(player){
    if (playerScore < 5 && cpuScore < 5){
        let cpu = getCpuChoice()
        let result = playRound(cpu,player)


        displayChoices(player, cpu)
        displayResults(player, cpu, result)
        updateScore(result)

        if (playerScore < 5 && cpuScore < 5){
            setTimeout(()=>{
                resetGame()
            },2500)
        }else {
            endGame()
        }
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getCpuChoice(){
    let choice = getRandomInt(3)
    return choices[choice]

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

function updateScore(result){
    if (result === 'Player Wins!'){
        playerScore++
    }else if (result === 'Computer Wins!'){
        cpuScore++
    }

    scoreDiv.innerHTML = `
    <p>You: ${playerScore}</p>
    <p>Cpu: ${cpuScore}</p>
    `
}

function resetGame(){
    rps.innerHTML = ''
    resultsDiv.innerHTML = ''
    createButtons()



}
function displayChoices(player, cpu){
    rps.innerHTML = `
    <div class='choice'>
        <p>Player</p>
        <img src='./img/${player}.jpeg' alt='${player}'>
    </div>
        <div class='choice'>
        <p>CPU</p>
        <img src='./img/${cpu}.jpeg' alt='${cpu}'>
    </div>
    `
}

function displayResults(player, cpu, result){

    playerChoice.textContent =  `You: ${player}`
    cpuChoice.textContent = `Cpu: ${cpu}`
    roundResult.textContent = `Results: ${result}`

    resultsDiv.appendChild(playerChoice)
    resultsDiv.appendChild(cpuChoice)
    resultsDiv.appendChild(roundResult)
}

function endGame(){
    resultsDiv.innerHTML = ''
    resultsDiv.innerHTML += `<p>Game Over</p>`
    if (playerScore == 5){
        resultsDiv.innerHTML += `<p>You Win!</p>`
    }else {
        resultsDiv.innerHTML += `<p>You lost :(`
    }
    createRestartButton()

}

function createRestartButton(){
    const restartButton = document.createElement('button')
    restartButton.textContent = 'Restart Game'
    restartButton.id = 'restartButton'
    resultsDiv.appendChild(restartButton)
    restartButton.addEventListener('click',restartGame)
    
}

function restartGame(){
    playerScore = 0
    cpuScore = 0
    resultsDiv.innerHTML = ''
    scoreDiv.innerHTML = 
    `
    <p>You: ${playerScore}</p>
    <p>CPU: ${cpuScore}</p>
    `
    rps.innerHTML = ''
    createButtons()
}



function main(){
    createButtons()
}


main()
