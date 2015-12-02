//Turn off console warnings
/*jshint devel:true */
/*global Backbone */

$(document).ready(function(){
	
	var mX, mY;


	// Initialize canvas
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;

	var xCenter = (window.innerWidth)/2;
	var yCenter = (window.innerHeight)/2;

	var rectW = 50;
	var rectH = 650; 

	var rectX = xCenter-(rectW/2);
	var rectY = yCenter-(rectH/2);


	context.beginPath();
	//Draw rectangle 

 
		// gradient setup
		var grd0 = context.createLinearGradient(0, 0, canvas.width, canvas.height);
		grd0.addColorStop(0, 'rgb(255,50,50)'); 
		grd0.addColorStop(1, 'rgb(255,100,100)');

		// fill rectangle with gradient
		context.beginPath();
		context.fillStyle = grd0;
		context.rect(0, 0, canvas.width, canvas.height);
		context.fill();
		context.closePath();

		context.beginPath();
		context.fillStyle = "blue";
		context.rect(rectX,rectY,rectW,rectH);
		context.fill();
		context.closePath(); 


	$(document).mousemove(function(e){

		mY = e.pageY;
		mX = e.pageX;

		var mouseColor = Math.floor((mY/(window.innerHeight))*255);
		var mouseColor2 = Math.floor((mX/(window.innerWidth))*255); 
 
		context.clearRect(0, 0, canvas.width, canvas.height);


		// gradient setup
		var grd = context.createLinearGradient(mX, 0, canvas.width, canvas.height);
		grd.addColorStop(0, 'rgb(255,'+ mouseColor2 +','+	mouseColor+')');   
		// grd.addColorStop(0.5, 'rgb(255,255,255)');		
		grd.addColorStop(1, 'rgb(255,'+ mouseColor +','+ mouseColor2 +')');

		// fill rectangle with gradient
		context.beginPath();
		context.fillStyle = grd;
		context.rect(0, 0, canvas.width, canvas.height);
		context.fill();
		context.closePath(); 



		//gradient setup
		var grd2 = context.createLinearGradient(mY, 0, canvas.width, canvas.height);
		grd2.addColorStop(0, 'rgb('+ mouseColor2 +','+mouseColor+',250');   
		// grd.addColorStop(0.5, 'rgb(255,255,255)');		
		grd2.addColorStop(1, 'rgb(0,0,255');   
		
		// fill rectangle with gradient
		context.beginPath();
		context.fillStyle = grd2;
		context.rect(rectX,rectY,rectW,rectH);
		context.fill();
		context.closePath(); 
	

	});






});