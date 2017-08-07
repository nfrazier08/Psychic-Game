//Global Variables
var letters = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9
var guessedLetters = [] //array to store user input




document.onkeyup = function(event){
	// var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	
	var userGuess = event.key; //variable to store userGuess
		console.log(userGuess);

	guessedLetters.push(userGuess);

	var computerChoice = computerChoice = letters[Math.floor(Math.random() * letters.length)];
 		console.log(computerChoice);

 			//Determine if user guess is equal to computers guess
 			if (userGuess === computerChoice){
 				wins++
 				guessLeft--

 			}
 			 else{
 				losses++
 			}

 			if (guessLeft === 0){
 				losses++
 				guessLeft--
 			}


 			//Replace inner HTML
 			var html= + "Wins: " + wins + "Loses: "+ losses + "Guesses Left: " + guessesLeft + "Guessed Letters: " +  guessedLetters.join(', '); //Show guessed letters here
    		document.querySelector("#game").innerHTML = html;

    	}






