$(document).ready(function(){




	$(document).on('keyup', function(e){
		var ele = $('.menuSelector');
		var marginTop = parseInt(ele.css('marginTop'));

			//down=40
		if(e.keyCode === 40 && marginTop < 424){
			ele.css({
				'marginTop': (marginTop + 63),
			});
		}

			//wrap from bottom to top
		if(e.keyCode === 40 && marginTop === 424){
			ele.css({
				'marginTop': (marginTop - 252),
			});
		}

			//wrap from top to bottom
		if(e.keyCode === 38 && marginTop === 172){
			ele.css({
				'marginTop': (marginTop + 252),
			});
		}

			//up=38
		if(e.keyCode === 38 && marginTop > 172){
			ele.css({
				'marginTop': (marginTop - 63),
			});
		}

			//enter=13
		if(e.keyCode === 13 && marginTop === 172){
			window.location = 'game.php';
		}

			//backspace=8
		// if(e.keyCode === 8){
		// 	e.preventDefault();
		// 	window.location = 'game.php';
		// }
			//CREDITS
		if(e.keyCode === 13 && marginTop === 424){
			window.location = 'credits.php';
		}
			//OPTIONS
		if(e.keyCode === 13 && marginTop === 235){
			window.location = 'options.php';
		}

		if(e.keyCode === 13 && marginTop === 361){
			window.location = 'selection.php';
		}

			//27 = esc
		if(e.keyCode === 27){
			window.location = 'index.php';
		}

		if(e.keyCode === 13 && marginTop === 298){
			window.location = 'minigame.php';
		}

	});
});