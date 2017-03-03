$(document).ready(function(){

	//Random number generator 1-4

	var colors = ["red", "blue", "yellow", "green"];

	var playerSequence = [];

	var simonSequence = [];

	//Function that will animate the square that is clicked.

	function squarePressed(){
		
		$(".square").mousedown(function(){
			$(this).addClass("opacity");
		});
		$(".square").mouseup(function(){
			$(this).removeClass("opacity");
			playerSequence.push($(this).data("color"));
			console.log(playerSequence);
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