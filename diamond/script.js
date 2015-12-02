$(document).ready(function(evt){
	//INITIALIZE CANVAS
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var mX, mY;
	
	//1. Top trapezoid
	context.beginPath();
	context.moveTo(0,250); 
	context.lineTo(125,75);
	context.lineTo(675,75);
	context.lineTo(800,250);
	context.strokeStyle="blue";
	context.stroke(); 
	context.closePath();

	//2. Top triangle (down) 
	context.beginPath();
	context.moveTo(125,75);
	context.lineTo(400,250);
	context.lineTo(675,75);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//3. Top triangle (up) 
	context.beginPath();
	context.moveTo(50,250);
	context.lineTo(400,75);
	context.lineTo(750,250);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//4. Bottom triangle in left third (left)
	context.beginPath();
	context.moveTo(50,250);
	context.lineTo(45,300);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//5. Bottom triangle in left third (right)
	context.beginPath();
	context.moveTo(50,250);
	context.lineTo(275,380);
	context.lineTo(400,250);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();


	//6. Bottom triangle in right third (left)
	context.beginPath();
	context.moveTo(750,250);
	context.lineTo(525,380);
	context.lineTo(400,250);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//7. Bottom triangle in right third (right)
	context.beginPath();
	context.moveTo(750,250);
	context.lineTo(755,300);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//8. Bottom third (left) 
	context.beginPath();
	context.moveTo(0,250); 
	context.lineTo(225,250);
	context.lineTo(400,700);
	context.lineTo(0,250);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//9. Bottom third (center) 
	context.beginPath();
	context.moveTo(225,250); 
	context.lineTo(575,250);
	// context.lineTo(400,700);
	// context.lineTo(225,250);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();

	//10. Bottom third (right)
	context.beginPath();
	context.moveTo(800,250); 
	context.lineTo(575,250);
	context.lineTo(400,700);
	context.lineTo(800,250);
	context.strokeStyle="blue";
	context.stroke();
	context.closePath();
	
	$(document).mousemove(function(evt){
	

	mY = evt.pageY;
	mX = evt.pageX;


	if (mY<0||mX<0){
		mY=0;
		mX=0;
	}

	//Bind mouse Y movement to a range up to ... 
	var mouseColor = Math.floor((mY/(window.innerHeight))*50);
	var mouseColor4 = Math.floor((mY/(window.innerHeight))*255);

	var mouseColor2 = Math.floor((mX/(window.innerWidth))*200);
	var mouseColor3 = Math.floor((mX/(window.innerWidth))*100);

	context.clearRect(0, 0, canvas.width, canvas.height);

	//GRADIENTS

	var grd1=context.createLinearGradient(50,0,800,800);
	grd1.addColorStop(0,"rgb(0,"+mouseColor2+",255)");
	grd1.addColorStop(0.5,"rgb(255,255,255");
	grd1.addColorStop(1,"rgb("+55+mouseColor3+",255,"+mouseColor+155+")");

	var grd2=context.createLinearGradient(0,0,800,mouseColor3*8);
	grd2.addColorStop(0,"rgb(140,"+mouseColor+",230)");
	grd2.addColorStop(1,"rgb("+mouseColor2+","+mouseColor3+","+40+mouseColor+")");

	var grd3=context.createLinearGradient(0,0,(mouseColor3*6)+200,(mouseColor3*8)+200);
	grd3.addColorStop(0,"rgb(85,110,255)");
	grd3.addColorStop(mouseColor3*0.0035,"rgb(85,110,"+mouseColor+155+")");
	grd3.addColorStop(mouseColor3*0.005,"rgb(255,255,255");
	grd3.addColorStop(mouseColor3*0.0065,"rgb(130,+"+mouseColor3+",250");
	grd3.addColorStop(1,"rgb(130,200,250");

	var grd4=context.createLinearGradient(100,50,800,800);
	grd4.addColorStop(0,"rgb(165,"+mouseColor3+130+",255)");
	grd4.addColorStop(mouseColor/200,"rgb(85,110,255)");
	grd4.addColorStop(mouseColor/300,"rgb(255,255,255");
	grd4.addColorStop(0.4,"rgb(150,"+mouseColor2+20+",235");
	grd4.addColorStop(1,"rgb(150,225,235");

	// var grd1=context.createLinearGradient(50,0,800,800);
	// grd1.addColorStop(0,"hsl(240,100%,100%)");
	// grd1.addColorStop(1,"hsl(240,100%,50%)");

	//DIAMOND DRAWING 

	//Top trapezoid
	context.beginPath();
	context.moveTo(125,75); 
	context.lineTo(675,75);
	context.lineTo(800,250);
	context.lineTo(0,250);
	context.lineTo(125,75);
	context.globalAlpha=0.5;
	context.fillStyle=grd1;
	context.fill();

	context.closePath();

	//Top triangle (down) 
	context.beginPath();
	context.moveTo(125,75);
	context.lineTo(675,75);
	context.lineTo(400,250);
	context.lineTo(125,75);
    context.globalCompositeOperation = "lighter";
	context.fillStyle=grd2;
	context.fill();
	context.closePath();

	//Top triangle (up) 
	context.beginPath();
	context.moveTo(50,250);
	context.lineTo(750,250);
	context.lineTo(400,75);
	context.lineTo(50,250);

	context.fillStyle=grd3;
	context.fill();
	context.closePath();

	//Bottom triangle in left third (left)
	context.beginPath();
	context.moveTo(0,250);
	context.lineTo(50,250);
	context.lineTo(45,300);
	context.lineTo(0,250);
	context.fillStyle=grd3;
	context.fill();

	context.closePath();

	//Bottom triangle in left third (right)
	context.beginPath();
	context.moveTo(50,250);
	context.lineTo(400,250);
	context.lineTo(275,380);
	context.lineTo(50,250);
	context.fillStyle=grd1;
	context.fill();
	context.closePath();


	//Bottom triangle in right third (left)
	context.beginPath();
	context.moveTo(750,250);
	context.lineTo(400,250);
	context.lineTo(525,380);
	context.lineTo(750,250);
	context.fillStyle=grd2;
	context.fill();
	context.closePath();

	//Bottom triangle in right third (right)
	context.beginPath();
	context.moveTo(800,250);
	context.lineTo(750,250);
	context.lineTo(755,300);
	context.lineTo(800,250);
	context.fillStyle=grd3;
	context.fill();
	context.closePath();

	//Bottom third (left) 
	context.beginPath();
	context.moveTo(0,250); 
	context.lineTo(225,250);
	context.lineTo(400,700);
	context.lineTo(0,250);
	context.fillStyle=grd1;
	context.fill();
	context.closePath();

	//Bottom third (center) 
	context.beginPath();
	context.moveTo(225,250); 
	context.lineTo(575,250);
	context.lineTo(400,700);
	context.lineTo(225,250);
	context.fillStyle=grd3;
	context.fill();
	context.closePath();

	//Bottom third (right)
	context.beginPath();
	context.moveTo(800,250); 
	context.lineTo(575,250);
	context.lineTo(400,700);
	context.lineTo(800,250);
	context.fillStyle=grd2;

	context.fill();
	context.closePath();

	// Bottom triangle 
	context.beginPath();
	context.moveTo(0,250); 
	context.lineTo(800,250);
	context.lineTo(400,700);
	context.lineTo(0,250);
	context.closePath();
	

	});



});