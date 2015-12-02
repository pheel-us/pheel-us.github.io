$(document).ready(function() {
var myDate = new Date();
/*var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + myDate.getFullYear();
var displayTime = myDate.getHours() + ':' + myDate.getMinutes()
$('.Layer').append("<h1>"+displayTime+"</h1>");*/
var currentHour = myDate.getHours();

switch (true){
	case currentHour >= 0 && currentHour <= 4: 
	$('.Layer').css('-webkit-animation-name','time7')
	$('.Layer').css('-moz-animation-name','time7')
	break; 

	case currentHour >= 5 && currentHour <= 7: 
	$('.Layer').css('-webkit-animation-name','time0')
	$('.Layer').css('-moz-animation-name','time0')
	break; 

	case currentHour >= 9 && currentHour <= 12: 
	$('.Layer').css('-webkit-animation-name','time1')
	$('.Layer').css('-moz-animation-name','time1')
	break; 

	case currentHour >= 13 && currentHour <= 14: 
	$('.Layer').css('-webkit-animation-name','time2')
	$('.Layer').css('-moz-animation-name','time2')
	break; 

	case currentHour >= 15 && currentHour <= 16: 
	$('.Layer').css('-webkit-animation-name','time3')
	$('.Layer').css('-moz-animation-name','time3')
	break; 

	case currentHour >= 17 && currentHour <= 18: 
	$('.Layer').css('-webkit-animation-name','time4')
	$('.Layer').css('-moz-animation-name','time4')
	break; 

	case currentHour >= 19 && currentHour <= 20: 
	$('.Layer').css('-webkit-animation-name','time5')
	$('.Layer').css('-moz-animation-name','time5')
	break; 

	case currentHour >= 21 && currentHour <= 23: 
	$('.Layer').css('-webkit-animation-name','time6')
	$('.Layer').css('-moz-animation-name','time6')
	break; 

	case currentHour == 24: 
	$('.Layer').css('-webkit-animation-name','time7')
	$('.Layer').css('-moz-animation-name','time7')
	break; 
}

console.log(currentHour);


});