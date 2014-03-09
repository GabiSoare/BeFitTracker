

    // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);
	$('#yes').hide();
	$('#no').hide();
	        	
	sup = document.getElementById("signup");    		
	var p = document.getElementById("p");
    var e_mail = window.localStorage.getItem("Email");
	var username = window.localStorage.getItem("Username");
	var welcomeUser = document.getElementById("welcomeUser");
	//If not Zero then Database has been downloadded
	var qtyRows=0;
		
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
			welcomeUser.innerHTML = "Welcome here "+ username + "!<br> Download our Food Database?";
			$('#yes').show();
			$('#no').show();			
			p.style.display="block";	 
	  	}	
	 }  
	
       
function downloadDatabase(){
	window.location.href = "loadfood.html";
}        
    
function noDownloadDatabase(){
	window.localStorage.setItem("GOTOMAIN_FLAG","1234");
	window.location.href = "main.html";	
}
        
function signup(){
   	var username = document.getElementById("username").value;
  	var pass = document.getElementById("pass").value;
	var pass1 = document.getElementById("pass1").value;
	var email = document.getElementById("email").value;
   	var mass = document.getElementById("mass").value;
 	var height = document.getElementById("height").value;
	var gender = document.getElementById("gender").options[document.getElementById("gender").selectedIndex].text;
	    		
	if(username=="" || mass=="" || height=="" || pass==""){
  		alert("Please fill in all fields.");
    	return false;
    }

	if(pass!=pass1){
		alert("The password doesn't match");
		return false;
	}

	if(pass.length<=3){
		alert("The password is too small");
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
	if(m<35 || m>200 || isNaN(m)){
    	alert("Please insert a valid Weight.");
    	return false;    				
	}
	
	h = parseInt(height);
	if(h<100 || h>260 || isNaN(h)){
    	alert("Please insert a valid Height.");
    	return false;    			
	}

//Get RANDOM Icon and store it for the user 
	var numberOfIcons = 5;
	if(gender=="Male")
		window.localStorage.setItem("Icon", "male"+parseInt(Math.random()*numberOfIcons));
	else
		window.localStorage.setItem("Icon", "female"+parseInt(Math.random()*numberOfIcons));
	
	
    sendData(username,pass,email,mass,height,gender);

}
        
function sendData(username,pass,email,mass,height,gender)
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
	welcomeUser.innerHTML = "Welcome here "+ username + "!<br> Download our Food Database?";
	$('#yes').show();
	$('#no').show();	
  	p.style.display="block";	
	
    window.localStorage.setItem("Username", username);
    window.localStorage.setItem("Password", pass);
	window.localStorage.setItem("Email", email);
    window.localStorage.setItem("Mass", mass);
    window.localStorage.setItem("Height", height);
	window.localStorage.setItem("Gender", gender);    

	xmlhttp.open("GET","http://embeddedsoft.ro/befit/getuser.php?username="+encodeURIComponent(username)+"&pass="+encodeURIComponent(pass)+"&email="+encodeURIComponent(email)+"&mass="+encodeURIComponent(mass)+"&height="+encodeURIComponent(height)+"&gender="+encodeURIComponent(gender),true);
	xmlhttp.send();
}


    // PhoneGap is ready
    //
    function onDeviceReady() {

    	//This not will create anything only is for Query purposes. And extract if Data must
    	//to be downladed. Really loadfood.js will create Tables.
    	var db = openDatabase("AllData", "1.0", "AllDataDisplay", 100000);
    	db.transaction(populateDB, errorCB, successCB);
    	function populateDB(tx) {

    	}

    	function errorCB(err) {
    		console.log("Error processing SQL: " + err.code);
    	}	

    	function successCB() {
    		console.log("success!");
    		db.transaction(queryI, errorI);
    	}
    	function queryI(tx) {
					// tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
					tx.executeSql('SELECT * FROM FOODS',[],querySuccess,errorCB);

	        		//console.log("Completed : " + offset);
	        	}
	        	function errorI(err) {
	        		alert(err.code);
	        		console.log("Error processing SQL: " + err.code);
	        	}	
	        	function querySuccess(tx,results) {
	        		var len = results.rows.length;
	        		qtyRows = len;
	        		console.log("FOODS table: " + len + " rows found.");
	        		for (var i=0; i<len; i++){
	        			console.log("Row = " + i + " ID = " + results.rows.item(i) + " Data =  " + results.rows.item(i).data);
	        		}	    			
	        	}
	        }

