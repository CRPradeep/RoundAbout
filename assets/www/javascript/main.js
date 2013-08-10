$(document).ready(function() {
		$('ul').roundabout({
			shape : "waterWheel"
		});
		
		$(".left_arrow").click(function() {
			/* $(this).effect("drop", {}, 300, callback); */
			$('.roundabout-in-focus').prev().click();
			if($('.roundabout-in-focus').prev().length == 0){
				$('ul.list li:last').click();
			} 
			
		    $(this).animate({left: "-=300"}, 300);
		    setTimeout(function() {
		    	 $(".left_arrow").animate({left: "+=600", display: "none"}, 0);
		    	 $(".left_arrow").animate({left: "-=300", display: "block"}, 300);
			}, 100);
		});
		
		$(".right_arrow").click(function() {
			$('.roundabout-in-focus').next().click();
			if($('.roundabout-in-focus').next().length == 0){
				$('ul.list li:first').click();
			}
			
			$(this).animate({right: "-=300"}, 300);
		    setTimeout(function() {
		    	 $(".right_arrow").animate({right: "+=600", display: "none"}, 0);
		    	 $(".right_arrow").animate({right: "-=300", display: "block"}, 300);
			}, 100);
		});		
		
	});
	
	function callback() {
		setTimeout(function() {
			$(".left_arrow").hide().fadeIn();
		}, 300);
	};