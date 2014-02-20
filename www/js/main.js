

var imgProfile  = document.getElementById("imgProfile");
var user = window.localStorage.getItem("Username");
var weight = window.localStorage.getItem("Mass");
var height = window.localStorage.getItem("Height");
var bmi = (parseInt(weight)/parseFloat(height*height)*10000).toFixed(2);

var user_name = document.getElementById("user_name");
document.getElementById("height").innerHTML = "H : "+height + "cm";
document.getElementById("weight").innerHTML = "W : "+weight + "kg";
document.getElementById("bmi").innerHTML= "BMI : "+bmi;
user_name.innerHTML = user;

var quote = document.getElementById("quote");
var gender = window.localStorage.getItem("Gender"); 

var quote_female = ["1","2","3","4","5"];
var quote_male = ["1","2","3","4","5"];

if(gender=="Male"){
 	quote.innerHTML = quote_male[Math.floor(Math.random()*quote_male.length)];
	imgProfile.src = "img/icons/male/"+window.localStorage.getItem("Icon")+".png";
}else{
	quote.innerHTML = quote_female[Math.floor(Math.random()*quote_female.length)];
	imgProfile.src = "img/icons/female/"+window.localStorage.getItem("Icon")+".png";
}

		