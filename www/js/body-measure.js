

var bodyImg  = document.getElementById("bodyImg");
var bmi = parseFloat(window.localStorage.getItem("Bmi"));
var gender = window.localStorage.getItem("Gender");


if(gender=="Male"){
	if(bmi<18.5)
		bodyImg.src="img/body/male0.png";
	else if(bmi>18.5 && bmi<25)
		bodyImg.src="img/body/male1.png";
	else if(bmi>25)
		bodyImg.src="img/body/male3.png";	
}else{
	if(bmi<18.5)
		bodyImg.src="img/body/female0.png";
	else if(bmi>18.5 && bmi<25)
		bodyImg.src="img/body/female1.png";
	else if(bmi>25)
		bodyImg.src="img/body/female3.png";		
}

