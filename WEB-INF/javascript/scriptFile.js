var i1 = 0;
var i2 = 0;
const MIN_SCORE = 5;
const WIN_POINT_DIFF = 3;
const CONSECUTIVE_NO_STRIKE = 3;
const CONSECUTIVE_LOOSING_LIMIT = 3;
var RED_COIN = 1;
var BLACK_COIN = 9;
var consecutive_no_strike1 = 0;
var consecutive_no_strike2 = 0;
var consecutive_loosing1 = 0;
var consecutive_loosing2 = 0;
var coinsArray = []

function checkDraw(){
	if(BLACK_COIN == 0 && RED_COIN == 0 && !(getWinner())){
		alert("Match is draw");
		location.href = "index.html";
		return 0;
	}
	event.preventDefault();	
}

function getWinner(){
	var Player1Score = document.getElementById("c1").value;
	var Player2Score = document.getElementById("c2").value;

	if ((( Player1Score >= MIN_SCORE) || (Player2Score >= MIN_SCORE))
        && Math.abs(Player1Score - Player2Score) >= WIN_POINT_DIFF)
	{	
		if(Player1Score > Player2Score){
			alert("Player1 is winner with score "+Player1Score+" !!!");
			location.href = "index.html";
		}
		else{
			alert("Player2 is winner with score "+Player2Score+" !!!");
			location.href = "index.html";			
		}
	}
	event.preventDefault();
	return 0;
	
}

function checkCoinExist(){

	if(BLACK_COIN>1){
		BLACK_COIN-=2;
		event.preventDefault();
		return 1;
	}
	else if(BLACK_COIN > 0 && RED_COIN == 1){
		BLACK_COIN--;
		RED_COIN--;
		event.preventDefault();
		return 1;
	}
	else{
		alert("Sorry You can not choose multi strike");
		event.preventDefault();
		return 0;
	}
}

function checkRedCoinExist(){
	if(RED_COIN>0){
		RED_COIN--;
		event.preventDefault();
		return 1;	
	}
	else{	
		alert("Sorry there is no Red coin");
		event.preventDefault();
		return 0;
	}
}

function checkBlackCoinExist(){
	if(BLACK_COIN>0){
		BLACK_COIN--;
		event.preventDefault();
		return 1;
	}
	else{
		alert("Sorry there is no Black coin");
		event.preventDefault();
		return 0; 
	}
}

function strike1(){

	var checkdraw = checkDraw();
	if(checkBlackCoinExist() == 1 && !(checkdraw)){
		var dup = (i1=i1+1);
		document.getElementById("c1").value = dup;
		event.preventDefault();
	}
	console.log("Black coin "+BLACK_COIN+" left");
	var check = getWinner();
	event.preventDefault();
}

function strike2(){
	var checkdraw = checkDraw();
	if(checkBlackCoinExist() == 1  && !(checkdraw)){
		var dup = (i2=i2+1);
		document.getElementById("c2").value = dup;
	}
	console.log("Black coin "+BLACK_COIN+" left");
	var check = getWinner();
	event.preventDefault();
}

function multistrike1(){
	var checkdraw = checkDraw();
	if(checkCoinExist() == 1  && !(checkdraw)){
		var dup = (i1=i1+2);
		document.getElementById("c1").value = dup;
		
	}
	console.log("Black coin "+BLACK_COIN+" left");
	console.log("red coin "+RED_COIN+" left");
	var check = getWinner();
	event.preventDefault();
}

function multistrike2(){
	var checkdraw = checkDraw();
	if(checkCoinExist() == 1  && !(checkdraw)){
		var dup = (i2=i2+2);
		document.getElementById("c2").value = dup;
		
	}
	console.log("Black coin "+BLACK_COIN+" left");
	console.log("red coin "+RED_COIN+" left");
	var check = getWinner();
	event.preventDefault();
}


function redstrike1(){
	var checkdraw = checkDraw();
	if(checkRedCoinExist() == 1  && !(checkdraw)){
		var dup = (i1=i1+3);
		document.getElementById("c1").value = dup;
	}
	console.log("red coin "+RED_COIN+" left");	
	var check = getWinner();
	event.preventDefault();
}

function redstrike2(){
	var checkdraw = checkDraw();
	if(checkRedCoinExist() == 1  && !(checkdraw)){
		var dup = (i2=i2+3);
		document.getElementById("c2").value = dup;
	}
	console.log("red coin "+RED_COIN+" left");
	var check = getWinner();
	event.preventDefault();
}

function strikerstrike1(){
	var checkdraw = checkDraw();
	if(consecutive_loosing1 == CONSECUTIVE_LOOSING_LIMIT  && !(checkdraw)){
		var cons = document.getElementById("c1").value;
		cons--;
		document.getElementById("c1").value = cons;
		consecutive_loosing1 = 0;
	}
	consecutive_loosing1++;
	var dup = (i1=i1-1);
	document.getElementById("c1").value = dup;
	event.preventDefault();
}


function strikerstrike2(){
	var checkdraw = checkDraw();
	if(consecutive_loosing2 == CONSECUTIVE_LOOSING_LIMIT  && !(checkdraw)){
		var cons = document.getElementById("c2").value;
		cons--;
		document.getElementById("c2").value = cons;
		consecutive_loosing2 = 0;
	}
	consecutive_loosing2++;
	var dup = (i2=i2-1);
	document.getElementById("c2").value = dup;
	event.preventDefault();
}


function defunctcoin1(){
	var checkdraw = checkDraw();
	if(consecutive_loosing1 == CONSECUTIVE_LOOSING_LIMIT  && !(checkdraw)){
		var cons = document.getElementById("c1").value;
		cons--;
		document.getElementById("c1").value = cons;
		consecutive_loosing1 = 0;
	}
	consecutive_loosing1++;
	var dup = (i1=i1-2);
	document.getElementById("c1").value = dup;
	event.preventDefault();
}


function defunctcoin2(){
	var checkdraw = checkDraw();
	if(consecutive_loosing2 == CONSECUTIVE_LOOSING_LIMIT  && !(checkdraw)){
		var cons = document.getElementById("c2").value;
		cons--;
		document.getElementById("c2").value = cons;
		consecutive_loosing2 = 0;
	}
	consecutive_loosing2++;
	var dup = (i2=i2-2);
	document.getElementById("c2").value = dup;
	event.preventDefault();
}


function none1(){
	if(consecutive_no_strike1 == CONSECUTIVE_NO_STRIKE){
		var cons = document.getElementById("c1").value;
		cons--;
		document.getElementById("c1").value = cons;
		consecutive_no_strike1 = 0;
	} 
	consecutive_no_strike1++;
	var dup = (i1=i1+0);
	document.getElementById("c1").value = dup;
	event.preventDefault();
}


function none2(){
	if(consecutive_no_strike2 == CONSECUTIVE_NO_STRIKE){
		var cons = document.getElementById("c2").value;
		cons--;
		document.getElementById("c2").value = cons;
		consecutive_no_strike2 = 0;
	}
	consecutive_no_strike2++;	
	var dup = (i2=i2+0);
	document.getElementById("c2").value = dup;
	event.preventDefault();
}