window.onload = function ready(){
	console.log('Ready');
	
};


var redBox = document.getElementById('red'); 
var blueBox = document.getElementById('blue');

var redPos = 0;
var bluePos = 0;
var blueCounter = 0;
var redCounter = 0;



document.addEventListener("keypress", function Red(event) {
	
  if(redCounter == 10 || blueCounter == 10){
  document.removeEventListener("keypress", Red, false);
  console.log('Red is the winner!');
       };
  if(event.keyCode == 122){
  	redCounter += 1;
  	redPos += 25;
	redBox.style.left = redPos + "px";
	console.log('pressed z');
	console.log(redCounter);
	
	}
});

document.addEventListener("keydown", function Blue(event) {
    ;
  if(blueCounter == 10 || redCounter == 10){
  	document.removeEventListener("keydown", Blue, false);
	console.log('Blue is the winner!');
     };
   if(event.keyCode === 39){
   	blueCounter += 1
	  bluePos += 25;
	  blueBox.style.left = bluePos + "px";
	  console.log('pressed right');
	  console.log(blueCounter);
	  
    }
 });

// key z = 122 or 90?
// 32 keys to win @ 25px