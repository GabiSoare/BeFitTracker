

var table = document.getElementById("measure-table");
var add_new = document.getElementById("add-new");

var totalOfActivies = 1;

var input1 = document.getElementById("weight");
var input2 = document.getElementById("bodyfat");

function addActivity(){
	var currentdate = new Date(); 
	
	if(input1.value == "" || input2.value == ""){
		alert("Fill in field");
		return;
	}
	//Add to table
	var row = table.insertRow(2);
	var cell = row.insertCell(0);
	cell.innerHTML  = input1.value;
	cell.onclick = function(){alert(input1.value)};
	cell = row.insertCell(1);
	cell.innerHTML  = input2.value;
	cell.onclick = function(){alert(input2.value)};

	window.localStorage.setItem("Mass", input1.value);
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
	table.style.display = "block";
	add_new.style.display = 'none';	
}

function loadActivities(){
	
}


    // Populate the database 
    //
   function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS BASICMEASUREMENTS (weight, bodyfat, date)');
        tx.executeSql('INSERT INTO BASICMEASUREMENTS (weight, bodyfat, date) VALUES ("'+input1.value+'","'+input2.value+'",0.85)');
		input1.value = "";
		input2.value = "";        
   }


    // Transaction error callback
    //
    function errorCB(err) {
        alert("Error processing BASICMEASUREMENTS database: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
		alert("Succes");
    }