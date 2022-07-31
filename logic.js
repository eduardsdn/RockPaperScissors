

const rock = document.querySelector('.rock');
rock.addEventListener('click', clicked_rock);

const paper = document.querySelector('.paper');
paper.addEventListener('click', clicked_paper);

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', clicked_scissors);

function computerPlay () {
    let array = ["rock","paper","scissors"];
    let randomItem = array[Math.floor(Math.random()*array.length)];
    return randomItem
}

function clicked_rock() {

    let result 
    let playerSelection = "rock"
    let computerSelection = computerPlay()

    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "rock") {
        result = "You win!"
        
    }

    else if (playerSelection == "rock" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "rock") {
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
    
    console.log(`New round begins!`)
    console.log(`You pick: ${playerSelection}`)
    console.log(`Opponent picks: ${computerSelection}`)

    return(result);
}


function clicked_paper() {

    let result 
    let playerSelection = "paper"
    let computerSelection = computerPlay()

    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "rock") {
        result = "You win!"
    }

    else if (playerSelection == "rock" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "rock") {
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
    
    console.log(`New round begins!`)
    console.log(`You pick: ${playerSelection}`)
    console.log(`Opponent picks: ${computerSelection}`)

    return(result);
}

function clicked_scissors() {

    let result 
    let playerSelection = "scissors"
    let computerSelection = computerPlay()

    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "rock") {
        result = "You win!"
        
    }

    else if (playerSelection == "rock" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "rock") {
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
    
    console.log(`New round begins!`)
    console.log(`You pick: ${playerSelection}`)
    console.log(`Opponent picks: ${computerSelection}`)

    return(result);
}


























/*function game() {
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

        else if (round_result == "Incorrect input!") {
            console.log ("Incorrect input!")
            i --
        }

        if (w == 3) {
            final = "You win the game!"
            console.log(final)
            break
        }

        else if (l ==3) {
            final = "You loose the game!"
            console.log(final)
            break
        }
    }
    
}

game() */