let array = ["rock","paper","scissors"];

function computerPlay () {
    let randomItem = array[Math.floor(Math.random()*array.length)];
    return randomItem
}



function round() {

    let result 
    let playerSelection = prompt("Make yout choice")
    let computerSelection = computerPlay()

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


    /*else if (playerSelection != "rock" 
    || playerSelection != "scissors"
    || playerSelection != "paper") {
        result = "Incorrect input!"
    }
    */

    console.log(computerSelection)
    console.log(playerSelection)
    return(result)

}



function game() {
    let final 
    let w = 0
    let l = 0

    for (let i = 0; i < 5; i++) {

        round_result = round()

        if (round_result == "You win!"){
            w ++
            console.log("You win a round!")
        }

        else if (round_result == "You loose!") {
            l ++
            console.log("You loose a round!")
        }

        else if (round_result == "Draw!") {
            console.log("It's a draw!")
            i --
        }
    }
}






game()
console.log(game())