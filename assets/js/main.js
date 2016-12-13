// Otherwise Navigation
$(document).ready(function () {
	$('#otherwise_nav').addClass('otherwise_hide');
	// Guide
	$('body').on('click', '#guide-close', function(e) {
		e.preventDefault();
		$('#guide-detail').hide();
	});
	$('body').on('click', '#scene-toggle', function(e) {
		e.preventDefault();
		$('#guide-detail').show();
	});
	// Trailer
	$('body').on('click', '#trailer-show', function(e) {
		e.preventDefault();
		$('#trailer').show();
		$('#trailer').addClass('animated slideInDown');
	});
	$('body').on('click', '#trailer-hide', function(e) {
		e.preventDefault();
		$('#trailer').hide();
	});
	// Lettering
	$(".logo").lettering();
});
$("#otherwise_toggle").click(function () {
	$('#otherwise_nav').toggleClass('otherwise_hide');
	$('#otherwise_toggle').toggleClass('otherwise_active');
});
// Scroll To
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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
