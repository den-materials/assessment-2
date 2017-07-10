window.onload = function ready(){
	console.log('Ready');
};


var winWidth = window.innerWidth;
var redBox = document.getElementById('red'); 
var blueBox = document.getElementById('blue');


var redPos = 0;
var bluePos = 0;
var blueCounter = 0;
var redCounter = 0;

function win(){
	if(redCounter >= winWidth/50){
	alert("Red Win!");
}  if(blueCounter >= winWidth/50){
	alert("Green Wins!");
}
};


document.addEventListener("keypress", function (z){
	var keyZ = z.which; 
	if(keyZ === 122 && redCounter < winWidth/50 && blueCounter < winWidth/50){
       moveRed();
	}else{
	  document.removeEventListener("keypress", z, false);
	  win();
    }
})

document.addEventListener("keypress", function (p){
	var keyP = p.which;
	if(keyP === 112 && redCounter < winWidth/50 && blueCounter < winWidth/50){
		moveBlue();
	}else{
		document.removeEventListener("keypress", p, false);
	}
})


function moveBlue(){
	blueCounter += 1;
    bluePos += 25;
    blueBox.style.left = bluePos + "px";
    console.log('pressed p');
    console.log(blueCounter);

}

function moveRed(){
    redCounter += 1;
  	redPos += 25;
	redBox.style.left = redPos + "px";
	console.log('pressed z');
	console.log(redCounter);
  }




/*function moveBlue(p){
  
    if(80===p.keyCode){
    	redCounter += 1;
  	BluePos += 25;
	blueBox.style.left = bluePos + "px";
	console.log('pressed p');
	console.log(BlueCounter);
  }
}*/







/*document.addEventListener("keypress", function Red(event) {
	
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
    
  if(blueCounter == 10 || redCounter == 10){
  	document.removeEventListener("keydown", Blue, false);
	console.log('Blue is the winner!');
     };
   if(event.keyCode === 39){
   	blueCounter += 1;
	  bluePos += 25;
	  blueBox.style.left = bluePos + "px";
	  console.log('pressed right');
	  console.log(blueCounter);
	  
    }
 });*/

// key z = 122 
//key p = 112
// 32 keys to win @ 25px