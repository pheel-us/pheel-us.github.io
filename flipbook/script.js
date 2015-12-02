$(document).ready(function(){

var windowSize = 100;
var windowSizeIncrement = 25; 
var windowPosIncrement = 10;
var windowWidth = Math.floor(parseInt($(window).width()));

var windowQuantity = 80//Math.floor(windowWidth/windowIncrement); 
var colorInc = Math.round((255/windowQuantity));
var i;

console.log(windowQuantity);

$(window).click(function(event){
	var posX=event.pageX;
	var posY=event.pageY;
		

		for (i=0;i<=windowQuantity;i++){

    	myWindow=window.open("blank.html","","toolbar=no, scrollbars=no, resizable=no, top="+posY+", left="+posX+", width="+windowSize+", height="+windowSize);
		myWindow.document.write("<style>body{background-color:rgb("+(i*colorInc)+","+(i*colorInc)+",255);}</style><body></body>");

		if (i>0 && i<10){
		posX=posX+windowSizeIncrement;
		posY=posY+windowSizeIncrement;
		} else if (i>10 && i<20) {
		posX=posX-windowSizeIncrement;
		posY=posY+windowSizeIncrement;
		} else if (i>20 && i<30) {
		posX=posX-windowSizeIncrement;
		posY=posY-windowSizeIncrement; 
		} else if (i>30 && i<40) {
		posX=posX+windowSizeIncrement;
		posY=posY-windowSizeIncrement; 
		}else if (i>40 && i<50){
		posX=posX+windowSizeIncrement-10;
		posY=posY+windowSizeIncrement-10;
		} else if (i>50 && i<60) {
		posX=posX-windowSizeIncrement+10;
		posY=posY+windowSizeIncrement-10;
		} else if (i>60 && i<70) {
		posX=posX-windowSizeIncrement+20;
		posY=posY-windowSizeIncrement+20; 
		} else if (i>70 && i<80) {
		posX=posX+windowSizeIncrement-20;
		posY=posY-windowSizeIncrement+20; 
		}
	

	};




});
});