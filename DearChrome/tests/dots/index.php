<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script>
		$(document).ready(function(){
		for (i=0;i<=255;i++){
		$('#dotsRedBlack').append('<div class="colorDot" style="background-color:rgb('+(255-i)+',0,0);"></div>');
		$('#dotsGreenBlack').append('<div class="colorDot" style="background-color:rgb(0,'+(255-i)+',0);"></div>');
		$('#dotsBlueBlack').append('<div class="colorDot" style="background-color:rgb(0,0,'+(255-i)+');"></div>');
		
		$('#dotsRedWhite').append('<div class="colorDot" style="background-color:rgb(255,'+i+','+i+');"></div>');
		$('#dotsGreenWhite').append('<div class="colorDot" style="background-color:rgb('+i+',255,'+i+');"></div>');		
		$('#dotsBlueWhite').append('<div class="colorDot" style="background-color:rgb('+i+','+i+',255);"></div>');

		$('#dotsRedGreen').append('<div class="colorDot noMargin" style="background-color:rgb('+(255-i)+','+i+',0);"></div>' )
		$('#dotsGreenBlue').append('<div class="colorDot noMargin" style="background-color:rgb(0,'+(255-i)+','+i+');"></div>' )
		$('#dotsBlueRed').append('<div class="colorDot noMargin" style="background-color:rgb('+i+',0,'+(255-i)+');"></div>' )

		$('#dotsRedCyan').append('<div class="colorDot noMargin" style="background-color:rgb('+(255-i)+','+i+','+i+');"></div>' )
		$('#dotsBlueYellow').append('<div class="colorDot noMargin" style="background-color:rgb('+i+','+i+','+(255-i)+');"></div>' )
		$('#dotsGreenMagenta').append('<div class="colorDot noMargin" style="background-color:rgb('+i+','+(255-i)+','+i+');"></div>' )

		$('#dotsBlackWhite').append('<div class="colorDot noMargin" style="background-color:rgb('+(255-i)+','+(255-i)+','+(255-i)+');"></div>' )
		}
		})
	</script>
</head>
<body>
	<div class="swatchContainer" id="dotsRedBlack"></div>
	<div class="swatchContainer" id="dotsGreenBlack"></div>
	<div class="swatchContainer" id="dotsBlueBlack"></div>

	<div class="swatchContainer" id="dotsRedWhite"></div>
	<div class="swatchContainer" id="dotsGreenWhite"></div>
	<div class="swatchContainer" id="dotsBlueWhite"></div>

	<div class="swatchContainer" id="dotsRedGreen"></div>
	<div class="swatchContainer" id="dotsGreenBlue"></div>
	<div class="swatchContainer" id="dotsBlueRed"></div>

	<div class="swatchContainer" id="dotsRedCyan"></div>	
	<div class="swatchContainer" id="dotsGreenMagenta"></div>
	<div class="swatchContainer" id="dotsBlueYellow"></div>

	<div class="swatchContainer" id="dotsBlackWhite"></div>
</body>
</html>