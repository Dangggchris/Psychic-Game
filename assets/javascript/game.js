
var validInputs = "abcdefghijklmnopqrstuvwxyz"; 
var computerGuess = computerGuess;
var computerGuess = validInputs[Math.floor(Math.random() * validInputs.length)]; // Generates random letter
var userInput = [];
var win = 0; 
var loss = 0;
var guesses = 15;


function compGuessMethod() {
    computerGuess = validInputs[Math.floor(Math.random() * validInputs.length)]; // Generates random letter

}

document.onkeydown = function (input) {
    var userGuess = event.key; 
    
    //if user guess is correct
    if (userGuess === computerGuess) {
        win++; 
        guesses = 15;
        loss = 0;
        userInput = [];
        compGuessMethod();
    }

    //if user guess is incorrect
    else if (userGuess !== computerGuess) {
        guesses--;

        if (userInput.includes(userGuess)) {
            //alert("You already tried that letter!");
        }
        userInput.push(userGuess);
    }

    //when user uses all guesses
    if (guesses === 0) {
        loss++;
        guesses = 15;
        compGuessMethod();
    }
    
document.getElementById("wins").textContent = win;
document.getElementById("loss").textContent = loss;
document.getElementById("guesses").textContent = guesses;
document.getElementById("tried").textContent = userInput;

console.log(userGuess);
console.log("computer guessed" + computerGuess);
}

