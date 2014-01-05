

var table = document.getElementById('nutrition-table');
var add_new = document.getElementById('add-new');

var food_name = document.getElementById('food_name');
var energy = document.getElementById('energy');
var protein = document.getElementById('protein');
var lipid = document.getElementById('lipid');
var carbo = document.getElementById('carbo');


function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS FOOD (desc, energ_kcal, protein, lipid, carbo)');
    tx.executeSql('INSERT INTO FOOD (desc, energ_kcal, protein, lipid, carbo) VALUES ("'+food_name.value+'","'+energy.value+'","'+protein.value+'","'+lipid.value+'","'+carbo.value+'")');
}
//    tx.executeSql('INSERT INTO FOOD (desc, energ_kcal, protein, lipid, carbo) VALUES ("'+food_name.value+'",'+parseFloat(energy.value)+','+parseFloat(protein.value)+','+parseFloat(lipid.value)+','+parseFloat(carbo.value)')');

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
	
	if(food_name.value == "" || protein.value == "" || lipid.value == "" || energy.value == "" || carbo.value == ""){
		alert("Fill in field");
		return;
	}

	alert(parseFloat(energy.value)+parseFloat(protein.value));
    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(populateDB, errorCB, successCB);
	food_name.value= energy.value = protein.value = lipid.value = carbo.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';
}

function addOption(){
	table.style.display = "none";
	add_new.style.display = 'block';
}


function dontSaveActivity(){
	food_name.value= energy.value = protein.value = lipid.value = carbo.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';	
}