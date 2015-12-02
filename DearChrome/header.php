<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dear Chrome</title>
	<link href='http://fonts.googleapis.com/css?family=Karla:400,400italic,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="/DearChrome/_styles/reset.css">
	<link rel="stylesheet" type="text/css" media="print" href="/DearChrome/_styles/print-style.css">
	<link rel="stylesheet" type="text/css" media="screen" href="/DearChrome/_styles/screen-style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script>

		var fillerText ="The quick red fox jumped over the lazy brown dog."

		function swatchify(target,colorVal){
			$(target).append('<div class="colorSwatch" style="background-color:'+colorVal+'"><p>'+colorVal+'</p></div>');
		}

		function textify(target,colorVal){
			$(target).append('<div class="textBlock" style="color:'+colorVal+'"><h1>'+colorVal+'</h1><p>'+fillerText+'</p></div>');
		}

		function textBlockify(target,colorVal){
			$(target).append('<div class="textBlock" style="background-color:'+colorVal+';color:white"><h1>'+colorVal+'</h1><p>'+fillerText+'</p></div>');
		}

		function lineDraw(target,colorVal){
			$(target).append('<div class="line" style="background-color:'+colorVal+'"></div>');
		}

		function lineDraw2(target,colorVal){
			$(target).append('<div class="line2" style="background-color:'+colorVal+'"></div>');
		}

		function lineDraw3(target,colorVal){
			$(target).append('<div class="line3" style="background-color:'+colorVal+'"></div>');
		}

		function lineDraw4(target,colorVal){
			$(target).append('<div class="line4" style="background-color:'+colorVal+'"></div>');
		}

		function circleDraw(target,colorVal,size){
			$(target).append('<div class="circle" style="border:1px '+colorVal+' solid;width:'+size+'px;height:'+size+'px"></div>');
		}

		function dotDraw(target,colorVal,size){
			$(target).append('<div class="dot" style="background-color:'+colorVal+';width:'+size+'px;height:'+size+'px;margin:'+((size*0.2)/0.2)+'px"></div>');
		}

		function dotDrawMargin(target,colorVal,size,margin){
			$(target).append('<div class="dot" style="background-color:'+colorVal+';width:'+size+'px;height:'+size+'px;margin:'+margin+'px"></div>');
		}		
	</script>