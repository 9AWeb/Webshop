(function($, document, window){
	
	$(document).ready(function(){

		$(".mobile-navigation").append($(".main-navigation .menu").clone());
		$(".toggle-menu").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".home-slider").flexslider({
			controlNav: true,
			directionNav: false
		});

		$(".login-button").on("click",function(){
			$(".overlay").fadeIn();
			$(".auth-popup").toggleClass("active");
		});

		$(".close, .overlay").on("click",function(){
			$(".overlay").fadeOut();
			$(".popup").toggleClass("active");
		});

		initLightbox({
	    	selector : '.product-images a',
	    	overlay: true,
	    	closeButton: true,
	    	arrow: true
	    });


		$(document).keyup(function(e) {
			if( $(".popup").hasClass("active")){
		  		if (e.keyCode === 27) {
		  			$(".overlay").fadeOut();
					$(".popup").toggleClass("active");
		  		}   
			}
		});
	});

	$(window).load(function(){

	});

})(jQuery, document, window);