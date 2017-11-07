$(document).ready(function(){

//SLIDER
var labels = ["50м", "100м", "200м", "500м", "1км", "1.5км"]

  $("#slider").slider({
      min: 0,
      max: 5,
      step: 1,
      range: true,
      values: [2, 4],
      slide: function(event, ui) {
        $("#v1").text(labels[ui.values[0]]);
        $("#v2").text(labels[ui.values[1]]);
      }

    })
  // Space out values
  for (var i = 0; i < labels.length; i++) {

    var el = $('<label>' + (labels[i]) + '</label>').css('left', (i / labels.length * 120) + '%');

    $("#slider").append(el);

  }
  $("#v1").text(labels[2]);
  $("#v2").text(labels[4]);


//SCROLL NAVIGATION

$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
   $("a.active_a").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body,section').animate( { scrollTop: destination }, 1100 );
      return false;
    });

//POPUP FORM

$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      },
      open: function(){
        $('.scroll-pane').jScrollPane({
          contentWidth: '0px',
        });
      }
    }
  });
 
  var sync1 = $(".sync1");
  var sync2 = $(".sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 5,
    itemsDesktop      : [1199,5],
    itemsDesktopSmall     : [979,5],
    itemsTablet       : [768,5],
    itemsMobile       : [479,5],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(".sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if($(".sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(".sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
  }



  // Big carousel

  var sync3 = $(".sync3");
  var sync4 = $(".sync4");
 
  sync3.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition2,
    responsiveRefreshRate : 200,
  });
 
  sync4.owlCarousel({
    items : 5,
    itemsDesktop      : [1199,5],
    itemsDesktopSmall     : [979,5],
    itemsTablet       : [768,5],
    itemsMobile       : [479,5],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition2(el){
    var current = this.currentItem;
    sync4.find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if(sync4.data("owlCarousel") !== undefined){
      center2(current)
    }
  }
 
  sync4.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync3.trigger("owl.goTo",number);
  });
 
  function center2(number){
    var sync2visible = sync4.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync4.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync4.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync4.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync4.trigger("owl.goTo", num-1)
    }
    
  }

});