
var table = document.getElementById('nutrition-table');
var add_new = document.getElementById('add-new');

var food_name = document.getElementById('food_name');
var energy = document.getElementById('energy');
var protein = document.getElementById('protein');
var lipid = document.getElementById('lipid');
var carbo = document.getElementById('carbo');

//VALUES ("'+food_name.value+'","'+energy.value+'","'+protein.value+'","'+lipid.value+'""'+energy.value+'","'+protein.value+'","'+lipid.value+'""'+energy.value+'","'+protein.value+'","'+lipid.value+'""'+energy.value+'","'+protein.value+'","'+lipid.value+'""'+energy.value+'","'+protein.value+'","'+lipid.value+'")
var db_info = "`Desc`,`Water_(g)`,`Energ_Kcal`,`Protein_(g)`,`Lipid_Tot_(g)`,`Carbohydrt_(g)`,`Fiber_TD_(g)`,`Sugar_Tot_(g)`,`Calcium_(mg)`,`Iron_(mg)`,`Magnesium_(mg)`,`Vit_C_(mg)`,`FA_Sat_(g)`,`FA_Mono_(g)`,`FA_Poly_(g)`,`Cholestrl_(mg)`";

function populateDB(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS FOOD ("+db_info+")");
	tx.executeSql('INSERT INTO FOOD ('+db_info+') VALUES ("1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1")');
alert("a");
	food_name.value= energy.value = protein.value = lipid.value = carbo.value = "";
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
    
function addFood(){
	
	if(food_name.value == "" || protein.value == "" || lipid.value == "" || energy.value == "" || carbo.value == ""){
		alert("Fill in field");
		return;
	}

    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(populateDB, errorCB, successCB);
	
	table.style.display = "block";
	add_new.style.display = 'none';
}

function addOption(){
	table.style.display = "none";
	add_new.style.display = 'block';
}


function dontAddFood(){
	food_name.value= energy.value = protein.value = lipid.value = carbo.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';	
}
