$(document).ready(function(){$(".scenes-container section").each(function(e){e!=0&&$(this).hide()});$("#next").click(function(){if($(".scenes-container section:visible").next().length!=0)$(".scenes-container section:visible").next().show().prev().hide();else{$(".scenes-container section:visible").hide();$(".scenes-container section:first").show()}return!1});$("#prev").click(function(){if($(".scenes-container section:visible").prev().length!=0)$(".scenes-container section:visible").prev().show().next().hide();else{$(".scenes-container section:visible").hide();$(".scenes-container section:last").show()}return!1})});var snapper=new Snap({element:document.getElementById("guide-container"),dragger:document.getElementById("do-drag"),minPosition:-324,disable:"left"}),myToggleButton=document.getElementById("toggle-scenes");myToggleButton.addEventListener("click",function(e){e.preventDefault();snapper.state().state=="right"?snapper.close():snapper.open("right")});$(document).ready(function(){$(".logo").lettering();$(".logo-small").lettering()});$(document).ready(function(){$("body").on("click","#trailer-show",function(e){e.preventDefault();$("#trailer").show();$("#trailer").addClass("animated slideInDown")});$("body").on("click","#trailer-hide",function(e){e.preventDefault();$("#trailer").hide()});$("body").on("click","#guide-introduction-toggle",function(e){e.preventDefault();$("#guide-introduction").toggle();$("#guide-introduction").toggleClass("slideOut slideIn")})});$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},1e3);return!1}}})});