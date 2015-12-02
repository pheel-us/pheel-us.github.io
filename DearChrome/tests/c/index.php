<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script>
		$(document).ready(function(){

			for (i=0;i<=22;i++){
			swatchify('#cyanSwatches1','rgb(0,'+(255-i)+',255)')
			swatchify('#cyanSwatches2','rgb(0,255,'+(255-i)+')')
			}

			for (i=0;i<=110;i=i+5){
			swatchify('#cyanSwatches3','rgb('+i+',255,255)')
			}

			for (i=0,j=0;i<=105,j<=22;i=i+5,j++){
				swatchify('#cyanSwatches4','rgb('+i+','+(255-j)+',255)')
				swatchify('#cyanSwatches5','rgb('+i+',255,'+(255-j)+')')
				swatchify('#cyanSwatches6','rgb('+i+','+(255-j)+','+(255-i)+')')
				swatchify('#cyanSwatches7','rgb('+i+','+(255-i)+','+(255-j)+')')
			}



		})
	</script>
</head>
<body>
	<div class="swatchContainer" id="cyanSwatches1"></div>
	<div class="swatchContainer" id="cyanSwatches2"></div>
	<div class="swatchContainer" id="cyanSwatches3"></div>
	<div class="swatchContainer" id="cyanSwatches4"></div>
	<div class="swatchContainer" id="cyanSwatches5"></div>
	<div class="swatchContainer" id="cyanSwatches6"></div>
	<div class="swatchContainer" id="cyanSwatches7"></div>


</body>
</html>