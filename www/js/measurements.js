
var user = window.localStorage.getItem("Username");
var weight = window.localStorage.getItem("Mass");
var height = window.localStorage.getItem("Height");
var bmi = (parseInt(weight)/parseFloat(height*height)*10000).toFixed(2);

var measure = document.getElementById("measure");

measure.innerHTML = "Weight : " + weight + "<br>Height : "+height +"<br>"; 

var table = document.getElementById("measure-table");
var add_new = document.getElementById("add-new");

var totalOfActivies = 1;

var input1 = document.getElementById("height");
var input2 = document.getElementById("weight");

function addActivity(){
	
	if(input1.value == "" || input2.value == ""){
		alert("Fill in field");
		return;
	}

	var height = input1.value;
	var weight = input2.value;
	
	var row = table.insertRow(totalOfActivies);
	var cell = row.insertCell(0);
	cell.innerHTML  = activityName;
	cell.onclick = function(){alert(activityName)};
	//I must to save into DB;
	totalOfActivies ++;		
	input1.value = "";
	input2.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';
}


function addOption(){
	table.style.display = "none";
	add_new.style.display = 'block';
}

function dontSaveActivity(){
	table.style.display = "block";
	add_new.style.display = 'none';	
}

function loadActivities(){
	
}