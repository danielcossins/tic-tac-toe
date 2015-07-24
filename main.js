var turn = 1;

var $reset = $('#button');
//var $message = $('#message');
var message = document.getElementById('message');

var $1 = $('#1');
var $2 = $('#2');
var $3 = $('#3');
var $4 = $('#4');
var $5 = $('#5');
var $6 = $('#6');
var $7 = $('#7');
var $8 = $('#8');
var $9 = $('#9');

var clicked1=false;
var clicked2=false;
var clicked3=false;
var clicked4=false;
var clicked5=false;
var clicked6=false;
var clicked7=false;
var clicked8=false;
var clicked9=false;

var count = {
  r1: 0,
  r2: 0,
  r3: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  d1: 0,
  d2: 0
};

$1.click(function(){
	if(clicked1){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$1.css('background-color', 'red');
		  count.r1++;
		  count.c1++;
		  count.d1++;
		}
		else{
			$1.css('background-color', 'blue');
			count.r1--;
		  count.c1--;
		  count.d1--;
		}
		turn++;
	  clicked1=true;
		checkIfWin();
	}
});

$2.click(function(){
	if(clicked2){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$2.css('background-color', 'red');
		  count.r1++;
		  count.c2++;
		}
		else{
			$2.css('background-color', 'blue');
			count.r1--;
		  count.c2--;
		}
		turn++;
		clicked2=true;
		checkIfWin();
	}
});

$3.click(function(){
	if(clicked3){
		alert("This has already been clicked");
	} else{
    if(turn%2===1){
			$3.css('background-color', 'red');
		  count.r1++;
		  count.c3++;
		  count.d2++;
		}
		else{
			$3.css('background-color', 'blue');
			count.r1--;
		  count.c3--;
		  count.d2--;
		}
		turn++;
		clicked3=true;
		checkIfWin();
	}
	
});

$4.click(function(){
	if(clicked4){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$4.css('background-color', 'red');
		  count.r2++;
		  count.c1++;
		}
		else{
			$4.css('background-color', 'blue');
			count.r2--;
		  count.c1--;
		}
		turn++;
		clicked4=true;
		checkIfWin();
	}
});

$5.click(function(){
	if(clicked5){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$5.css('background-color', 'red');
		  count.r2++;
		  count.c2++;
		  count.d1++;
		  count.d2++;
		}
		else{
			$5.css('background-color', 'blue');
			count.r2--;
		  count.c2--;
		  count.d1--;
		  count.d2--;
		}
		turn++;
		clicked5=true;
		checkIfWin();
	}
});

$6.click(function(){
	if(clicked6){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$6.css('background-color', 'red');
		  count.r2++;
		  count.c3++;
		}
		else{
			$6.css('background-color', 'blue');
			count.r2--;
		  count.c3--;
		}
		turn++;
		clicked6=true;
		checkIfWin();
	}
});

$7.click(function(){
	if(clicked7){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$7.css('background-color', 'red');
		  count.r3++;
		  count.c1++;
		  count.d2++;
		}
		else{
			$7.css('background-color', 'blue');
			count.r3--;
		  count.c1--;
		  count.d2--;
		}
		turn++;
		clicked7=true;
		checkIfWin();
	}
});

$8.click(function(){
	if(clicked8){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$8.css('background-color', 'red');
		  count.r3++;
		  count.c2++;
		}
		else{
			$8.css('background-color', 'blue');
			count.r3--;
		  count.c2--;
		}
		turn++;
		clicked8=true;
		checkIfWin();
	}
});

$9.click(function(){
	if(clicked9){
		alert("This has already been clicked");
	} else{
		if(turn%2===1){
			$9.css('background-color', 'red');
		  count.r3++;
		  count.c3++;
		  count.d1++;
		}
		else{
			$9.css('background-color', 'blue');
			count.r3--;
		  count.c3--;
		  count.d1--;
		}
		turn++;
		clicked9=true;
		checkIfWin();
	}
});

function checkIfWin(){
  var redWins = false;
  var blueWins = false;
  if(count.r1===3){
  	redWins=true;
  } else if(count.r1===-3){
  	blueWins=true;
  }
  if(count.r2===3){
    redWins=true;
  } else if(count.r2===-3){
  	blueWins=true;
  }
  if(count.r3===3){
    redWins=true;
  } else if(count.r3===-3){
  	blueWins=true;
  }

  if(count.c1===3){
  	redWins=true;
  } else if(count.c1===-3){
  	blueWins=true;
  }
  if(count.c2===3){
  	redWins=true;
  } else if(count.c2===-3){
  	blueWins=true;
  }
  if(count.c3===3){
  	redWins=true;
  } else if(count.c3===-3){
  	blueWins=true;
  }

  if(count.d1===3){
  	redWins=true;
  } else if(count.d1===-3){
  	blueWins=true;
  }
  if(count.d2===3){
  	redWins=true;
  } else if(count.d2===-3){
  	blueWins=true;
  }

  if(redWins){
  	alert("Red Wins!");
  	reset();
  }
  if(blueWins){
  	alert("Blue Wins!");
  	reset();
  }

  if(turn%2===1){
    message.innerHTML = "Red's turn";
  }
  else{
  	message.innerHTML = "Blue's turn";
  }

  if(!redWins && !blueWins && turn===10){
  	alert("It's a tie!");
  	reset();
  }
}

$reset.click(function(){
	reset();
});

function reset(){
	$('td').css('background-color', 'grey');
	count.r1=0;
	count.r2=0;
	count.r3=0;
	count.c1=0;
	count.c2=0;
	count.c3=0;
	count.d1=0;
	count.d2=0;
  
  clicked1=false;
	clicked2=false;
	clicked3=false;
	clicked4=false;
	clicked5=false;
	clicked6=false;
	clicked7=false;
	clicked8=false;
	clicked9=false;

	turn=1;
	// message.innerHTML = "Red goes first"
}