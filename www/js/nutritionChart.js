
var divCanvas = document.getElementById("div-canvas");
var canvas = document.createElement('canvas');

canvas.id = 'canvas';
canvas.width = screen.width;
canvas.height = screen.height/1.5;
canvas.style = 'background-color:rgb(180,220,255)'; 
//screen.width
//screen.height;

divCanvas.appendChild(canvas);


		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(130,30,50,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(60,70,80,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]
			
		}

	var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);
	