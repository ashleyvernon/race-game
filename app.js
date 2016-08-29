$(document).ready(function() {
	$('#go').one("click", function() {
		alert("YOU PLANET!");
	});


// click the GO button
	$("#go").click(function() {

		//build a function to see if car has won the race
		function checkIfComplete() {

			if( isComplete ==false){
				isComplete = true;
			} else {
				place = 'second';
			}
		}

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

			//run the function
			checkIfComplete();

			//feedback on race info
			$('#spaceInfo1').text('Venus won ' + place + ' place!');

		});
		//animate planet 2
		$('#planet2').animate({

			//move car width of the spacetrack
			left: spaceTrackWidth

		}, spaceTime2, function(){

			//animation is complete

			//run the function
			checkIfComplete();

			//Feedback on race info
			$('#spaceInfo2').text('Neptune won ' + place + ' place!');

		});
	});

	//resets the race
	$('#reset').click(function() {
		$('.planet').css('left', '0');
		$('.spaceInfo span').text('');
	});
});






