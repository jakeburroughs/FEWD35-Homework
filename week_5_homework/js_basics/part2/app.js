
//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.


//FIRST ATTEMPT - seems to work - answer is 10
var x = 5;
var y = 10;

function max() {
    if (x > y) {
      console.log(x)
    } 
    else{
      console.log(y)
    };
}

max();
 
// //SECOND ATTEMPT - also seems to work - answer is 10
// function max(){
//   console.log(Math.max(5,10));
// }

// max();



//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. Check out the Math module built in to JavaScript to help you. - answer is 15

function maxOfThree(){
  console.log(Math.max(5, 10, 15));
}

maxOfThree();


// //Pulled these from stack overflow when researching for Math.max 
// //How do they work? - answer is 15 

// var numList = [5, 10, 15];
//   console.log(Math.max.apply(Math,numList));  


// // - answer is "max number is" 15

//  var numbers = [5, 10, 15];
//  numbers.sort(function(a,b){return b-a});
//  console.log("max number is", numbers[0]); 

