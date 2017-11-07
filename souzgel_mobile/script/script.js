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


  //OWL GALLERY

   $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      dragBeforeAnimFinish : true,
      mouseDrag : true,
      touchDrag : true,
 
  });
});
