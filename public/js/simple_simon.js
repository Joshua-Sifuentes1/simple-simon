$(document).ready(function(){


	var colors = ["red", "blue", "yellow", "green"];

	var simonSequence = [];

// -----------------------------------------------------------------
//		Functions that will animate the square that is clicked.
// -----------------------------------------------------------------

	function squarePressed(element){
		
		$(element).addClass("opacity");
		setTimeout(function(){
			$(element).removeClass("opacity");
		}, 200);
	};

	var counter =  0;

	$(".square").click(function(){
		squarePressed($(this));
		console.log($(this).data("color"));

		if($(this).data("color") == simonSequence[counter]){

			if(counter == (simonSequence.length - 1)){

				counter = 0;
				randomColor();
				console.log(simonSequence);
			} else {
				counter++;
				simonMove();
				console.log(simonSequence);
			}

		} else {

			simonSequence = [];
		}
		console.log(counter);

	});

	squarePressed();

// -----------------------------------------------------------------
//		
// -----------------------------------------------------------------

	//Random color generator for Simon
	function randomColor(){
		//Random number generator 0-3
		var randomNumber = Math.floor((Math.random() * 4));
		var color = colors[randomNumber];
		simonSequence.push(color);
	};

	
	function simonMove(){
		var interval = setInterval(function(){
			squarePressed(simonSequence);

		});

	};
// -----------------------------------------------------------------
//					Start game button
// -----------------------------------------------------------------

	function startGame(){
		$("#start-button").click(function(){
			randomColor();
			console.log(simonSequence);
		});
	};
	startGame();
// -----------------------------------------------------------------
//		
// -----------------------------------------------------------------

	function gameOver(){

	};





});