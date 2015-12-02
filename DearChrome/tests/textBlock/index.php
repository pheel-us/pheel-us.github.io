<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script type="text/javascript">
	$(document).ready(function(){

	for (i=0;i<=255;i=i+17){
	
		textBlockify('#redBlackTextBlock','rgb('+(255-i)+',0,0)'); 
		textBlockify('#greenBlackTextBlock','rgb(0,'+(255-i)+',0)'); 
		textBlockify('#blueBlackTextBlock','rgb(0,0,'+(255-i)+')'); 

		textBlockify('#redWhiteTextBlock','rgb(255,'+i+','+i+')'); 
		textBlockify('#greenWhiteTextBlock','rgb('+i+',255,'+i+')'); 
		textBlockify('#blueWhiteTextBlock','rgb('+i+','+i+',255)'); 
		
		textBlockify('#redGreenTextBlock','rgb('+(255-i)+','+i+',0)'); 
		textBlockify('#greenBlueTextBlock','rgb(0,'+(255-i)+','+i+')'); 
		textBlockify('#blueRedTextBlock','rgb('+i+',0,'+(255-i)+')'); 
		
		textBlockify('#redCyanTextBlock','rgb('+(255-i)+','+i+','+i+')'); 
		textBlockify('#blueYellowTextBlock','rgb('+i+','+i+','+(255-i)+')'); 
		textBlockify('#greenMagentaTextBlock','rgb('+i+','+(255-i)+','+i+')'); 

		textBlockify('#blackWhiteTextBlock','rgb('+(255-i)+','+(255-i)+','+(255-i)+')'); 

	}
	});
	</script>
</head>
<body>
	
<div class="pageContainer">
	<div class="textContainer" id="redBlackTextBlock"></div>
	<div class="textContainer" id="greenBlackTextBlock"></div>
	<div class="textContainer" id="blueBlackTextBlock"></div>
	<!----> 
	<div class="textContainer" id="redWhiteTextBlock"></div>
	<div class="textContainer" id="greenWhiteTextBlock"></div>
	<div class="textContainer" id="blueWhiteTextBlock"></div>
</div>

<div class="pageContainer">	
	<div class="textContainer" id="redGreenTextBlock"></div>
	<div class="textContainer" id="greenBlueTextBlock"></div>
	<div class="textContainer" id="blueRedTextBlock"></div>
	
	<div class="textContainer" id="redCyanTextBlock"></div>	
	<div class="textContainer" id="greenMagentaTextBlock"></div>
	<div class="textContainer" id="blueYellowTextBlock"></div>
</div>

<div class="pageContainer">	
	<div class="textContainer" id="blackWhiteTextBlock"></div>
</div>
</body>
</html>