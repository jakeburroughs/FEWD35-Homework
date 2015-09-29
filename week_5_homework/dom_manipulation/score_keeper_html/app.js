var total = 0;

document.getElementById("increase-5").addEventListener("click", function() {
  total = total + 5;
  document.getElementById('score').innerHTML = total;
});

document.getElementById("decrease-5").addEventListener("click", function() {
  total = total - 5;
  document.getElementById('score').innerHTML = total;
});

//couldnt figure out how to stop score at 0. 

//still dont get how to get the custom score to work after reading about parseInt
// .value???
document.getElementById("submit-custom-score").addEventListener("click", function() {
   var customscore = document.getElementById('custom-score').value;
   total = parseInt(customscore);
   document.getElementById('score').innerHTML = total;
});


