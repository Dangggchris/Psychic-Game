
var validInputs = "abcdefghijklmnopqrstuvwxyz"; 
var userInput = [];
var computerGuess = validInputs[Math.floor(Math.random() * validInputs.length)]; // Generates random letter
var win = 0; 
var loss = 0;
var guesses = 15;

console.log(computerGuess);

document.onkeydown = function (input) {
    var userGuess = event.key; 

    //if user guess is correct
    if (userGuess === computerGuess) {
        win++; 
        guesses = 15;
        loss = 0;
    }

    //if user guess is incorrect
    else if (userGuess !== computerGuess) {
        guesses--;

        if (userInput.includes(userGuess)) {
            alert("You already tried that letter!");
        }
        userInput.push(userGuess);
    }

    //when user uses all guesses
    if (guesses === 0) {
        loss++;
        guesses = 15;
    }
    
document.getElementById("wins").textContent = win;
document.getElementById("loss").textContent = loss;
document.getElementById("guesses").textContent = guesses;
document.getElementById("tried").textContent = userInput;


console.log(userGuess);

}

