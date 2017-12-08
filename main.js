console.log("this is initializing the racer logic");
$(document).ready(function(){
	console.log("document is ready" + event.timeStamp);
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
	// keyup prevents the multiple firing problem
	$('body').keyup(function(keyPressed){
		// let keyVal = keyPressed.which();
		// I want to get timestamps of the event and compare them to the last timestamp of initialization.  Use a scaling score to grant pixels.
		keyNumber = keyPressed.which;
		if(keyNumber === 65 || keyNumber === 68 || keyNumber === 83){
			// reaction time will decide how far he moves
			p1Reaction = keyPressed.timeStamp - p1StartTime;
			console.log(p1Reaction);
			p1Loc = p1Loc + 64000 / p1Reaction;
			// checkforWIn(p2Loc);
			$('#player1').css('transform','translateX(' + p1Loc + 'px)');
			p1StartTime = event.timeStamp;
		}
		// until randomlogic in:  if p2 hits one of the p2 keys he gets to move forward
		if(keyNumber === 76 || keyNumber === 75 || keyNumber === 74){
			// reaction time will decide how far he moves
			p2Reaction = keyPressed.timeStamp - p2StartTime;
			// console.log(p2Reaction);
			p2Loc = p2Loc + 64000 / p2Reaction;
			console.log('location: ' + p2Loc);
			// checkforWIn(p2Loc);
			$('#player2').css('transform','translateX(' + p2Loc + 'px)');
			p2StartTime = event.timeStamp;
		}
		// console.log(keyPressed.timeStamp);

	});

});