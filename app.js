
// $(document).ready(function() {
// 	$(document).keydown(function(key) {
// 		switch(parseInt(key.which,10)) {
// 			// Left arrow key pressed
// 			case 37:
// 				$('#planet1').animate({left: "-=50px"}, 'fast');
// 				break;
// 			// Up Arrow Pressed
// 			case 38:
// 				$('#planet1').animate({top: "-=50px"}, 'fast');
// 				break;
// 			// Right Arrow Pressed
// 			case 39:
// 				$('#planet1').animate({left: "+=50px"}, 'fast');
// 				break;
// 			// Down Arrow Pressed
// 			case 40:

// 				$('#planet1').animate({top: "+=50px"}, 'fast');
// 				break;
// 		}
// 	});
// });
$(document).ready(function() {


// click the GO button
	$("#go").click(function() {

		//get the width of the planet
		var planetWidth = $('#planet1').width();

		//get the width of the racetrack
		var spaceTrackWidth = $(window).width() - planetWidth;

		//generate a random number between 1 and 5000 for each spacer
		var spaceTime1 = Math.floor( (Math.random() * 5000) + 1);
		var spaceTime2 = Math.floor( (Math.random() * 5000) + 1);

		//create a flag variable to false for end of race
		var isComplete = false;

		//creat a flag variable to find winner
		var place = 'first';

		//animate planet 1
		$('#planet1').animate({

			//move car width of the spacetrack
			left: spaceTrackWidth

		}, spaceTime1, function(){

			//animation is complete

		});

	});
});






