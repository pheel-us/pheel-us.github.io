
$(document).ready(function(){

var windowSize = 100;
var windowPosIncrement = 5;
var windowWidth = Math.floor(parseInt($(window).width()));

var windowQuantity = 80//Math.floor(windowWidth/windowIncrement); 
var colorInc = Math.round((255/windowQuantity));
var i;


$(window).click(function(event){
	var posX=event.pageX;
	var posY=event.pageY;


	for(i=1;i<windowQuantity;i++){
	
		posX=posX+(windowPosIncrement);

		myWindow=window.open("blank.html","","toolbar=no, scrollbars=no, resizable=no, top="+posY+", left="+posX+", width="+windowSize+", height="+windowSize);
		myWindow.document.write("<style>body{background-color:rgb("+(255-i*colorInc)+","+(255-i*colorInc)+",255);}</style><body></body>");

	if ((Math.floor(i/8))%2==0){
		posY=posY+5;
	} else {
		posY=posY-2;
	}

	console.log(i);
}

	

});
});