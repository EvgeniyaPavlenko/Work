$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: ["",""]
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

   $('select').niceSelect();

   $( ".tabs" ).tabs();

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
      }
    }
  });

   var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

  $(".cmn-toggle-switch").click(function(){
    $("nav ul").slideToggle();
  });

 function equalHeight(group) {
     var tallest = 0;
     group.each(function() {
       thisHeight = $(this).height();
       if(thisHeight > tallest) {
         tallest = thisHeight;
       }
     });
     group.height(tallest);
   }
   equalHeight($(".column"));
 
});


//ul opening
  $(document).ready(function() {
    $(".topnav").accordion({
        accordion:false,
        speed: 500,
        closedSign: '&#9655;',
        openedSign: '&#9660;'
    });
});
(function($){
    $.fn.extend({

    //pass the options variable to the function
    accordion: function(options) {
        
    var defaults = {
      accordion: 'true',
      speed: 300,
      closedSign: '[+]',
      openedSign: '[-]'
    };

    // Extend our default options with those provided.
    var opts = $.extend(defaults, options);
    //Assign current element to variable, in this case is UL element
    var $this = $(this);
    
    //add a mark [+] to a multilevel menu
    $this.find("li").each(function() {
      if($(this).find("ul").size() != 0){
        //add the multilevel sign next to the link
        $(this).find("a:first").append("<span>"+ opts.closedSign +"</span>");
        
        //avoid jumping to the top of the page when the href is an #
        if($(this).find("a:first").attr('href') == "#"){
            $(this).find("a:first").click(function(){return false;});
          }
      }
    });

    //open active level
    $this.find("li.active").each(function() {
      $(this).parents("ul").slideDown(opts.speed);
      $(this).parents("ul").parent("li").find("span:first").html(opts.openedSign);
    });

      $this.find("li a").click(function() {
        if($(this).parent().find("ul").size() != 0){
          if(opts.accordion){
            //Do nothing when the list is open
            if(!$(this).parent().find("ul").is(':visible')){
              parents = $(this).parent().parents("ul");
              visible = $this.find("ul:visible");
              visible.each(function(visibleIndex){
                var close = true;
                parents.each(function(parentIndex){
                  if(parents[parentIndex] == visible[visibleIndex]){
                    close = false;
                    return false;
                  }
                });
                if(close){
                  if($(this).parent().find("ul") != visible[visibleIndex]){
                    $(visible[visibleIndex]).slideUp(opts.speed, function(){
                      $(this).parent("li").find("span:first").html(opts.closedSign);
                    });
                    
                  }
                }
              });
            }
          }
          if($(this).parent().find("ul:first").is(":visible")){
            $(this).parent().find("ul:first").slideUp(opts.speed, function(){
              $(this).parent("li").find("span:first").delay(opts.speed).html(opts.closedSign);
            });
            
            
          }else{
            $(this).parent().find("ul:first").slideDown(opts.speed, function(){
              $(this).parent("li").find("span:first").delay(opts.speed).html(opts.openedSign);
            });
          }
        }
      });
    }
});
})(jQuery);

     

