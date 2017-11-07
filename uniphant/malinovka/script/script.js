//anchors
$(document).ready(function() {
    $("a.active_a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body,section').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });


//arrow UP
var top_show = 150; // position for start showing 
  var delay = 1000; // scroll delay
  $(document).ready(function() {
    $(window).scroll(function () {
      /* Depending on the position of the scroll bar, and the value top_show, close or open the "Top" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // Onclick fall into this function
      /* Smooth scrolling upward */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

$(document).ready(function(){
	  $('.bxslider').bxSlider();
	});

$( function() {
    $( '#gallery1' ).jGallery();
} );