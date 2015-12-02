$(document).ready(function(){

	// var intervalID = window.setInterval(mousePop,1000)


	$(document).mousemove(function(e){

		function mousePop(){
		var mouseX = e.pageX; 
		var mouseY = e.pageY;

		var newWindow=window.open("popup.html","","'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, top="+mouseY+",left="+mouseX+",width=10,height=10")
		newWindow.blur()
		setTimeout(function(){newWindow.close()},1000)
	}
		setTimeout(mousePop,500);
	})

});