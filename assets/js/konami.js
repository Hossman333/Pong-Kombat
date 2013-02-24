
$(document).ready(function(){

	var pattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		position = 0;


	function check(e) {
		if(pattern[position] === e.keyCode){
			position++;
		}else{
			position = 0;
		};
		if(position === pattern.length){
			win();
			position = 0;
		};
	};


	function playAudio() {
		if ($.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit) { 
			var audioSource = '<audio preload="auto"><source src="assets/js/hossman.wav" /><source src="assets/js/hossman.wav" /></audio>';
			$(audioSource)[0].play();
		}
	}



	function win() {
		var konamiImage = $('#konamiImage').css({
			"position" : "fixed",
			"bottom" : "-700px",
			"right" : "0",
			"display" : "block",
			"z-index" : "1000"
		});	


		$(".paddle2").css("background-color", "#FF0000");
		playAudio();
		konamiImage.animate({
		}, function() {
			$(this).animate({
				"bottom" : "500px"
			}, 1200, function() {
				var offset = (($(this).position().left)+800);
				$(this).delay(300).animate({
					"right" : offset
				}, 3500, function() {
					konamiImage = $('#konamiImage').css({
						"display" : "none"
					})
				})
			});
		});
	}


	$(document).keyup(function(e){
		check(e);
	});
}());


