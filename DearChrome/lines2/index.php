<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
<script>
	$(document).ready(function(){
	for (i=0;i<=255;i=i+5){
			lineDraw('#line1','rgb(0,'+(255-i)+',255)');
			lineDraw2('#line1','rgb('+(255-i)+',255,0)');
			lineDraw3('#line1','rgb('+(255-i)+',100,0)');
			lineDraw4('#line1','rgb('+(255-i)+','+i+',255)');

			lineDraw('#line2','rgb('+(255-i)+','+i+','+i+')'); 
			lineDraw2('#line2','rgb(255,255,'+i+')');
			lineDraw3('#line2','rgb(0,255,'+i+')');
			lineDraw4('#line2','rgb('+(255-i)+',100,0)');
			
			lineDraw('#line3','rgb(255,0,'+i+')'); 
			lineDraw2('#line3','rgb('+i+','+i+','+(255-i)+')');
			lineDraw3('#line3','rgb(0,150,'+(255-i)+')');
			lineDraw4('#line3','rgb('+i+',255,255)');
			
			lineDraw('#line4','rgb('+i+',255,255)');
			lineDraw2('#line4','rgb(0,0,'+i+')'); 
			lineDraw3('#line4','rgb('+(255-i)+',0,255)'); 
			lineDraw4('#line4','rgb(255,0,'+(255-i)+')'); 
			
			lineDraw('#line5','rgb(255,255,'+(255-i)+')');
			lineDraw2('#line5','rgb(255,0,'+(255-i)+')'); 
			lineDraw3('#line5','rgb('+i+',100,'+(255-i)+')'); 
			lineDraw4('#line5','rgb(150,0,'+(255-i)+')'); 
			
			lineDraw('#line6','rgb(0,255,'+(255-i)+')');
			lineDraw2('#line6','rgb('+(255-i)+',150,'+(255-i)+')'); 
			lineDraw3('#line6','rgb('+(255-i)+',255,0)'); 
			lineDraw4('#line6','rgb(0,255,'+(255-i)+')'); 
			
			lineDraw('#line7','rgb(255,'+i+','+(255-i)+')');
			lineDraw2('#line7','rgb('+(255-i)+',0,'+i+')');			
			lineDraw3('#line7','rgb(255,255,'+i+')');
			lineDraw4('#line7','rgb(0,0,'+i+')'); 
		
			lineDraw('#line8','rgb(0,'+(255-i)+','+i+')');
			lineDraw2('#line8','rgb(255,'+(255-i)+',0)');
			lineDraw3('#line8','rgb(0,0,'+i+')'); 
			lineDraw4('#line8','rgb('+(255-i)+','+i+','+i+')'); 

		}	

		$('.line').hover(function(){
			var thisColor = $(this).css('background-color'); 
			$('.infoContainer>h1').empty();
			$('.infoContainer>h1').append(thisColor);
			$('#colorSwatch').css('background-color',thisColor);
			$('.line').click(function(){
				$('body').css('background-color',thisColor);
			})
		}, function(){
			$('.infoContainer>h1').empty();
			$('#colorSwatch').css('background-color','rgba(0,0,0,0.05)');

		})

		$('body').dblclick(function(){
			$('body').css('background-color','white');
		})

	});

</script>
<style>
	.lineContainer{ height:400px; margin-top:50px;}

	.line{
		margin:auto;
		margin-right:2px;
		width:1px;
		display:inline-block;
		height:100%;
		-webkit-transform:rotate(25deg);
	}

	.line2{
		margin:auto;
		margin-right:3px;
		width:1px;
		display:inline-block;
		height:100%;
		-webkit-transform:rotate(-25deg);
	}

	.line3{
		margin:auto;
		margin-right:-2px;
		width:1px;
		display:inline-block;
		height:100%;
	}

	.line4{
		margin:auto;
		margin-right:-2px;
		width:1px;
		display:inline-block;
		height:100%;
		-webkit-transform:rotate(5deg);
	}

</style>
</head>

<body>
	<div class="infoContainer">
		
		<p>Double click to reset background color</p>

		<div id="colorSwatch">
		</div>

		<h1></h1>

	</div>
	<div class="lineContainer" id="line1">
	</div>
	<div class="lineContainer" id="line2">
	</div>
	<div class="lineContainer" id="line3">
	</div>
	<div class="lineContainer" id="line4">
	</div>
	<div class="lineContainer" id="line5">
	</div>
	<div class="lineContainer" id="line6">
	</div>
	<div class="lineContainer" id="line7">
	</div>
	<div class="lineContainer" id="line8">
	</div>

</body>
</html>