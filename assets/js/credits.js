$(document).ready(function(){
	var image =$(".test");

	function animateImg() {
		if (image.css('top') == '0px') {
			image.animate({top: '-1500px'}, 17500, function () {
			image.css('top','0px');
			animateImg();
		});
		} else {
			image.animate({top: '0px'}, 17500, function () {
			animateImg();
				});
			}
	}
	animateImg();

	$(document).on('keyup', function(e){
		if(e.keyCode === 27){
			window.location = 'menu.php';
		}	
	})

	// $(document).on('keyup', function(e){
	// 		//backspace=8
	// 	if(e.keyCode === 8){
	// 		e.preventDefault();
	// 		window.location = 'menu.php';
	// 	}
	// });
});