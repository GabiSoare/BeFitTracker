
var basicTable = document.getElementById("basicTable");
var table = document.getElementById("measure-table");
var add_new = document.getElementById("add-new");

var input1 = document.getElementById("weight");
var input2 = document.getElementById("bodyfat");

function addBasicMeasurements(){
	
	if(input1.value == "" || input2.value == ""){
		alert("Fill in the all fields");
		return;
	}
	m = parseInt(input1.value);
	bf = parseInt(input2.value);

	if(m<35 || m>200 || isNaN(m)){
    	alert("Please insert a valid Mass.");
    	return false;    				
	}	
	if(bf<1 || bf>60 || isNaN(m)){
    	alert("Please insert a valid Body fat.");
    	return false;    				
	}		
	//Add to table
	var row = basicTable.insertRow(1);
	var cell = row.insertCell(0);
	cell.innerHTML  = input1.value;
	cell = row.insertCell(1);
	cell.innerHTML  = input2.value;
	cell = row.insertCell(2);
	cell.innerHTML  = getDate();

	window.localStorage.setItem("Mass", input1.value);
	//I must to save into DB;
    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(populateDB, errorCB, successCB);	
	table.style.display = "block";
	basicTable.style.display = "block";
	add_new.style.display = 'none';

}

function getDate(){
	//Get Current Date
	var currentdate = new Date(); 
	return date = currentdate.getDate()+"-"+ (currentdate.getMonth()+1)+ "-" + currentdate.getFullYear();
}

function addOption(){
	table.style.display = "none";
	basicTable.style.display = "none";
	add_new.style.display = 'block';
}

function dontSaveBasicMeasurements(){
	basicTable.style.display = "block";
	table.style.display = "block";
	add_new.style.display = 'none';	
}


function queryDB(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS BASICMEASUREMENTS (weight, bodyfat, date)');
    tx.executeSql('SELECT * FROM BASICMEASUREMENTS', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var len = results.rows.length;
//	alert(len);
    for (var i=0; i<len; i++){
		var row = basicTable.insertRow(i+1);
		var cell = row.insertCell(0);
		cell.innerHTML  = results.rows.item(len-1-i).weight;
		var cell = row.insertCell(1);
		cell.innerHTML  = results.rows.item(len-1-i).bodyfat;
		var cell = row.insertCell(2);
		cell.innerHTML  = results.rows.item(len-1-i).date;		
		
//		alert(results.rows.item(len-1-i).weight+results.rows.item(len-1-i).bodyfat+results.rows.item(len-1-i).date);
    }
}

function loadBasicMeasurements(){
    var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    db.transaction(queryDB, errorCB);		
}


    // Populate the database 
    //
   function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS BASICMEASUREMENTS (weight, bodyfat, date)');
        tx.executeSql('INSERT INTO BASICMEASUREMENTS (weight, bodyfat, date) VALUES ("'+input1.value+'","'+input2.value+'","'+getDate()+'")');
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
//		alert("Succes");
    }