//Global Variables
var letters = ["a","b","c", "d", "e", "f", "g", "h",
 "i", "j", "k", "l", "m", "n", "o",
 "p", "q", "r", "s", "t", "u", "v",
  "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var maxGuesses = 9
var guessedLettersArray = [] //array to store user input


//Computer chooses a random letter
var computerChoice  = letters[Math.floor(Math.random() * letters.length)];
 		console.log("this is the computer guess " + computerChoice);

//user guesses the random letter
document.onkeyup = function(event){
	console.log(event);
	
	var userGuess = event.key; //variable to store userGuess
		console.log(userGuess);
	
	//Eliminate user to lower case alphabet
	function isLowerAlpha(event){
	var keyCode = event.key
	(keyCode < 65 || keyCode > 90)
	}

	
//user gets nine guesses
	guessedLettersArray.push(userGuess)
	console.log("This is the guessedLettersArray " + guessedLettersArray)


//if the user guesses the letter correctly then they win
//if not, the user looses a guess
//after loosing all nine guesses they loose the game
//Determine if user guess is equal to computers guess
 			if (userGuess === computerChoice){
 				wins++
 				console.log("you win")
 			}
 			 else if(guessedLettersArray.length >= maxGuesses){
 				losses++ 
 				console.log("you loose")
 			}
 			else {
 				console.log("You didn't win or loose")
 			};
 //TODO: Limit user guesses to 9.

 //Replace inner HTML
 //document.getElementById(id).innerHTML = new HTML

 document.getElementById("wins").innerHTML = "Wins: " + wins;
 document.getElementById("losses").innerHTML = "Losses: " +losses;
 document.getElementById("maxGuesses").innerHTML = "Guesses Left: " + maxGuesses;
 document.getElementById("guessedLetters").innerHTML = "Your guesses so far: " + guessedLettersArray; 

 			
};




