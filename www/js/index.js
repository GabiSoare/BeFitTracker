

    // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

	        	
	sup = document.getElementById("signup");    		
	var p = document.getElementById("p");
    var e_mail = window.localStorage.getItem("Email");
	var username = window.localStorage.getItem("Username");

		
	var atpos=e_mail.indexOf("@");
	var dotpos=e_mail.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e_mail.length)
	 {
	  sup.style.display="block";
	  p.style.display="none";

	 }else{
	 	var GOTOMAIN_FLAG = window.localStorage.getItem("GOTOMAIN_FLAG");
	 	if("1234" == GOTOMAIN_FLAG){
	 		window.location.href = "main.html";
	 	}else{
		 	sup.style.display="none";
		  	p.style.display="block";	 
	  		p.innerHTML = "Welcome here "+ username + "!<br><br> Do you like to download our Food Database? <br><a onclick='downloadDatabase()'>Yes</a> <a href='main.html' onclick='noDownloadDatabase()' rel='external' style='text-decoration:none; color: #506070'>No</a>";
	  	}	
	 }  
	
       
function downloadDatabase(){
	alert("acu`");
}        
    
function noDownloadDatabase(){
	alert("Las` ca revii tu");
	window.localStorage.setItem("GOTOMAIN_FLAG","1234");
}
        
function signup(){
   	var username = document.getElementById("username").value;
  	var email = document.getElementById("email").value;
   	var mass = document.getElementById("mass").value;
 	var height = document.getElementById("height").value;
	var gender = document.getElementById("gender").options[document.getElementById("gender").selectedIndex].text;
	    		
	if(username=="" || mass=="" || height==""){
  		alert("Please fill in all fields.");
    	return false;
    }

	var x = email;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	 {
	  alert("Not a valid Email Address");
	  return false;
	 }    	
	 
    if(gender=="Gender"){
    	alert("Please select your Gender.");
    	return false;    			
    }

	m = parseInt(mass);
	if(m<35 || m>170 || isNaN(m)){
    	alert("Please insert a valid Mass.");
    	return false;    				
	}
	
	h = parseInt(height);
	if(h<100 || h>260 || isNaN(h)){
    	alert("Please insert a valid Height.");
    	return false;    			
	}
	
    sendData(username,email,mass,height,gender);

}
        
function sendData(username,email,mass,height,gender)
{
	if (window.XMLHttpRequest)
	 {// code for IE7+, Firefox, Chrome, Opera, Safari
		 xmlhttp=new XMLHttpRequest();
	 }
	else
	 {// code for IE6, IE5
	     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }

	var signup = document.getElementById("signup"); 
	signup.style.display = "none";	
	var p = document.getElementById("p"); 
  	p.style.display="block";	 
	p.innerHTML = "Welcome here "+ username + "!<br><br> Do you like to download our Food Database? <br><a onclick='downloadDatabase()'>Yes</a> <a href='main.html' onclick='noDownloadDatabase()' rel='external' style='text-decoration:none; color: #506070'>No</a>";
	
    window.localStorage.setItem("Username", username);
    window.localStorage.setItem("Email", email);
    window.localStorage.setItem("Mass", mass);
    window.localStorage.setItem("Height", height);
	window.localStorage.setItem("Gender", gender);    

	xmlhttp.open("GET","http://embeddedsoft.ro/befit/getuser.php?username="+encodeURIComponent(username)+"&email="+encodeURIComponent(email)+"&mass="+encodeURIComponent(mass)+"&height="+encodeURIComponent(height)+"&gender="+encodeURIComponent(gender),true);
	xmlhttp.send();
}


// DOWNLOADEAZA IN BAZA DE DATE DACA USERUL APASA 'YES'





    // Populate the database 
    //
   function populateDB(tx) {
//        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS FOOD (id, desc, energ_kcal, protein, lipid, carbo)');
        tx.executeSql('INSERT INTO FOOD (id, desc) VALUES (1, "BUTTER,WITH SALT",717,0.85,81.11,0.06)');
        tx.executeSql('INSERT INTO FOOD (id, desc) VALUES (2, "APPLES,RAW,WITHOUT SKIN",48,0.27,0.13,12.76)');
   }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM FOOD', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        var txt = "";
        txt ="Food DB: " + len + " rows found.<br><br>";

        for (var i=0; i<len; i++){
           txt += "Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).desc + "<br>";
        }
        p.innerHTML = txt;
    }

    // Transaction error callback
    //
    function errorCB(err) {
        alert("Error processing Food database: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
        db.transaction(queryDB, errorCB);
    }

    // PhoneGap is ready
    //
    function onDeviceReady() {
    	p.innerHTML = "aka";
        var db = window.openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
        db.transaction(populateDB, errorCB, successCB);
        alert("da da");
    }

		