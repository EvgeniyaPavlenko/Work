$(window).load(function() { 
	$(".loaderInner").fadeOut(); 

	$(".loader").delay(400).fadeOut("slow"); 
});

$(document).ready(function(){
	//heder height = window height+reaction on risizing
		function height_detect(){
			$(".top_banner").css("height", $(window).height());
		};
		height_detect();

		$(window).resize(function(){
			height_detect();
		});

//sandwich menu

	var browserMinWidth = parseInt($('.container').css('max-width'));
	if (browserMinWidth < 980) {
			//toggle menu
			$(".top_menu ul a").click(function(){
				$(".top_menu").fadeOut(600);
				$(".sandwich").toggleClass("active");
			}).append("<span>");
        }
        $(".toggle_menu").click(function() {
		  $(".sandwich").toggleClass("active");
		});
	        $(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")){
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		}else{
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	});

	$('.carousel').carousel();

});

