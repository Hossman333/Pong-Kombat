$(document).ready(function() {
	
	var Carousel = function(el) {
		this.el = $(el).closest('.carousel');
		this.itemWidth = $('li', this.el).outerWidth(); 
		this.leftValue = this.itemWidth * (-1); 
		var self = this;

		$('li:first', this.el).before($('li:last', this.el));

		$('.left-arrow-selection', this.el).on('click', function() {
			var left_indent = parseInt($('ul', self.el).css('left')) + 202;
			$('ul', self.el).animate({'left' : left_indent}, 450,function(){          
				$('li:first', self.el).before($('li:last', self.el));    
				$('ul', self.el).css({'left' : self.leftValue});
			});
		});

		$('.right-arrow-selection', this.el).on('click', function() {
			var left_indent = parseInt($('ul', self.el).css('left')) - 202;
			$('ul', self.el).animate({'left' : left_indent}, 450, function () {
				$('li:last', self.el).after($('li:first', self.el));                  
				$('ul', self.el).css({'left' : self.leftValue});
			});
		});
	}

	new Carousel('#paddle-selection');
	new Carousel('#paddle-size');
	new Carousel('#ball-selection');
	new Carousel('#map-selection');
	new Carousel('#paddle-selection2');
	new Carousel('#paddle-size2');
});


$(document).ready(function(){
	$("#play").on('click', function(){
		 window.location = 'game.php';
	});
});


$(document).ready(function(){

	$(".box-button").click(function(){
		$(".original-ball").hide();
		$(".original-box").css("display", "block");
		$(".fire-ball").hide();
		$(".fire-box").css("display", "block");
		$(".ice-ball").hide();
		$(".ice-box").css("display", "block");
		$(".poison-ball").hide();
		$(".poison-box").css("display", "block");
		$(".flower-ball").hide();
		$(".flower-box").css("display", "block");
		$(".lightning-ball").hide();
		$(".lightning-box").css("display", "block");

	});
	$(".ball-button").click(function(){
		$(".original-ball").show();
		$(".original-box").css("display", "none");
		$(".fire-ball").show();
		$(".fire-box").css("display", "none");
		$(".ice-ball").show();
		$(".ice-box").css("display", "none");
		$(".poison-ball").show();
		$(".poison-box").css("display", "none");
		$(".flower-ball").show();
		$(".flower-box").css("display", "none");
		$(".lightning-ball").show();
		$(".lightning-box").css("display", "none");

	});

	$(document).on('keyup', function(e){
		if(e.keyCode === 27){
			window.location = 'menu.php';
		}	
	})

	
});