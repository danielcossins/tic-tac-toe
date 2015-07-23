
$('td').click(function(){
  $(this).addClass("blue");
  $(this).toggleClass("red");
  checkForWin();
});

function checkForWin () {
  if ($("#1").hasClass("red") === $("#2").hasClass("red") && 
  	$("#1").hasClass("red") === $("#3").hasClass("red")) {
  	alert("hey!!!!!");
  }
  if ($("#4").hasClass("red") === $("#5").hasClass("red") && 
  	$("#4").hasClass("red") === $("#6").hasClass("red")) {
  	alert("hey!!!!!");
  }
  if ($("#7").hasClass("red") === $("#8").hasClass("red") && 
  	$("#7").hasClass("red") === $("#9").hasClass("red")) {
  	alert("hey!!!!!");
  }
}