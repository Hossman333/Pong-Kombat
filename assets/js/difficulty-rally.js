$(document).ready(function(){
	$(document).on('keyup', function(e){
		if(e.keyCode === 27){
			window.location = 'minigame.php';
		}	
	})

	var current = 1;
	var difficulties = $('#difficulties > img');


	$(document).on('keyup', function(e){
		if(e.keyCode === 40){
			current = current + 1;
		}
		if(e.keyCode === 38){
			current = current - 1;
		}

		var selectedIndex = current % difficulties.length;

		if(e.keyCode === 13){
			// alert($(difficulties.get(selectedIndex)).text())\
			window.location = 'rally.php'
		}

		$(difficulties.get(current % difficulties.length)).show().siblings().hide();
	})


	// var difficulty = {
	// 	color: 'red',
	// 	width: 200
	// }
	// $.cookie('difficulty', difficulty);

});