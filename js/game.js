window.onload = function ready(){
	console.log('Ready');
};


var redBox = document.getElementById('red'); 
var blueBox = document.getElementById('blue');

var redPos = 0;
var bluePos = 0;
var blueCounter = 0;
var redCounter = 0;

if(blueCounter == 10){
      	document.removeEventListener("keydown", Blue, false);
      	console.log('Blue is the winner!');
      }


document.addEventListener("keypress", function Red(event) {
  if(event.keyCode == 122){
	redCounter += 1;
	redPos += 25;
	redBox.style.left = redPos + "px";
	console.log('pressed z');
	console.log(redCounter);
	}
	  if(redCounter == 10){
	  	console.log('Red is the winner!')
	  }
});

document.addEventListener("keydown", function Blue(event) {
  if(event.keyCode == 39){
	blueCounter += 1;
    bluePos += 25;
	blueBox.style.left = bluePos + "px";
	console.log('pressed right');
	console.log(blueCounter);
    }
      
});

// key z = 122 or 90?
// 32 keys to win @ 25px