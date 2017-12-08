console.log("this is initializing the racer logic");
$(document).ready(function(){
	console.log("document is ready");
	$('body').keydown(function(keyPressed){
		// let keyVal = keyPressed.which();
		$('#player1').css('transform','translateX(50px)');
		console.log('key was pressed!');
	});

});