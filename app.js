$(function() {
	var player = '<div id="planet1"></div>';
	var player2 ='div id="planet2"></div>';
	$("#spacetrack").append(player);



})

$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#planet1').animate({left: "-=50px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('#planet1').animate({top: "-=50px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('#planet1').animate({left: "+=50px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:

				$('#planet1').animate({top: "+=50px"}, 'fast');
				break;
		}

	});
});

