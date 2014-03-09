

var imgProfile  = document.getElementById("imgProfile");
var user = window.localStorage.getItem("Username");
var weight = window.localStorage.getItem("Mass");
var height = window.localStorage.getItem("Height");
var bmi = (parseInt(weight)/parseFloat(height*height)*10000).toFixed(2);

//save BMI 
window.localStorage.setItem("Bmi",bmi);

var user_name = document.getElementById("user_name");
document.getElementById("height").innerHTML = "H : "+height + "cm";
document.getElementById("weight").innerHTML = "W : "+weight + "kg";
document.getElementById("bmi").innerHTML= "BMI : "+bmi;
user_name.innerHTML = user;

var quote = document.getElementById("quote");
var gender = window.localStorage.getItem("Gender"); 

var quote_female = ["Squat like your ass depends on it!","Your body is a reflection of your lifestyle.","Good things come to those who sweat!","ABS are made in the kitchen.","Sore is the new sexy!"];
var quote_male = ["Be Strong. You never know who you're inspiring.","ABS are made in the kitchen.","Don't wish for it, work for it!","Ha! Obsession? It's called dedication.","Pain is weakness leaving your body."];

if(gender=="Male"){
 	quote.innerHTML = quote_male[Math.floor(Math.random()*quote_male.length)];
	imgProfile.src = "img/icons/male/"+window.localStorage.getItem("Icon")+".png";
}else{
	quote.innerHTML = quote_female[Math.floor(Math.random()*quote_female.length)];
	imgProfile.src = "img/icons/female/"+window.localStorage.getItem("Icon")+".png";
}

		