
    // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
     
    }

	        
		sup = document.getElementById("signup");    		
	
    	var p = document.getElementById("p");
    	var e_mail = window.localStorage.getItem("Email");

	var atpos=e_mail.indexOf("@");
	var dotpos=e_mail.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e_mail.length)
	 {
	  sup.style.display="block";
	  p.style.display="none";

	 }else{
	  sup.style.display="none";
	  p.style.display="block";	 
	  p.innerHTML = e_mail;	
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
	p.style.display = "block";	
	p.innerHTML = "Welcome "+username+ " "+email+" "+mass+" "+height+" "+gender;	
	
    window.localStorage.setItem("Username", username);
    window.localStorage.setItem("Email", email);
    window.localStorage.setItem("Mass", mass);
    window.localStorage.setItem("Height", height);
	window.localStorage.setItem("Gender", gender);    

	xmlhttp.open("GET","http://embeddedsoft.ro/befit/getuser.php?username="+encodeURIComponent(username)+"&email="+encodeURIComponent(email)+"&mass="+encodeURIComponent(mass)+"&height="+encodeURIComponent(height)+"&gender="+encodeURIComponent(gender),true);
	xmlhttp.send();
}
		