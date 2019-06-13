//create general page components
// alert('Are you ready to play!?') ***
//press any key to start


//create word list

var words = ["rabbit", "banana", "monkey", "totoro","black",""]

     
//comp needs to pick random word 
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
//and define other variable arrays.
var rightWord = [];
var wrongWord = [];
var chosenWord = words[randomWord];
var underScore = [];

// assign that currentWord

//display of letter placeholders = to the number of letters in word chosen
var answers = [];
for (var i = 0; i < randomWord.length; i++) {
    answers[i] = "_";
}
console.log(answers.join(' '))

//get user's guess 
document.onkeyup = function(event){
    var letterGuess = event.key;
    console.log(letterGuess);
    if (randomWord.indexOf(letterGuess) > -1) {
        console.log(true);
    }
} 
// "letterGuess" now holds the value of the letters guessed

//Check if guess is right


//if right push to right array
//if wrong push to wrong array


//when keyUp(?) selected key is compared to letters in randomWord and

    //IF letter is true or ===, that letter replaces the placeholder, and runs foo.join(' ')
    //ELSE then placed under as letters already guessed.

//Define number of max guesses.    

    //If word is guessed before maxGuesses then .textContent YOU WIN! then game reset.

    //If max guesses reached, then .textContext LOSER. Game reset. 


    var remainingLetters = randomWord.length;