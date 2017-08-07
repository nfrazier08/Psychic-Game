//Global Variables
var letters = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var userGuess = null;
var previousGuesses = [];


//Computer records the exact keys pressed to the console
//ensures that they are all lower case
document.onkeyup = function(){
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userguess);

	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
		console.log(computerChoice);

	previousGuesses = 


}
