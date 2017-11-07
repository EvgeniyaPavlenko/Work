(function($){               
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs1 = this;
            i = 0;
            
            showPage = function(i){
                $(tabs1).children("div").children("div").hide();
                $(tabs1).children("div").children("div").eq(i).show();
                $(tabs1).children("ul").children("li").removeClass("active");
                $(tabs1).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);                
            
            $(tabs1).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs1).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs);
    };  
})(jQuery);

$(document).ready(function(){
    $(".tabs1").lightTabs();
    $("#tabs2").tabs();
    $("#tabs3").tabs();
 });
