
var table = document.getElementById('nutrition-table');
var add_new = document.getElementById('add-new');



var items= ["Desc","Water","Energy","Protein","Lipid","Carbohydrt","Fiber","Sugar","Calcium","Iron","Magnesium","Vit_C","FA_Sat","FA_Mono","FA_Poly","Cholestrl"];

var db_info = "`Desc`,`Water_(g)`,`Energ_Kcal`,`Protein_(g)`,`Lipid_Tot_(g)`,`Carbohydrt_(g)`,`Fiber_TD_(g)`,`Sugar_Tot_(g)`,`Calcium_(mg)`,`Iron_(mg)`,`Magnesium_(mg)`,`Vit_C_(mg)`,`FA_Sat_(g)`,`FA_Mono_(g)`,`FA_Poly_(g)`,`Cholestrl_(mg)`";
 var db;
 var keySearch="";
 var each;
function clearInput(){
	for(var i=0;i<items.length;i++){
		document.getElementById(items[i]).value="";
	}
}

function queryDB(tx) 
{
	for  (i=0;i<each.length;i++){
			keySearch = each[i];
			console.log ("Recover from DB "+each[i]);
			tx.executeSql('SELECT * FROM FOOD WHERE ID=?', [''+keySearch+''], querySuccess, errorCB);
	}
	//tx.executeSql('CREATE TABLE IF NOT EXISTS Activities (desc)');
}

// Transaction error callback
//
function errorCB(err) {
    alert("Error processing Food database: "+err.code);
}

// Transaction success callback
//
function successCB() {
	console.log('Food has been inserted');
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

function adderMeals(){
	window.location.href = "addermeals.html";
}

function dontAddFood(){
	clearInput();
	table.style.display = "block";
	add_new.style.display = 'none';	
}
function getSaved(){
	db = openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
	var savedItem =  window.localStorage.getItem("SAVE_ITEM");
	each = savedItem.split(",");

	db.transaction(queryDB, errorCB,successCB);	

}

function querySuccess(tx, results) 
{
    var len = results.rows.length;
	if(len<1)
	return;
	availableTags=[];
    for (var i=0; i<len; i++)
    {
		var display2 = {};
		display2["label"] = results.rows.item(i).ID + " - " +results.rows.item(i).Desc;
		display2["value"] = results.rows.item(i).Desc;
		display2["id"] = results.rows.item(i).ID;
		display2["waterg"] = results.rows.item(i)["Water_(g)"];
		display2["energykcal"] = results.rows.item(i)["Energ_Kcal"];
		display2["proteing"] = results.rows.item(i)["Protein_(g)"];
		display2["lipidtotg"] = results.rows.item(i)["Lipid_Tot_(g)"];
		display2["carbohydrtg"] = results.rows.item(i)["Carbohydrt_(g)"];
		display2["fibertdg"] = results.rows.item(i)["Fiber_TD_(g)"];
		display2["sugartotg"] = results.rows.item(i)["Sugar_Tot_(g)"];
		display2["calciummg"] = results.rows.item(i)["Calcium_(mg)"];
		display2["ironmg"] = results.rows.item(i)["Iron_(mg)"];
		display2["magnesiummg"] = results.rows.item(i)["Magnesium_(mg)"];
		display2["vitcmg"] = results.rows.item(i)["Vit_C_(mg)"];
		display2["fatsatg"] = results.rows.item(i)["FA_Sat_(g)"];
		display2["fatmonog"] = results.rows.item(i)["FA_Mono_(g)"];
		display2["fapolyg"] = results.rows.item(i)["FA_Poly_(g)"];
		display2["cholestrlmg"] = results.rows.item(i)["Cholestrl_(mg)"];

		$('#idDate').append("<div>"+getToday()+"</div>");
		$('#Energy').append("<div>"+results.rows.item(i)["Energ_Kcal"]+"</div>");
		$('#Protein').append("<div>"+results.rows.item(i)["Protein_(g)"]+"</div>");
		$('#Lipid').append("<div>"+results.rows.item(i)["Lipid_Tot_(g)"]+"</div>");
		$('#Carbohydrt').append("<div>"+results.rows.item(i)["Carbohydrt_(g)"]+"</div>");
		console.log("RECUPERANDOOOOOOO1 "+ results.rows.item(i).Desc);
		console.log("RECUPERANDOOOOOOO2 "+ results.rows.item(i).ID);
		availableTags.push(display2);
    }

    //console.log("enviando " + JSON.stringify(availableTags));

}

function getToday(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
		    dd='0'+dd
		} 

		if(mm<10) {
		    mm='0'+mm
		} 

		today = mm+'/'+dd+'/'+yyyy;
		return today;
}