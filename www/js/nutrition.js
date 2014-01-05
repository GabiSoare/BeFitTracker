

var table = document.getElementById('nutrition-table');
var add_new = document.getElementById('add-new');

var food_name = document.getElementById('food_name');
var protein = document.getElementById('protein');
var lipid = document.getElementById('lipid');
var carbo = document.getElementById('carbo');



function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS FOOD (desc, energ_kcal, protein, lipid, carbo)');
    tx.executeSql('INSERT INTO FOOD (desc, energ_kcal, protein, lipid, carbo) VALUES ("BUTTER,WITH SALT",717,0.85,81.11,0.06)');
}

// Transaction error callback
//
function errorCB(err) {
    alert("Error processing Food database: "+err.code);
}

// Transaction success callback
//
function successCB() {
	alert('Food has been inserted');
}
    
function addActivity(){
	
	if(protein.value == "" || lipid.value == "" || carbo.value == ""){
		alert("Fill in field");
		return;
	}
	
	//I must to save into DB;
    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(populateDB, errorCB, successCB);
	
	table.style.display = "block";
	add_new.style.display = 'none';
}

function addOption(){
	table.style.display = "none";
	add_new.style.display = 'block';
}


function dontSaveActivity(){
	food_name.value= protein.value = lipid.value = carbo.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';	
}