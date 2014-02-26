
var table = document.getElementById('nutrition-table');
var add_new = document.getElementById('add-new');

var Desc = document.getElementById('Desc').value;
var Water = document.getElementById('Water').value;
var Energ = document.getElementById('Energ').value;
var Protein = document.getElementById('Protein').value;
var Lipid = document.getElementById('Lipid').value;
var Carbohydrt = document.getElementById('Carbohydrt').value;
var Fiber = document.getElementById('Fiber').value;



var db_info = "`Desc`,`Water_(g)`,`Energ_Kcal`,`Protein_(g)`,`Lipid_Tot_(g)`,`Carbohydrt_(g)`,`Fiber_TD_(g)`,`Sugar_Tot_(g)`,`Calcium_(mg)`,`Iron_(mg)`,`Magnesium_(mg)`,`Vit_C_(mg)`,`FA_Sat_(g)`,`FA_Mono_(g)`,`FA_Poly_(g)`,`Cholestrl_(mg)`";

function populateDB(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS FOOD ("+db_info+")");
	tx.executeSql('INSERT INTO FOOD ('+db_info+') VALUES ("'+Desc+'","'+Water+'","'+Energ+'","'+Protein+'","'+Lipid+'","'+Carbohydrt+'","'+Fiber+'","1","1","1","1","1","1","1","1","1")');

//	food_name.value= energy.value = protein.value = lipid.value = carbo.value = "";
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
//	food_name.value= energy.value = protein.value = lipid.value = carbo.value = "";
	table.style.display = "block";
	add_new.style.display = 'none';	
}
