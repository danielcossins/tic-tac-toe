
$('td').click(function(){
  $(this).addClass("blue");
  $(this).toggleClass("red");
  checkForWin();
});

function checkForWin () {


  if ($("#4").hasClass("blue") === $("#5").hasClass("blue") && $("#4").hasClass("blue") === $("#3").hasClass("blue")) {
  	alert("hey!!!!!")
  } 




}