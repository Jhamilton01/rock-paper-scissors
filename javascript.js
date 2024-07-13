let humanScore = 0
let computerScore = 0


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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    let choice = prompt("Enter r for rock, p for paper, or s for scissors: ")

    if (choice == "r"){
        return "rock"
    } 
    else if (choice == "p"){
        return "paper"
    }
    else (choice == "s") 
        return "scissors"
}


function playRound(computer, player){
    if (computer == player) {
        console.log("Tied!")
        return "Tied!"
    }
    else if ((computer == "rock" && player == "scissors") ||
            (computer == "paper" && player == "rock") ||
            (computer == "scissors" && player == "paper")) {
                console.log("Computer Wins!")
                return "Computer Wins!"
    }
    else {
        console.log("Player Wins!")
        return "Player Wins!"
    }

}


while (humanScore < 5 && computerScore < 5){
    let computer = getComputerChoice()
    let player = getHumanChoice()
    let result = playRound(computer, player)

    if (result == "Player Wins!") {
        humanScore++
    } else if (result == "Computer Wins!") {
        computerScore++
    }
    console.log("Your score: ", humanScore)
    console.log("Computer score: ",computerScore)

    alert(`Computer choice: ${computer}\nYour choice: ${player}\nResult: ${result}\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
}

if (humanScore === 5){
    console.log("You win!")
} else {
    console.log("You lost")
}




