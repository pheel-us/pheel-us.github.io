$(document).ready(function(){

	function spamGif(){
	var randomNum = Math.floor(Math.random()*21)+1; 
	var randomGif = "url(images/"+randomNum+".gif)";
	$('.mainGif').css('background-image',randomGif);
	}

	for (i=1;i<=21;i++){
		$.preload('images/'+i+'.gif');
	}
	
	spamGif();
	setInterval(spamGif,5000);
});