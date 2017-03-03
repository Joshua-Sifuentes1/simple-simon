$(document).ready(function(){

	//Random number generator 1-4

	var colors = ["red", "blue", "yellow", "green"];

	var playerSequence = [];

	var simonSequence = [];

	//Function that will animate the square that is clicked.

	function squarePressed(){
		//red
		$(".red").mousedown(function(){
			$(this).addClass("opacity");
		});
		$(".red").mouseup(function(){
			$(this).removeClass("opacity");
			playerSequence.push("red");
			console.log(playerSequence)
		});
		//blue
		$(".blue").mousedown(function(){
			$(this).addClass("opacity");
		});
		$(".blue").mouseup(function(){
			$(this).removeClass("opacity");
			playerSequence.push("blue");
			console.log(playerSequence)
		});
		//yellow
		$(".yellow").mousedown(function(){
			$(this).addClass("opacity");
		});
		$(".yellow").mouseup(function(){
			$(this).removeClass("opacity");
			playerSequence.push("yellow");
			console.log(playerSequence)
		});
		//green
		$(".green").mousedown(function(){
			$(this).addClass("opacity");
		});
		$(".green").mouseup(function(){
			$(this).removeClass("opacity");
			playerSequence.push("green");
			console.log(playerSequence)
		});


		
	};

	squarePressed();

	//Random color generator for Simon
	function randomColor(){
		var randomNumber = Math.floor((Math.random() * 4));
		var color = colors[randomNumber];
		simonSequence.push(color);
	};

	$("#start-button").click(function(){
		randomColor();
		console.log(simonSequence);
	});
















});