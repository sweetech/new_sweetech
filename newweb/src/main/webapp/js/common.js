$(document).ready(function() {
	$('.myMenu > li').bind('mouseover', function() {
		$(this).find('ul').css('visibility', 'visible');
	});
//
	$('.myMenu > li').bind('mouseout', function() {
		$(this).find('ul').css('visibility', 'hidden');
	});
});