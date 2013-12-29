


var user = window.localStorage.getItem("Username");
var weight = window.localStorage.getItem("Mass");
var height = window.localStorage.getItem("Height");
var bmi = (parseInt(weight)/parseFloat(height*height)*10000).toFixed(2);

var user_name = document.getElementById("user_name");
document.getElementById("height").innerHTML = "H : "+height + "cm";
document.getElementById("weight").innerHTML = "W : "+weight + "kg";
document.getElementById("bmi").innerHTML= "BMI : "+bmi;
user_name.innerHTML = user;

//var td= document.getElementsByTagName("td")[1];
//td.style = 'background-color:#4B946A;';

