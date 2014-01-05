
var totalOfActivies = 0;
var table = document.getElementById("activity-table");
var add_new = document.getElementById("add-new");
var input = document.getElementById("activityName");


// Query the success callback
//
function querySuccess(tx, results) {
    var len = totalOfActivies = results.rows.length;
	
    for (var i=0; i<len; i++){
		var row = table.insertRow(i);
		var cell = row.insertCell(0);
		cell.innerHTML  = i;
		alert(i+ " : " +results.rows.item(i).desc);
    }
}

// Query the database
//
function queryDB(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS Activities (desc)');
    tx.executeSql('SELECT * FROM Activities', [], querySuccess, errorCB);
}

function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Activities (desc)');
    tx.executeSql('INSERT INTO Activities (desc) VALUES ("'+input.value+'")');
}
//    tx.executeSql('INSERT INTO FOOD (desc, energ_kcal, protein, lipid, carbo) VALUES ("'+food_name.value+'",'+parseFloat(energy.value)+','+parseFloat(protein.value)+','+parseFloat(lipid.value)+','+parseFloat(carbo.value)')');

// Transaction error callback
//
function errorCB(err) {
    alert("Error processing Activities database: "+err.code);
}

// Transaction success callback
//
function successCB() {
	alert('Activity has been inserted');
}

function loadActivities(){
    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(queryDB, errorCB);		

}

    
function addActivity(){
	
	if(input.value == ""){
		alert("Fill in field");
		return;
	}

	var row = table.insertRow(totalOfActivies);
	var cell = row.insertCell(0);
	cell.innerHTML  = input.value;
	cell.onclick = function(){alert(input.value)};

	totalOfActivies ++;	

    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(populateDB, errorCB, successCB);
    
	input.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';
}


function addOption(){
	table.style.display = "none";
	add_new.style.display = 'block';
}

function dontSaveActivity(){
	input.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';	
}
