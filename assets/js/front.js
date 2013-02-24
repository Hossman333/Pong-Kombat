$(document).ready(function(){

	function flash(){
		$(".pongMortalEnter").animate({opacity:0},250,"linear",function(){
			$(".pongMortalEnter").animate({opacity:1},250);
		});	
	};

	flash();
	
	var timer = setInterval(flash, 1500);

	$(document).on('keyup', function(e){
		if(e.keyCode === 13) {
			clearInterval(timer);
			 window.location = 'menu.php';
		}
	});
});