
$(document).ready(function(){
    $(".scenes-container section").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("#next").click(function(){
        if ($(".scenes-container section:visible").next().length != 0)
            $(".scenes-container section:visible").next().show().prev().hide();
        else {
            $(".scenes-container section:visible").hide();
            $(".scenes-container section:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".scenes-container section:visible").prev().length != 0)
            $(".scenes-container section:visible").prev().show().next().hide();
        else {
            $(".scenes-container section:visible").hide();
            $(".scenes-container section:last").show();
        }
        return false;
    });
});
var snapper = new Snap({
	element: document.getElementById('guide-container'),
	dragger: document.getElementById('do-drag'),
	minPosition: -324,
	disable: 'left'
});
var myToggleButton = document.getElementById('toggle-scenes')
myToggleButton.addEventListener('click', function(e) {
	e.preventDefault();
	if (snapper.state().state == "right") {
		snapper.close();
	} else {
		snapper.open('right');
	}
});
$(document).ready(function() {
    $(".logo").lettering();
	$(".logo-small").lettering();
});
$(document).ready(function() {
	$('body').on('click', '#trailer-show', function(e) {
    	e.preventDefault();
		$('#trailer').show();
		$('#trailer').addClass('animated slideInDown');
	});
	$('body').on('click', '#trailer-hide', function(e) {
    	e.preventDefault();
		$('#trailer').hide();
	});
	$('body').on('click', '#guide-introduction-toggle', function(e) {
    	e.preventDefault();
		$('#guide-introduction').toggle();
		$('#guide-introduction').toggleClass('slideOut slideIn');
	});
});
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

