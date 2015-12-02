<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
<script>
	$(document).ready(function(){
	function swatchify(target,colorVal){
		$(target).append('<div class="colorSwatch" style="background-color:'+colorVal+'"><p>'+colorVal+'</p></div>');
	}

	for (i=0;i<=255;i=i+15){
		swatchify('#redBlack','rgb('+(255-i)+',0,0)'); 
		swatchify('#greenBlack','rgb(0,'+(255-i)+',0)'); 
		swatchify('#blueBlack','rgb(0,0,'+(255-i)+')'); 

		swatchify('#redWhite','rgb(255,'+i+','+i+')'); 
		swatchify('#greenWhite','rgb('+i+',255,'+i+')'); 
		swatchify('#blueWhite','rgb('+i+','+i+',255)'); 
		
		swatchify('#redGreen','rgb('+(255-i)+','+i+',0)'); 
		swatchify('#greenBlue','rgb(0,'+(255-i)+','+i+')'); 
		swatchify('#blueRed','rgb('+i+',0,'+(255-i)+')'); 
		
		swatchify('#redCyan','rgb('+(255-i)+','+i+','+i+')'); 
		swatchify('#blueYellow','rgb('+i+','+i+','+(255-i)+')'); 
		swatchify('#greenMagenta','rgb('+i+','+(255-i)+','+i+')'); 

		swatchify('#blackWhite','rgb('+(255-i)+','+(255-i)+','+(255-i)+')'); 
	}
});
	</script>
</head>
<body>
<!-- 	<div class="navBar"></div>
 -->
<div class="pageContainer">
	<div class="swatchContainer" id="redBlack"></div>
	<div class="swatchContainer" id="greenBlack"></div>
	<div class="swatchContainer" id="blueBlack"></div>
	<!----> 
	<div class="swatchContainer" id="redWhite"></div>
	<div class="swatchContainer" id="greenWhite"></div>
	<div class="swatchContainer" id="blueWhite"></div>
</div>


<div class="pageContainer">
	<div class="swatchContainer" id="redGreen"></div>
	<div class="swatchContainer" id="greenBlue"></div>
	<div class="swatchContainer" id="blueRed"></div>
	
	<div class="swatchContainer" id="redCyan"></div>	
	<div class="swatchContainer" id="greenMagenta"></div>
	<div class="swatchContainer" id="blueYellow"></div>
</div>
	<div class="swatchContainer" id="blackWhite"></div>

</body>
</html>