console.log("this is initializing the racer logic");
$(document).ready(function(){
	init = event.timeStamp;
	console.log("document is ready" + init);
	// starts the translater at 0px
	let p1Loc = 0;
	let p2Loc = 0;
	// dynamically allows for winning condition to be related to the width of the page
	let winLine = ($('#container').width() - $('.player').width());
	console.log(winLine);
	// using these values to compare the time between the value changing and the user pressing
	let p1StartTime = event.timeStamp;
	let p2StartTime = event.timeStamp;
	let p1Reaction = 0;
	let p2Reaction = 0;
	// defining key values for each player.  asd and jkl
	let p1KeyStates = [65,68,83];
	let p2KeyStates = [74,75,76];
	// seeds the random keystate for allowing forward movement
	let p1KeyToPress = reseed(p1KeyStates);
	let p2KeyToPress = reseed(p2KeyStates);
	$('#p1Letter').text(String.fromCharCode(p1KeyToPress));
	$('#p2Letter').text(String.fromCharCode(p2KeyToPress));
	// keyup prevents the multiple firing problem
	$('body').keyup(function(keyPressed){
		// let keyVal = keyPressed.which();
		// I want to get timestamps of the event and compare them to the last timestamp of initialization.  Use a scaling score to grant pixels.
		keyNumber = keyPressed.which;
		if(keyNumber === p1KeyToPress){
			// reaction time will decide how far he moves
			p1Reaction = keyPressed.timeStamp - p1StartTime;
			console.log(p1Reaction + "reaction" + Math.max([(100 - p1Reaction/20),0] + 'adder'));
			p1Loc = p1Loc + Math.max((100 - p1Reaction/20),0);
			$('#player1').css('transform','translateX(' + p1Loc + 'px)');
			checkForWin();
			p1KeyToPress = reseed(p1KeyStates);
			$('#p1Letter').text(String.fromCharCode(p1KeyToPress));
			p1StartTime = event.timeStamp;
		}else if(p1KeyStates.includes(keyNumber)){
			// penalizes random guessing by making wrong guesses reaction time be calculated from the beginning of the page launch.
			p1StartTime = init;
		}
		// until randomlogic in:  if p2 hits one of the p2 keys he gets to move forward
		if(keyNumber === p2KeyToPress){
			// reaction time will decide how far he moves
			p2Reaction = keyPressed.timeStamp - p2StartTime;
			// console.log(p2Reaction);
			p2Loc = p2Loc + Math.max((100 - p2Reaction/20),0);
			console.log('location: ' + p2Loc);
			$('#player2').css('transform','translateX(' + p2Loc + 'px)');
			checkForWin();
			p2KeyToPress = reseed(p2KeyStates);
			$('#p2Letter').text(String.fromCharCode(p2KeyToPress));
			p2StartTime = event.timeStamp;
		}else if(p2KeyStates.includes(keyNumber)){
			p2StartTime = init;
		}
		// console.log(keyPressed.timeStamp);
	});
	function checkForWin(){
		// if either player is ahead of the winline then they win.  Need to change alert to some html
		if(p1Loc>=winLine){
			$('#player1').css('transform','translateX(' + winLine + 'px)');
			alert("Player 1 wins!");
		}else if(p2Loc>=winLine){
			alert("Player 2 wins!");
			$('#player2').css('transform','translateX(' + winLine + 'px)');
		}
	}
	function reseed(keyStates){
		return keyStates[Math.floor(Math.random()*3)];
	}
});
// trying to make a player object to clean up code
// function Player(playerId,keyStates){
// 	this.loc = 0;
// 	this.keyStates = keyStates;
// 	this.keyToPress = reseed(this.keyStates);
// 	this.startTime = this.start();
// 	this.newKeyTime = 0;
// 	this.reactionTime=0;
// };
// Player.prototype = {
// 	start: function(){
// 		this.startTime = event.timeStamp;
// 	}

// }