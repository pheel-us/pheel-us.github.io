
$(document).ready(function(){

	var keybindArray=["shift","ctrl","option","command","return","esc","left","right","up","down","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	var IDs = [];
	$(".buttonContainer").find("div").each(function(){IDs.push(this.id);});


	var keyArrayLength = keybindArray.length;
	var IDsLength = IDs.length;

	var buttonKeyBindingArray =[];

	for (var i=0;i<=IDsLength;i++){
	var randomKey1=Math.floor((Math.random()*keyArrayLength));
	var randomKey2=Math.floor((Math.random()*keyArrayLength));
	var randomKey3=Math.floor((Math.random()*keyArrayLength));
	var randomKey4=Math.floor((Math.random()*keyArrayLength));

	var key1=keybindArray[randomKey1];
	var key2=keybindArray[randomKey2];
	var key3=keybindArray[randomKey3];
	var key4=keybindArray[randomKey4];

	var keyBinding =key1+" "+key2+" "+key3+" "+key4;

	buttonKeyBindingArray.push(keyBinding);

	$("#"+IDs[i]).attr('data-buttonKeyBinding',keyBinding);	
	}

	$(".menuButton").hover(
		function(){
			var buttonKeyID=$(this).attr('data-buttonKeyBinding');
			$(this).empty();
			$(this).append("<p>"+buttonKeyID+"</p>");
		}, function(){
			var buttonID=$(this).attr('id');

			$(this).empty();
			$(this).append("<p>"+buttonID+"</p>");
		}
	);

	Mousetrap.bind(buttonKeyBindingArray[0],
		function(e){
			var thisChar=$("#SPACE").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[1],
		function(e){
			var thisChar=$("#TIME").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[2],
		function(e){
			var thisChar=$("#SPIRIT").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[3],
		function(e){
			var thisChar=$("#SENSE").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[4],
		function(e){
			var thisChar=$("#BODY").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[5],
		function(e){
			var thisChar=$("#SOUL").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[6],
		function(e){
			var thisChar=$("#MIND").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[7],
		function(e){
			var thisChar=$("#URL").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[8],
		function(e){
			var thisChar=$("#SCREEN").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[9],
		function(e){
			var thisChar=$("#USER").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[10],
		function(e){
			var thisChar=$("#DOMAIN").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});
	Mousetrap.bind(buttonKeyBindingArray[11],
		function(e){
			var thisChar=$("#INDEX").attr('data-buttonCharacter');
			$('.textField').append("<h1>"+thisChar+"</h1>");
	});




});