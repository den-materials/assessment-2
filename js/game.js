window.onload = function ready(){
	console.log('Ready');
};


var winWidth = window.innerWidth;  //get width of window//
var redBox = document.getElementById('red'); 
var blueBox = document.getElementById('blue');


var redPos = 0;       //store red position (px from start position)//
var bluePos = 0;      //store blue position (px from start position)//
var blueCounter = 0;  //store button 'p' clicks//
var redCounter = 0;   //store button 'z' clicks//

function win(){                      //run win function 
   if(redCounter >= winWidth/50){    //compairs z clicks counter to 1/50 of screen width//
	alert("Red Win!");
}  if(blueCounter >= winWidth/50){   //compairs p clicks counter to 1/50 of screen width//
	alert("Green Wins!");
}
};


document.addEventListener("keypress", function (z){  
	var keyZ = z.which; //check if winning conditions are met. If no, allow keypress//
	if(keyZ === 122 && redCounter < winWidth/50 && blueCounter < winWidth/50){
       moveRed(); //if no win conditions met, fire moveRed func//
	}else{
	  document.removeEventListener("keypress", z, false); //remove event listener if winning cond. met//
	  win(); //run win func//
    }
})

document.addEventListener("keypress", function (p){ //same as above, for p//
	var keyP = p.which;
	if(keyP === 112 && redCounter < winWidth/50 && blueCounter < winWidth/50){
		moveBlue();
	}else{
		document.removeEventListener("keypress", p, false);
	}
})


function moveBlue(){  
	blueCounter += 1;  //on p button press, add 1 to counter//
    bluePos += 25;     //add 25px to existing position// 
    blueBox.style.left = bluePos + "px";  //move #blueBox with css style, adds 'px' to number//
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