 var db;
 var keySearch;
 var availableTags=[];
 var myCallback=null;
 var saveItem=0;
 var items="";
function loadMeals()
{
	keySearch = document.getElementById("search").value;
    db = openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
	$( "#search" ).autocomplete(
	{
        source: function(request, callback)
        {
            var searchParam  = request.term;
            init(searchParam, callback)
        },
	    select: function (event, ui) 
	    {
	         $('#search').val(ui.item.label); // display the selected text
	         $('#itemid').val(ui.item.id); // save selected id to hidden input

	         $('#Water').val(ui.item["waterg"]); 
	         $('#Energy').val(ui.item["energykcal"]); 
	         $('#Protein').val(ui.item["proteing"]); 
	         $('#Lipid').val(ui.item["lipidtotg"]); 
	         $('#Carbohydrt').val(ui.item["carbohydrtg"]); 
	         $('#Fiber').val(ui.item["fibertdg"]); 
	         $('#Sugar').val(ui.item["sugartotg"]); 
	         $('#Calcium').val(ui.item["calciummg"]); 
	         $('#Iron').val(ui.item["ironmg"]); 
	         $('#Magnesium').val(ui.item["magnesiummg"]); 
	         $('#Vit_C').val(ui.item["vitcmg"]); 
	         $('#FA_Mono').val(ui.item["fatmonog"]); 
	         $('#FA_Sat').val(ui.item["fatsatg"]); 
	         $('#FA_Poly').val(ui.item["fapolyg"]); 
	         $('#Cholestrl').val(ui.item["cholestrlmg"]); 
	         return false;
	     },
        minLength: 2
    });

}

function init(query,callback)
{
	myCallback=callback;
	keySearch=query;
	db.transaction(queryDB, errorCB,successDB);		

}
function queryDB(tx) 
{
	//tx.executeSql('CREATE TABLE IF NOT EXISTS Activities (desc)');
    tx.executeSql('SELECT * FROM FOOD WHERE Desc LIKE ?', [''+keySearch+'%'], querySuccess, errorCB);
}

function errorCB(err) 
{
    //alert("Error processing FOOD database: "+err.code);
}
function successDB(err) 
{
    //alert("Success processing FOOD database: ");
    console.log("successDB() " + myCallback);
    myCallback(availableTags);
}
// Query the success callback
//

function querySuccess(tx, results) 
{
    var len = results.rows.length;
	
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

		console.log("BUSCANDOOOOOOOOOOOO "+ results.rows.item(i).Desc);

		availableTags.push(display2);
    }

    console.log("enviando " + JSON.stringify(availableTags));

}

function saveThis()
{
	if (confirm('Are you sure you want to save this thing into the database?')) {
    // Save it!
    	items = localStorage.getItem("SAVE_ITEM") +","+$('#itemid').val();
    	localStorage.setItem("SAVE_ITEM",items);
    	//alert("aca " +localStorage.getItem("SAVE_ITEM"));
		window.location.href = "nutrition.html";
	} else {
	    // Do nothing!
	}
}