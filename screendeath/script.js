
$(document).ready(function(){
	var i=0; 
	var timeout;

	$('.titleHeader').css('color','blue');

	function blackWhite(){
		i++;	
		if (i%5===0){
			$('html').css('background-color','white');
		} else {
			$('html').css('background-color','blue');
		}

		if (i>=100){
			i=0;
		}

		clearTimeout(timeout);
		timeout = setTimeout(function(){$('html').css('background-color','white');}, 150);			
	}


	$(document).mousemove(function(){
		blackWhite();
	});
});