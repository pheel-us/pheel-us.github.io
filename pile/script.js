
$(document).ready(function(){

var windowSize = 800;
var windowIncrement = 15; 
var windowQuantity = (windowSize-100)/windowIncrement;
var colorInc = Math.round((255/windowQuantity));
var i;

function openWin()
	{
		var posX=parseInt(($(window).width())/2)-(windowSize/2);
		var posY=parseInt(($(window).height())/2)-(windowSize/2);

		console.log(posX);
		console.log(posY);

	myWindow=window.open("blank.html","","toolbar=no, scrollbars=no, resizable=no, top="+posY+", left="+posX+", width="+windowSize+", height="+windowSize);
	myWindow.document.write("<style>body{background-color:rgb("+i*colorInc+","+i*colorInc+",255);}</style><body></body>");

	}


for(i=1;i<windowQuantity;i++){
	windowSize=windowSize-windowIncrement;
	openWin();
}

});