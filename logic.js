let array = ["rock","paper","scissors"];

function computerPlay () {
    let randomItem = array[Math.floor(Math.random()*array.length)];
    return randomItem
}



let playerSelection = prompt("Make yout choice")

let computerSelection = computerPlay()

function round(playerSelection, computerSelection) {

    let result 

    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "rock") {
        result = "You win!"
    }

    else if (playerSelection == "rock" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "scissors" 
    ||playerSelection == "scissors" && computerSelection == "rock") {
        result = "You loose!"
    }

    else if (playerSelection == "rock" && computerSelection == "rock" 
    || playerSelection == "paper" && computerSelection == "paper" 
    ||playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Draw!"
    }

    else if (playerSelection != "rock" 
    || playerSelection != "scissors"
    || playerSelection != "paper") {
        result = "Incorrect input!"
    }
    
    return(result)
}

console.log(playerSelection)
console.log(computerSelection)
console.log(round(playerSelection, computerSelection))