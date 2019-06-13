//create general page components
// alert('Are you ready to play!?') ***
//press any key to start
//comp needs to pick random word 
var words = ["rabbit", "banana", "monkey", "totoro", "black", "pen", "hat", "canteen"]

//create word list
//and define other variable arrays.

var rightWord = [];
var wrongGuesses = [];
var rightGuess = [];
var underScore = [];
var maxGuesses;
var usedLetters = [];
var randomWord;
var answers = [];
var lettersRemaining;


function start() {
    rightWord = [];
    wrongGuesses = [];
    underScore = [];
    answers = [];
    maxGuesses = 9;
    randomWord = words[Math.floor(Math.random() * words.length)].split('');
    document.getElementById("number-guesses-remaining").textContent = maxGuesses-1;
    lettersRemaining = randomWord.length;

    for (var i = 0; i < randomWord.length; i++) {
        //this loop counts the number of letters in the random word and pushes that specific # of underscores to answers array.
        answers.push("_");
    }
    //puts the 'answers' array into html by "joining" them.
    document.getElementById("underscores").textContent = answers.join(' ');
}
start();

//get user's guess 
document.onkeyup = function (event) {
    var letterGuess = event.key;
    // console.log(letterGuess);


    // "letterGuess" now holds the value of the letters guessed

    //now index is a number that corresponds to the index of the guessed letter
    var index; // = randomWord.indexOf(letterGuess);
    var foundOne = false;

    //trying to get it to go through the whole word and fill in ALL the same letters
    while ((index = randomWord.indexOf(letterGuess)) > -1) {
        //add to rightWords array
        if(rightWord.indexOf(letterGuess) === -1) {
            rightWord.push(letterGuess);
        }
        answers[index] = letterGuess;
        randomWord[index] = '';
        document.getElementById("underscores").textContent = answers.join(' ');
        index = randomWord.indexOf(letterGuess);
        lettersRemaining--;
        foundOne = true;
        // need to loop this function until index of length of array of randomWord 
    }
    
    // usedLetters.push(letterGuess);
    // document.getElementById("rightGuess").textContent = rightWord.join(' ');

    if (foundOne === false) {
        wrongGuesses.push(letterGuess);
        document.getElementById("wrongGuess").textContent = wrongGuesses.join(' ');
        document.getElementById("number-guesses-remaining").textContent = maxGuesses-1;
        // console.log(lettersRemaining);
        console.log(wrongGuesses);

        if (--maxGuesses === 0) {
            alert('loser');
            wrongGuesses =[];
            start();
        }
        return;
     
    }
    
    // // //checks to see if user word matches guesses
    if (lettersRemaining === 0) {
        setTimeout(function() {
            alert('You Win');
            start();
        },100);
      
    }
    // when done
    
}

