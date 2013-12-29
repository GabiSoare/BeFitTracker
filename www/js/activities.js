
var totalOfActivies = 0;

var table = document.getElementById("activity-table");
var add_new = document.getElementById("add-new");


function loadActivities(){
	
}

function addActivity(){

	var input = document.getElementById("activityName");
	if(input.value == ""){
		alert("Fill in field");
		return;
	}

	var activityName = input.value;
	
	var row = table.insertRow(totalOfActivies);
	var cell = row.insertCell(0);
	cell.innerHTML  = activityName;
	cell.onclick = function(){alert(activityName)};
	//I must to save into DB;
	totalOfActivies ++;		
	input.value = "";
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
