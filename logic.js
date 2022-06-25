let array = ["rock","paper","scissors"];

function computerPlay () {
    let randomItem = array[Math.floor(Math.random()*array.length)];
    return randomItem
    

}

console.log(computerPlay(array))
