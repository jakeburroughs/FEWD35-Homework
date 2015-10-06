$(document).ready(function() {

//this wprks to bump down the gameboard upon menu button click
// Still need to figure out how to get it to 
$(".navbar-toggle").click(function() {
  $(".gameboard").css("margin-top", "100px");
});

var myTurn = "O";

var spaces = $("td");


//jQuery Works!

$(document).on("click", "td", function() {
      if ($(this).html() === "") {
      if (myTurn === "O") {
        myTurn = "X";
        } else {
        myTurn = "O";
        }

        $(this).html(myTurn);
        } else {
        return false;
        }
    });
}); //closing tag for (document).ready



//TRY TO GET WIN CHECKING WORKING 
//IF YOU HAVE TIME OVER THE WEEKEND