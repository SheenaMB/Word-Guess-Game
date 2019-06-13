//create general page components
// alert('Are you ready to play!?') ***
//press any key to start
//comp needs to pick random word 
var words = ["rabbit", "banana", "monkey", "totoro", "black", "pen", "hat", "canteen"]

randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);
//create word list
//and define other variable arrays.

var rightWord = [];
var wrongWord = [];
var underScore = [];
var maxGuesses = 9;
var randomWord;
var answers = [];

console.log(randomWord);

function start() {

    for (var i = 0; i < randomWord.length; i++) {
        //this loop counts the number of letters in the random word and pushes that specirif # of underscores to answers array.
        answers.push("_");
    }
    //puts the 'answers' array into html by "joining" them.
    document.getElementById("underscores").textContent = answers.join(' ');
}
start();

//get user's guess 
document.onkeyup = function (event) {
    var letterGuess = event.key;
    console.log(letterGuess);

    // "letterGuess" now holds the value of the letters guessed

//now index is a number that corresponds to the index of the guessed letter
    var index = randomWord.indexOf(letterGuess);
    if (index > -1) {
      //add to rightWords array
        rightWord.push(letterGuess);
        answers[index] = letterGuess;
        document.getElementById("underscores").textContent = answers.join(' ');
        // console.log(rightWord);
        // //replace underscore with right letter
        // underScore[chosenWord.indexof(letterGuess)] = letterGuess;
        // document.getElementById("underscores").textContent;

        // function myFunction() {
        //     var x = document.getElementById("underscores").textContent;
        //     document.getElementById("underscores").innerHTML = x;  
    }

    // //checks to see if user word matches guesses
    // if(underScore.join('') === chosenWord); {
    //     alert ('You Win');

    // } 
    // else {
    //     //add to wrongWords array
    //     wrongWord.push(wrongWord);
    //     console.log(wrongWord);
    // }
}


//Check if guess is right


//if right push to right array
//if wrong push to wrong array


//when keyUp(?) selected key is compared to letters in randomWord and

    //IF letter is true or ===, that letter replaces the placeholder, and runs foo.join(' ')
    //ELSE then placed under as letters already guessed.

//Define number of max guesses.    

    //If word is guessed before maxGuesses then .textContent YOU WIN! then game reset.

    //If max guesses reached, then .textContext LOSER. Game reset. 



    // var remainingLetters = randomWord.length;