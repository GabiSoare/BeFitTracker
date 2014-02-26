
var table = document.getElementById('nutrition-table');
var add_new = document.getElementById('add-new');

var Desc = document.getElementById('Desc').value;
var Water = document.getElementById('Water').value;
var Energy = document.getElementById('Energy').value;
var Protein = document.getElementById('Protein').value;
var Lipid = document.getElementById('Lipid').value;
var Carbohydrt = document.getElementById('Carbohydrt').value;
var Fiber = document.getElementById('Fiber').value;
var Sugar = document.getElementById('Sugar').value;
var Calcium = document.getElementById('Calcium').value;
var Iron = document.getElementById('Iron').value;
var Magnesium = document.getElementById('Magnesium').value;
var Vit_C = document.getElementById('Vit_C').value;
var FA_Sat = document.getElementById('FA_Sat').value;
var FA_Mono = document.getElementById('FA_Mono').value;
var FA_Poly = document.getElementById('FA_Poly').value;
var Cholestrl = document.getElementById('Cholestrl').value;

var items= ["Desc","Water","Energy","Protein","Lipid","Carbohydrt","Fiber","Sugar","Calcium","Iron","Magnesium","Vit_C","FA_Sat","FA_Mono","FA_Poly","Cholestrl"];

var db_info = "`Desc`,`Water_(g)`,`Energ_Kcal`,`Protein_(g)`,`Lipid_Tot_(g)`,`Carbohydrt_(g)`,`Fiber_TD_(g)`,`Sugar_Tot_(g)`,`Calcium_(mg)`,`Iron_(mg)`,`Magnesium_(mg)`,`Vit_C_(mg)`,`FA_Sat_(g)`,`FA_Mono_(g)`,`FA_Poly_(g)`,`Cholestrl_(mg)`";

function clearInput(){
	for(var i=0;i<items.length;i++){
		document.getElementById(items[i]).value="";
	}
}

function populateDB(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS FOOD ("+db_info+")");
	tx.executeSql('INSERT INTO FOOD ('+db_info+') VALUES ("'+Desc+'","'+Water+'","'+Energy+'","'+Protein+'","'+Lipid+'","'+Carbohydrt+'","'+Fiber+'","'+Sugar+'","'+Calcium+'","'+Iron+'","'+Magnesium+'","'+Vit_C+'","'+FA_Sat+'","'+FA_Mono+'","'+FA_Poly+'","'+Cholestrl+'")');
	clearInput();
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
	clearInput();
	table.style.display = "block";
	add_new.style.display = 'none';	
}
