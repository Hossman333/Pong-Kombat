$(document).ready(function(){

	$(document).on('keyup', function(e){
		var speedX = $('.speedXHighlighted');
		var suddenDeath = $('.suddenDeathHighlighted');
		var rally = $('.rallyHighlighted');

		if(e.keyCode === 27){
				window.location = 'menu.php';
		}

		if(e.keyCode === 40){
			rally.css({'display' : 'none'});
			speedX.css({'display' : 'none'});
			suddenDeath.css({'display' : 'block'});
		}

		if(e.keyCode === 38){
			suddenDeath.css({'display' : 'none'});
			speedX.css({'display' : 'block'});
			rally.css({'display' : 'none'});
		}

		if(e.keyCode === 39){
			rally.css({'display' : 'block'});
			speedX.css({'display' : 'none'});
			suddenDeath.css({'display' : 'none'});
		}

		if(e.keyCode === 37){
			rally.css({'display' : 'none'});
			speedX.css({'display' : 'block'});
			suddenDeath.css({'display' : 'none'});
		}

		if(e.keyCode === 13 && speedX.css('display') == "block"){
			window.location = 'speedX.php';
		}

		if(e.keyCode === 13 && rally.css('display') == "block"){
			window.location = 'difficulty-rally.php';
		}

		if(e.keyCode === 13 && suddenDeath.css('display') == "block"){
			window.location = 'suddenDeath.php';
		}
	})
});