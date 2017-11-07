//Our projects section. TABS

$(document).ready(function() {
	$("#portfolio_tab_container").easytabs({
		});
});



//Our Team section. slider
$(document).ready(function(){
	  $('.bxslider').bxSlider({
	  	randomStart:true,
	  	auto:true,
	  	pause:3000,
	  	autoHover:true
	  });

	});

//Facts about us section. animate css
$(document).ready(function(){
	$(".animate_fact").waypoint( function(dir){
		if(dir === "down")
				$(this.element).addClass("fadeInUp");
		},{
			offset:"70%"
		});
});

//anchors
$(document).ready(function() {
    $("a.actice_a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });

//arrow up

var top_show = 150; // the position of the scroll bar to display a button
  var delay = 1000; // scroll delay
  $(document).ready(function() {
    $(window).scroll(function () { // If you fall into this scrolling function
      /* Depending on the position of the scroll bar, and the value top_show, close or open the "Top"*/
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { //Clicking on the "Back" get into this function
      /* Smooth scrolling up */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

