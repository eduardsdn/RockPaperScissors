

function computerPlay () {
    let array = ["rock","paper","scissors"];
    let randomItem = array[Math.floor(Math.random()*array.length)];
    return randomItem
}


function playerSelected () {
    const rock = document.querySelector('.rock')
    rock.addEventListener('click', function() {
        selected = "rock"
    } )

    const paper = document.querySelector('.paper')
    paper.addEventListener('click', function() {
        selected = "paper"
    })

    const scissors = document.querySelector('.scissors')
    scissors.addEventListener('click', round)
}








function round() {

    let result 
    let playerSelection = playerSelected()
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
    return(result)

}


function game() {
    let final 
    let w = 0
    let l = 0

    for (let i = 0; i < 5; i++) {

        const rock = document.querySelector('.rock')
        rock.addEventListener('click', round)

        const paper = document.querySelector('.paper')
        paper.addEventListener('click', round)

        const scissors = document.querySelector('.scissors')
        scissors.addEventListener('click', round)


        if (rock == "You win!"|| paper == "You win!" || scissors == "You win!"){
            w ++
            console.log("You win a round!")
        }

        else if (rock == "You loose!" || paper == "You loose!" || scissors == "You loose!") {
            l ++
            console.log("You loose a round!")
        }

        else if (rock == "Draw!" || paper == "Draw!" || scissors == "Draw!") {
            console.log("It's a draw!")
            i --
        }

        else if (rock == "Incorrect input!" || paper == "Incorrect input!" || scissors == "Incorrect input!") {
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

game()


