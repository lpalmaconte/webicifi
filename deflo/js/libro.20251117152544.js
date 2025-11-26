(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-58').attr('src', (dpi>1) ? 'images/stroke_9-12.png' : 'images/stroke_9-6.png');
$('.js-59').attr('src', (dpi>1) ? 'images/stroke_15-12.png' : 'images/stroke_15-6.png');
$('.js-60').attr('src', (dpi>1) ? 'images/stroke_10-314.png' : 'images/stroke_10-157.png');
$('.js-61').attr('src', (dpi>1) ? 'images/stroke_8-10-1.png' : 'images/stroke_8-5-1.png');
$('.js-62').attr('src', (dpi>1) ? 'images/stroke_10-314.png' : 'images/stroke_10-157.png');

$('.js-64').attr('src', (dpi>1) ? 'images/stroke_11-12.png' : 'images/stroke_11-6.png');
$('.js-65').attr('src', (dpi>1) ? 'images/stroke_8-10-1.png' : 'images/stroke_8-5-1.png');
$('.js-66').attr('src', (dpi>1) ? 'images/stroke_13-12.png' : 'images/stroke_13-6.png');



$('.js-70').attr('src', (dpi>1) ? 'images/shapeimage_2-196.jpg' : 'images/shapeimage_2-98.jpg');









$('.js-80').attr('src', (dpi>1) ? 'images/shapeimage_6_link_0-112.png' : 'images/shapeimage_6_link_0-56.png');



};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});