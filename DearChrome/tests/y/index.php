<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script>
	$(document).ready(function(){

	for (i=0;i<=22;i++){
	swatchify('#yellowSwatches1','rgb(255,'+(255-i)+',0)')
	swatchify('#yellowSwatches2','rgb('+(255-i)+',255,0)')
	}

	for (i=0;i<=110;i=i+5){
	swatchify('#yellowSwatches3','rgb(255,255,'+i+')')
	}

	for (i=0,j=0;i<=105,j<=22;i=i+5,j++){
		swatchify('#yellowSwatches4','rgb(255,'+(255-j)+','+i+')')
		swatchify('#yellowSwatches5','rgb('+(255-j)+',255,'+i+')')
		swatchify('#yellowSwatches6','rgb('+(255-i)+','+(255-j)+','+i+'')
		swatchify('#yellowSwatches7','rgb('+(255-j)+','+(255-i)+','+i+'')
	}
	

	})
	</script>
</head>
<body>
	<div class="swatchContainer" id="yellowSwatches1"></div>
	<div class="swatchContainer" id="yellowSwatches2"></div>
	<div class="swatchContainer" id="yellowSwatches3"></div>
	<div class="swatchContainer" id="yellowSwatches4"></div>
	<div class="swatchContainer" id="yellowSwatches5"></div>
	<div class="swatchContainer" id="yellowSwatches6"></div>
	<div class="swatchContainer" id="yellowSwatches7"></div>


</body>
</html>