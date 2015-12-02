<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script>
		$(document).ready(function(){


		function textify(target,colorVal){
		$(target).append('<div class="textBlock" style="color:'+colorVal+'"><h1>'+colorVal+'</h1><p>'+fillerText+'</p></div>');
		}

		for (i=0;i<=255;i=i+25){
		textify('#redBlackText','rgb('+(255-i)+',0,0)'); 
		textify('#greenBlackText','rgb(0,'+(255-i)+',0)'); 
		textify('#blueBlackText','rgb(0,0,'+(255-i)+')'); 

		textify('#redWhiteText','rgb(255,'+i+','+i+')'); 
		textify('#greenWhiteText','rgb('+i+',255,'+i+')'); 
		textify('#blueWhiteText','rgb('+i+','+i+',255)'); 
		
		textify('#redGreenText','rgb('+(255-i)+','+i+',0)'); 
		textify('#greenBlueText','rgb(0,'+(255-i)+','+i+')'); 
		textify('#blueRedText','rgb('+i+',0,'+(255-i)+')'); 
		
		textify('#redCyanText','rgb('+(255-i)+','+i+','+i+')'); 
		textify('#blueYellowText','rgb('+i+','+i+','+(255-i)+')'); 
		textify('#greenMagentaText','rgb('+i+','+(255-i)+','+i+')'); 
		textify('#blackWhiteText','rgb('+(255-i)+','+(255-i)+','+(255-i)+')'); 
		}
		})
	</script>
</head>
<body>
	
<div class="pageContainer">
	<div class="textContainer" id="redBlackText"></div>
	<div class="textContainer" id="greenBlackText"></div>
	<div class="textContainer" id="blueBlackText"></div>
	<!----> 
	<div class="textContainer" id="redWhiteText"></div>
	<div class="textContainer" id="greenWhiteText"></div>
	<div class="textContainer" id="blueWhiteText"></div>
</div>

<div class="pageContainer">
	<div class="textContainer" id="redGreenText"></div>
	<div class="textContainer" id="greenBlueText"></div>
	<div class="textContainer" id="blueRedText"></div>
	
	<div class="textContainer" id="redCyanText"></div>	
	<div class="textContainer" id="greenMagentaText"></div>
	<div class="textContainer" id="blueYellowText"></div>

	<div class="textContainer" id="blackWhiteText"></div>
</div>
</body>
</html>