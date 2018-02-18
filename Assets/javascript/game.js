



// var img = new Image(); //Creates an HTMLImageElement
// img.src = "Assets/images/hangmanSprite.jpg";
// img.addEventListener("load", function() {
//     ctx.drawImage(img, 0, 0);
// });



// variable provides word options...
var words = ["tuna", "salmon", "bass", "trout", "pike", "crappy", "carp", "catfish", "archerfish", "barracuda", "dory", "nemo", "marlin", "halibut", "rockfish", "monkfish", ];
// var answerAry = [];
var gameOver = false;
var gameStart = false;
// start game..
// while (gameOver == false && gameStart == false) {
window.addEventListener("keydown", startGame, false);
function startGame() {
    // variable to select random word from words array...
    gameStart = true;
    var rand = words[Math.floor(Math.random() * words.length)];
    console.log(rand);
    // identify letter count for random word...
    var wordLength = rand.length;
    var answerAry = [];
    // generate and display underscores
    for(var i=0; i<wordLength; i++) {
        answerAry[i] = "_";
    }
    // var remainingLetters = rand.length;
    console.log(answerAry);
    document.getElementById("wordInPlay").innerHTML = answerAry;
}
// }
// 
//display player's progress...

// allow player to guess a letter...
    // take letter guess...

    // update game state...

    // display state of game...
    // guesses remaining...
    // var remainingLetters = "9";

    
// Game Loop!!!
    // while ((remainingLetters > 0)  && (gameStart = true)) {
    // // take letter guess...
    // var guess = "";
    // var remainingLetters = "9";

    // function recordGuess() {
    //     window.addEventListener("keyup", recordGuess, false);
    // console.log(guess);
    //     // document.getElementById("#guessesLeft").innerHTML = ("remainingLetters");
    // }
    // }

    







// dynamically create variables for each letter in current random word...


// display underscores in the html for each letter in current random word...


