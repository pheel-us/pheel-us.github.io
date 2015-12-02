<?php 
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/DearChrome/header.php";
   include_once($path);
?>
<script>
	$(document).ready(function(){
	for (i=0;i<=200;i=i+5){
			circleDraw('#circle1','rgb('+i+','+(255-i)+',0)',550-i);
			circleDraw('#circle2','rgb(0,'+i+',255)',550-i);
			circleDraw('#circle3','rgb(255,'+i+','+(255-i)+')',550-i);
			
			circleDraw('#circle4','rgb(100,'+i+',255)',550-i);
			circleDraw('#circle5','rgb('+(255-i)+','+(255-i)+','+i+')',550-i);
			circleDraw('#circle6','rgb('+(255-i)+','+i+',200)',550-i);
			
			circleDraw('#circle7','rgb('+i+',200,255)',550-i);
			circleDraw('#circle8','rgb('+(255-i)+',175,0)',550-i);
			circleDraw('#circle9','rgb(100,'+(255-i)+','+i+')',550-i);
			
			circleDraw('#circle10','rgb(0,'+(255-i)+',255)',550-i);
			circleDraw('#circle11','rgb('+i+','+(255-i)+','+i+')',550-i);
			circleDraw('#circle12','rgb('+(255-i)+','+i+','+i+')',550-i);
			
			circleDraw('#circle13','rgb(255,'+(255-i)+',0)',550-i);
			circleDraw('#circle14','rgb('+(255-i)+','+(255-i)+','+i+')',550-i);
			circleDraw('#circle15','rgb(0,'+i+','+(255-i)+')',550-i);
			
			circleDraw('#circle16','rgb(255,'+(255-i)+',150)',550-i);
			circleDraw('#circle17','rgb(150,'+i+','+(255-i)+')',550-i);
			circleDraw('#circle18','rgb(255,150,'+i+')',550-i);
			
			circleDraw('#circle19','rgb('+(255-i)+','+(255-i)+',150)',550-i);
			circleDraw('#circle20','rgb(150,255,'+(255-i)+')',550-i);
			circleDraw('#circle21','rgb(200,'+(255-i)+',150)',550-i);

			circleDraw('#circle22','rgb('+i+','+(255-i)+',150)',550-i);
			circleDraw('#circle23','rgb('+(255-i)+','+i+','+(255-i)+')',550-i);
			circleDraw('#circle24','rgb('+i+',150,'+(255-i)+')',550-i);
			}	

		$('.circle').hover(function(){
			var thisColor = $(this).css('border-color'); 
			$('.infoContainer>h1').empty();
			$('.infoContainer>h1').append(thisColor);
			$('#colorSwatch').css('background-color',thisColor);
			$('.circle').click(function(){
				$('body').css('background-color',thisColor);
			})
		}, function(){
			$('.infoContainer>h1').empty();
			$('#colorSwatch').css('background-color','rgba(0,0,0,0.05)');

		})

		$(document).dblclick(function(){
			$('body').css('background-color','white');
		})

	});

</script>
<style>
	.circleContainer{ position:relative; margin-top:20% }
	.left{top:200px; left:25%;} .middle{top:300px; left:10%;} .right{top:230px ;left:15%;}
	.circle{
		background-color:none;
		border-radius:50%;
		position:absolute;	
		margin:auto;
		top: 10; left: 0; bottom: 5; right: 5;

	}

	.circles{
		width:800px;
		height:700px;
		margin:auto;
		page-break-after: always;
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

<div class="circles">
	<div class="circleContainer left" id="circle1">
	</div>

	<div class="circleContainer middle" id="circle2">
	</div>

	<div class="circleContainer right" id="circle3">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle4">
	</div>

	<div class="circleContainer middle" id="circle5">
	</div>

	<div class="circleContainer right" id="circle6">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle7">
	</div>

	<div class="circleContainer middle" id="circle8">
	</div>

	<div class="circleContainer right" id="circle9">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle10">
	</div>

	<div class="circleContainer middle" id="circle11">
	</div>

	<div class="circleContainer right" id="circle12">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle13">
	</div>

	<div class="circleContainer middle" id="circle14">
	</div>

	<div class="circleContainer right" id="circle15">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle16">
	</div>

	<div class="circleContainer middle" id="circle17">
	</div>

	<div class="circleContainer right" id="circle18">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle19">
	</div>

	<div class="circleContainer middle" id="circle20">
	</div>

	<div class="circleContainer right" id="circle21">
	</div>
</div>

<div class="circles">
	<div class="circleContainer left" id="circle22">
	</div>

	<div class="circleContainer middle" id="circle23">
	</div>

	<div class="circleContainer right" id="circle24">
	</div>
</div>
</body>
</html>