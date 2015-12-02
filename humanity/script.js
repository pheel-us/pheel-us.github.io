$(document).ready(function(){
	var windowHeight = parseInt($(window).height());

	$('.containerSecondary').toggle();
	$('.container, .containerSecondary').css('height',Math.floor(windowHeight/2));

})