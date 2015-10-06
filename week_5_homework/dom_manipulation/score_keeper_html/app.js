// ARUN CODE ALONG SCOREKEEPER 
document.addEventListener("DOMContentLoaded", function() {

//set initial score
var score = 0;

//
var scoreBoard = document.getElementById("score")

//Increase score
document
    .getElementById("increase-5")
    .addEventListener("click", function() {
        score += 5; // "+=" incrementer syntax

        //Reflect change in DOM
        scoreBoard
          .innerHTML = score + " Points";
    });


//Decrease score
document
    .getElementById("decrease-5")
    .addEventListener("click", function() {
        if (score >= 5) {
            score -= 5; // "+=" decrementer syntax
        
        //Reflect change in DOM
        scoreBoard
          .innerHTML = score + " Points";
        } else {
          score = 0;
          scoreBoard
          .innerHTML = score + " Points";
        }
        
    });

//custom score
document
    .querySelector("#submit-custom-score")
    .addEventListener("click", function() {
        var textScore = document
            .querySelector("#custom-score")
            .value;

        var numScore = parseInt(textScore);

        score = numScore;  

        scoreBoard
            .innerHTML = score + " Points";
    });


}); 


// MY FIRST ATTEMPT AT SCOREKEEPER 

// var total = 0;

// document.getElementById("increase-5").addEventListener("click", function() {
//   total = total + 5;
//   document.getElementById('score').innerHTML = total;
// });

// document.getElementById("decrease-5").addEventListener("click", function() {
//   total = total - 5;
//   document.getElementById('score').innerHTML = total;
// });

// //couldnt figure out how to stop score at 0. 

// //still dont get how to get the custom score to work after reading about parseInt
// // .value???
// document.getElementById("submit-custom-score").addEventListener("click", function() {
//    var customscore = document.getElementById('custom-score').value;
//    total = parseInt(customscore);
//    document.getElementById('score').innerHTML = total;
// });


