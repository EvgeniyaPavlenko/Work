$(document).ready(function() {
	//animation
	$("h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");


	//heder height = window height+reaction on risizing
	function height_detect(){
		$(".main_head").css("height", $(window).height());
	};
	height_detect();

	$(window).resize(function(){
		height_detect();
	});

	//page preloader
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");

	//sandwich menu
	$(".toggle_menu").click(function() {
	  $(".sandwich").toggleClass("active");
	});

	//toggle menu
	$(".top_menu ul a").click(function(){
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")){
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		}else{
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	});

	$(".top_menu ul a").mPageScroll2id();

	$('.about_img').equalHeights();
	$('.about_h3').equalHeights();
	$('.sign_h3').equalHeights();

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
});