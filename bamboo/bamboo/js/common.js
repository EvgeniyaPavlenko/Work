function windowSize(){

    if ($(window).width() > '800'){
    	$('.original .anim1,.antifrozen .anim1,.touch .anim1,.b2b .anim1,.buy .anim1').removeClass('fadeInDown');
    	$('.original .anim1,.antifrozen .anim1,.touch .anim1,.b2b .anim1,.buy .anim1').addClass('fadeOutDown');
        $(".main").onepage_scroll({
	       	sectionContainer: "section", // контейнер, к которому будет применяться скролл
	       	easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
	       	animationTime: 1000, // время анимации
	       	pagination: true, // скрыть или отобразить пагинатор
	       	updateURL: false,
	       	afterMove: function (index) {
		        if ($('.original').hasClass('active')) {
		            $('.original .anim1').removeClass('fadeOutDown');
		            $('.original .anim1').addClass('fadeInDown');
		       	}
		       	if ($('.touch').hasClass('active')) {
		            $('.touch .anim1').removeClass('fadeOutDown');
		            $('.touch .anim1').addClass('fadeInDown');
		       	}
		       	if ($('.antifrozen').hasClass('active')) {
		            $('.antifrozen .anim1').removeClass('fadeOutDown');
		            $('.antifrozen .anim1').addClass('fadeInDown');
		       	}    
		       	if ($('.b2b').hasClass('active')) {
		            $('.b2b .anim1').removeClass('fadeOutDown');
		            $('.b2b .anim1').addClass('fadeInDown');
		       	} 
		       	if ($('.buy').hasClass('active')) {
		            $('.buy .anim1').removeClass('fadeOutDown');
		            $('.buy .anim1').addClass('fadeInDown');
		       	} 
                if($('.b2b').hasClass('active')||$('.buy').hasClass('active')){
                    $('.onepage-pagination').removeClass('bright');
                    $('.onepage-pagination').addClass('dark');
                }
                else{
                   $('.onepage-pagination').removeClass('dark');
                    $('.onepage-pagination').addClass('bright');
                }
	        },
            beforeMove: function (index) {
                if ($('.b2b').hasClass('active')) {
                    $('.share').addClass("share-on");
                }
                else{
                    $('.share').removeClass("share-on");
                }
            },
	       	loop: false,
	   		responsiveFallback: false // обновлять URL или нет
    	});
       $(function() { 
        	function runIt() { 
            	$('.down').animate({"marginTop":"15px"},800); 
            	$('.down').animate({"marginTop":"-5px"},800, runIt);
        	} 
        	runIt(); 
    	});
        (function($){ //object containing margin settings
           
            var margins = {
                panel1: 0,
                panel2: -1000,
                panel3: -2000
            }
            $("#nav a").click(function(e){
                e.preventDefault();
                $("#nav a").removeClass("on");
                $(this).addClass("on");
                $("#slider").animate({
                    marginLeft: margins[$(this).attr("href").split("#")[1]]
                });                 
            });
            $("#slider p").hide();
            $("#slider img").hover(function() {
                    $(this).next().slideDown();
                }, function() {
                    $(this).next().slideUp();
                }); 
            })(jQuery);
    }
    else{
    	$('body, html').css('overflow','inherit');
    	var a = parseInt($(window).width());
        $('#slider').css('width', a*3);
    	(function($){ //object containing margin settings
            var margins = {
                panel1: 0,
                panel2: -a,
                panel3: -a*2
            }
            $("#nav a").click(function(e){
                e.preventDefault();
                $("#nav a").removeClass("on");
                $(this).addClass("on");
                $("#slider").animate({
                    marginLeft: margins[$(this).attr("href").split("#")[1]]
                });                 
            });
            $("#slider p").hide();
            $("#slider img").hover(function() {
                    $(this).next().slideDown();
                }, function() {
                    $(this).next().slideUp();
                }); 
            })(jQuery);
        runItt(); 

    }
    $('.onepage-pagination').addClass('bright');
}
        function runItt() { 
            $( ".down" ).animate({bottom: 100}, 800 );
 			$( ".down" ).animate({bottom: 10}, 800,runItt );
        } 

        $('.nonscroll').click(function(){
            $(this).hide();
        });


ymaps.ready(init);
function init () {
    var myMap = new ymaps.Map("map", {
            center: [56.844431, 60.629635],
            zoom: 16
        }),
    myGeoObject = new ymaps.GeoObject();
    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([56.844284, 60.626095], {
            balloonContent: 'Бажова, 75А'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/ballon.png',
            // Размеры метки.
            iconImageSize: [65, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }));
};

$('.size').click(function(){
    $(this).parent().next('input[name="size-field"]').val($(this).attr('data-full'));
});
$('.gl_color').click(function(){
    $(this).parent().next('input[name="color-field"]').val($(this).attr('data-full'));
});

$('.down').click(function(){
      $(".main").moveDown();
});