$(function() {
    $("[id^=show-item]").click(function(){
		var $button = $(this);
	  	var itemId = $button.attr('id').split("-")[2];
		var $image = $("#topic");
	  	var newImageSrc = "images/topics/topic" + itemId + ".png";
	  	$image.attr('src', newImageSrc);
	})

	$('#faqs h5').each(function() {
		var tis = $(this), state = false, answer = tis.next('div').slideUp();
		tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
	});


});