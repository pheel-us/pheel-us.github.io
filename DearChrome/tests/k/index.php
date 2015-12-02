<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
<script>
	$(document).ready(function(){
		for (i=0;i<=250;i=i+5){
			var alphaVal = Math.round((i/255)*100)/100;
			swatchify('#kSwatches1','rgb('+(255-i)+','+(255-i)+','+(255-i)+');');
			swatchify('#kSwatches2','rgba(0,0,0,'+alphaVal+');');
		}
		for (i=0;i<=100;i=i+2){
			swatchify('#kSwatches3','hsl(0,0%,'+(100-i)+'%);');
		}
	});
</script>

<style>
	.swatchContainer{
		
	}
</style>

</head>
<body>
	<div class="swatchContainer" id="kSwatches1"></div>
	<div class="swatchContainer" id="kSwatches2"></div>
	<div class="swatchContainer" id="kSwatches3"></div>



</body>
</html>