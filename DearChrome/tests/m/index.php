<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script>
		$(document).ready(function(){

		for (i=0;i<=22;i++){
		swatchify('#magSwatches1','rgb(255,0,'+(255-i)+')')
		swatchify('#magSwatches2','rgb('+(255-i)+',0,255)')
		}

		for (i=0;i<=110;i=i+5){
		swatchify('#magSwatches3','rgb(255,'+i+',255)')
		}

		for (i=0,j=0;i<=105,j<=22;i=i+5,j++){
			swatchify('#magSwatches4','rgb('+(255-j)+','+i+',255)');
			swatchify('#magSwatches5','rgb(255,'+i+','+(255-j)+')');
			swatchify('#magSwatches6','rgb('+(255-i)+','+i+','+(255-j)+')');
			swatchify('#magSwatches7','rgb('+(255-j)+','+i+','+(255-i)+')')

		}


		});
	</script>
</head>
<body>
	<div class="swatchContainer" id="magSwatches1"></div>
	<div class="swatchContainer" id="magSwatches2"></div>
	<div class="swatchContainer" id="magSwatches3"></div>
	<div class="swatchContainer" id="magSwatches4"></div>
	<div class="swatchContainer" id="magSwatches5"></div>
	<div class="swatchContainer" id="magSwatches6"></div>
	<div class="swatchContainer" id="magSwatches7"></div>


</body>
</html>