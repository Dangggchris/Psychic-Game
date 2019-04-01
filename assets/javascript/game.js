
var validInputs = "abcdefghijklmnopqrstuvwxyz"; 
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
        userInput = [];

        // generate new letter
        compGuessMethod();
    }

    //if user guess not equal to computer. It will tell you if the key has been pressed and or it will push the letter into used guesses
    else if (userGuess !== computerGuess) {
        

        if (userInput.includes(userGuess)) {
            alert("You already tried that letter!");
        }
        else { 
            guesses--;
            userInput.push(userGuess);
            console.log(userInput);
        }
    }

    //when user uses all guesses
    if (guesses === 0) {
        loss++;
        guesses = 15;
        userInput = [];

        // generate new letter game
        compGuessMethod();
    }
    
document.getElementById("wins").textContent = win;
document.getElementById("loss").textContent = loss;
document.getElementById("guesses").textContent = guesses;
document.getElementById("tried").textContent = userInput;

console.log("You guessed: " + userGuess);
console.log("Computer guessed: " + computerGuess);
}

