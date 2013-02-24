$(document).ready(function(){

	$(document).on('keyup', function(e) {
		var ele = $('.selector');
		var top = parseInt(ele.css('top'));

		if(e.keyCode === 40 || e.keyCode === 38) {
			if(top <= 74){
				ele.css({
					'top': (top + 176),
				});
			}

			if(top >= 250){
				ele.css({
					'top': (top - 176),
				})
			}
		}

		if(e.keyCode === 13){
			if(top <= 74){
				toggle('music');
			}

			if(top >= 250){
				toggle('sound');
			}
		}
		if(e.keyCode === 27){
			window.location = 'menu.php';
		}	
	});


	function toggle(title) {
		var state = $.cookie(title);
		if(state === 'true') {
			$.cookie(title, false);
			$('.'+title+'-false').show();
			$('.'+title+'-true').hide();
		} else {
			$.cookie(title, true);
			$('.'+title+'-true').show();
			$('.'+title+'-false').hide();
		}
	}

	function init(title) {
		var state = $.cookie(title);
		if(!state) {
			$.cookie(title, true);
			state = 'true';
		}

		if(state === 'true') {
			$('.'+title+'-true').show();
			$('.'+title+'-false').hide();
		} else {
			$('.'+title+'-false').show();
			$('.'+title+'-true').hide();
		}
	}

	init('music');
	init('sound');

});


