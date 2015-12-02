
$(document).ready(function(){

var windowSize = 100;
var windowPosIncrement = 75; 
var windowWidth = Math.floor(parseInt($(window).width()));

var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;	
    });

var intervalId;
	$(window).mousedown(function(event){
	  	var ran1 = Math.floor(Math.random() * (8 - 4) + 4);
	  	var ran2 = Math.floor(Math.random() * (12 - 8) + 8);
	  	var ran3 = Math.floor(Math.random() * (16 - 12) + 12);
	  	var ran4 = Math.floor(Math.random() * (20 - 16) + 16);

	  	intervalId = setInterval(function(){

		i++;

	  	if (i>=0 && i<=ran1){		
		myWindow=window.open("H.html","_blank","toolbar=no, scrollbars=no, resizable=no, top="+currentMousePos.y+", left="+(currentMousePos.x+(i*windowPosIncrement))+", width="+windowSize+", height="+windowSize);
		} else if (i>=ran1 && i<=ran2){		
		myWindow=window.open("E.html","_blank","toolbar=no, scrollbars=no, resizable=no, top="+currentMousePos.y+", left="+(currentMousePos.x+(i*windowPosIncrement))+", width="+windowSize+", height="+windowSize);
		} else if (i>=ran2 && i<=ran3){		
		myWindow=window.open("R.html","_blank","toolbar=no, scrollbars=no, resizable=no, top="+currentMousePos.y+", left="+(currentMousePos.x+(i*windowPosIncrement))+", width="+windowSize+", height="+windowSize);
		} else if (i>=ran3 && i<=ran4){		
		myWindow=window.open("E2.html","_blank","toolbar=no, scrollbars=no, resizable=no, top="+currentMousePos.y+", left="+(currentMousePos.x+(i*windowPosIncrement))+", width="+windowSize+", height="+windowSize);
		}

		if (i>ran4){
			i=0;
		ran1 = Math.floor(Math.random() * (8 - 4) + 4);
	  	ran2 = Math.floor(Math.random() * (12 - 8) + 8);
	  	ran3 = Math.floor(Math.random() * (16 - 12) + 12);
	  	ran4 = Math.floor(Math.random() * (20 - 16) + 16);
		}

	},350);

})

$(document).mouseup(function() {
	clearInterval(intervalId);
	i=0; 
	console.log(i);
});


});