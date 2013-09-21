$(document).ready(function() {		
	
	$('.myList').roundabout({
		shape : "waterWheel",
		btnNext : $(".right_arrow"),
		btnNextCallback : animateFooter,
		btnPrev : $(".left_arrow"),
		btnPrevCallback : animateFooter,
		btnToggleAutoplay : $(".toggleAutoPlayBtn"),
		autoplayCallback : animateFooter,
		autoplayDuration : 2000,
		responsive: true,
	});

	$(".left_arrow").click(function() {
		animateLeftArrow();	
	});

	$(".right_arrow").click(function() {
		animateRightArrow();
	});		
	
	$(".togglePannelBtn").click(function(){
		$(".buttonPannel").toggle(500);
		$(".toggle_img").toggleClass("toggle_pannel_arrow");
	});

	$(".toggleAutoPlayBtn").click(function(){
		$(".toggleAutoPlayBtn").val($(".toggleAutoPlayBtn").val() == "Start AutoPlay" ? "Stop AutoPlay" : "Start AutoPlay");
	});
	animateFooter();
	handleScrollIcon();
	
	 myScroll = new iScroll('wrapper', { hScrollbar: false, vScrollbar: false });
});

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

function animateFooter(){
	/*$(".overlay-footer").hide();
	$(".roundabout-in-focus").find(".overlay-footer").css('top', 0);
	$(".roundabout-in-focus").find(".overlay-footer").animate({
	    height:'toggle'
	}, 1000, function(){
		$(".roundabout-in-focus").find(".overlay-footer").css('top', '87.5%');
		
	});	*/
	
	$(".overlay-footer").hide();
	$(".roundabout-in-focus").find(".overlay-footer").animate({
	    height:'toggle'
	}, 1000);
}

function handleScrollIcon(){
	if($("#scroller").height() > $("#wrapper").height()){
		$(".scrollIndicator").show();
	}else{
		$(".scrollIndicator").hide();
	}
}

function refreshIscroll(){
	myScroll.refresh();
}

function highlightNavigatorBubble(){
	$(".roundabout-moveable-item").each(function(index){
		if($(this).hasClass("roundabout-in-focus")){
			$(".bubble").removeClass("active_bubble");
			var ele = ".bubble:nth-child("+index+")";
			$(ele).addClass("active_bubble");
			return false;
		}
	});
}