$(document).ready(function() {
	$('.myList').roundabout({
		shape : "waterWheel"
	});

	$(".left_arrow").click(function() {
		/* $(this).effect("drop", {}, 300, callback); */			

		showPreviousImage();
		animateLeftArrow();	
	});

	$(".right_arrow").click(function() {
		showNextImage();		
		animateRightArrow();
	});		
});

/*function callback() {
	setTimeout(function() {
		$(".left_arrow").hide().fadeIn();
	}, 300);
};*/

function showPreviousImage(){
	$('.roundabout-in-focus').prev().click();
	if($('.roundabout-in-focus').prev().length == 0){
		$('ul.myList li:last').click();
	} 
}

function showNextImage(){
	$('.roundabout-in-focus').next().click();
	if($('.roundabout-in-focus').next().length == 0){
		$('ul.myList li:first').click();
	}
}

function animateLeftArrow(){
	$(".left_arrow").animate({left: "-=100"}, 300);
	setTimeout(function() {
		$(".left_arrow").animate({left: "+=300", display: "none"}, 0);
		$(".left_arrow").animate({left: "-=200", display: "block"}, 300);
	}, 100);
}

function animateRightArrow(){
	$(".right_arrow").animate({right: "-=100"}, 300);
	setTimeout(function() {
		$(".right_arrow").animate({right: "+=300", display: "none"}, 0);
		$(".right_arrow").animate({right: "-=200", display: "block"}, 300);
	}, 100);
}

function highlightNavigatorBubble(){
	$(".roundabout-moveable-item").each(function(index){
		if($(this).hasClass("roundabout-in-focus")){
			alert(index);
			$(".bubble").removeClass("active_bubble");
			var ele = ".bubble:nth-child("+index+")";
			$(ele).addClass("active_bubble");
			return false;
		}
	});
}