/*
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
*/

var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth; //The canvas uses the whole browser window
canvas.height = window.innerHeight;

//Center
var x = Math.round(window.innerWidth/2); 
var y = Math.round(window.innerHeight/2);

var a = x;
var b = y;

var sx = x*2;
var sy = y*2;

function draw() {
	
	//Variables with random values declatarion
	xnahoda = Math.round(Math.random());
	ynahoda = Math.round(Math.random());
	anahoda = Math.round(Math.random());
	bnahoda = Math.round(Math.random());

	//Drawing, which depends on previous code
	if (xnahoda == 1 && x > 0)
	{
		x = x - 1;
	}
	else
	{
		if (x < sx) 
		{
			x = x + 1;
		}
	}
	
	if (ynahoda == 1 && y > 0)
	{
		y = y - 1;
	} 
	else 
	{
		if (y < sy) 
		{
			y = y + 1;
		}
	}
	
	if (anahoda == 1) 
	{
		a = x + 1;
	} 
	else 
	{
		a = x - 1;
	}
	
	if (bnahoda == 1) 
	{
		b = y + 1;
	} 
	else 
	{
		b = y - 1;
	}

	var elem = document.getElementById('myCanvas');
	var context = elem.getContext('2d');
	
	//Color changing for fun
	context.strokeStyle = '#00f'
	if (ynahoda == 1 || xnahoda == 1) 
	{
		context.strokeStyle = '#0f0';
	}
	
	//Line render
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(a, b);
	context.stroke();

}

//Function of repeating every millisecond
function rep() 
{
	window.setInterval("draw()", 1);
}

//Repeating of repeating :-)
window.setInterval("rep()", 1);
