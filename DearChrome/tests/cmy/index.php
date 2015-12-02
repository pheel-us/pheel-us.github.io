<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
	<script>
		$(document).ready(function(){

			for (i=0;i<=25;i++){
				swatchify('#cyanSwatches1','rgb(0,'+(255-i)+',255)')
				swatchify('#cyanSwatches2','rgb(0,255,'+(255-i)+')')
			}

			for (i=0;i<=125;i=i+5){
				swatchify('#cyanSwatches3','rgb('+i+',255,255)')
			}

			for (i=0,j=0;i<=120,j<=25;i=i+5,j++){
				swatchify('#cyanSwatches4','rgb('+i+','+(255-j)+',255)')
				swatchify('#cyanSwatches5','rgb('+i+',255,'+(255-j)+')')
				swatchify('#cyanSwatches6','rgb('+i+','+(255-j)+','+(255-i)+')')
				swatchify('#cyanSwatches7','rgb('+i+','+(255-i)+','+(255-j)+')')
			}


			for (i=0;i<=25;i++){
				swatchify('#magSwatches1','rgb(255,0,'+(255-i)+')')
				swatchify('#magSwatches2','rgb('+(255-i)+',0,255)')
			}

			for (i=0;i<=125;i=i+5){
				swatchify('#magSwatches3','rgb(255,'+i+',255)')
			}

			for (i=0,j=0;i<=120,j<=25;i=i+5,j++){
				swatchify('#magSwatches4','rgb('+(255-j)+','+i+',255)');
				swatchify('#magSwatches5','rgb(255,'+i+','+(255-j)+')');
				swatchify('#magSwatches6','rgb('+(255-i)+','+i+','+(255-j)+')');
				swatchify('#magSwatches7','rgb('+(255-j)+','+i+','+(255-i)+')')

			}


			for (i=0;i<=25;i++){
				swatchify('#yellowSwatches1','rgb(255,'+(255-i)+',0)')
				swatchify('#yellowSwatches2','rgb('+(255-i)+',255,0)')
			}

			for (i=0;i<=125;i=i+5){
				swatchify('#yellowSwatches3','rgb(255,255,'+i+')')
			}

			for (i=0,j=0;i<=120,j<=25;i=i+5,j++){
				swatchify('#yellowSwatches4','rgb(255,'+(255-j)+','+i+')')
				swatchify('#yellowSwatches5','rgb('+(255-j)+',255,'+i+')')
				swatchify('#yellowSwatches6','rgb('+(255-i)+','+(255-j)+','+i+'')
				swatchify('#yellowSwatches7','rgb('+(255-j)+','+(255-i)+','+i+'')
			}

		})
	</script>
</head>
<body>
<div class="pageContainer">
	<div class="swatchContainer" id="cyanSwatches1"></div>
	<div class="swatchContainer" id="cyanSwatches2"></div>
	<div class="swatchContainer" id="cyanSwatches3"></div>
	<div class="swatchContainer" id="cyanSwatches4"></div>
	<div class="swatchContainer" id="cyanSwatches5"></div>
	<div class="swatchContainer" id="cyanSwatches6"></div>
	<div class="swatchContainer" id="cyanSwatches7"></div>
</div>

<div class="pageContainer">
	<div class="swatchContainer" id="magSwatches1"></div>
	<div class="swatchContainer" id="magSwatches2"></div>
	<div class="swatchContainer" id="magSwatches3"></div>
	<div class="swatchContainer" id="magSwatches4"></div>
	<div class="swatchContainer" id="magSwatches5"></div>
	<div class="swatchContainer" id="magSwatches6"></div>
	<div class="swatchContainer" id="magSwatches7"></div>
</div>

<div class="pageContainer">
	<div class="swatchContainer" id="yellowSwatches1"></div>
	<div class="swatchContainer" id="yellowSwatches2"></div>
	<div class="swatchContainer" id="yellowSwatches3"></div>
	<div class="swatchContainer" id="yellowSwatches4"></div>
	<div class="swatchContainer" id="yellowSwatches5"></div>
	<div class="swatchContainer" id="yellowSwatches6"></div>
	<div class="swatchContainer" id="yellowSwatches7"></div>
</div>


</body>
</html>