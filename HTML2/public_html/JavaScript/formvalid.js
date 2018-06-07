

var v = document.getElementsByClassName("valid");
for(i=0; i < v.length; i++)
{
	v[i].style.display = "none";
}


function Valid() {
    
	var firstname, lastname, email, phone;
	firstname = document.getElementById("fname");
	lastname = document.getElementById("lname");
	email = document.getElementById("email");
	phone = document.getElementById("tel");
	msg = document.getElementById("kom");
	var ile = 0;
	
	var wzor = /^[a-zA-Z]+$/
	//imie 
	if(!wzor.test(firstname.value))
	{
		v[0].style.display = "block";
		firstname.style.backgroundColor = "#ffdddd";
	}
	else
	{
		v[0].style.display = "none";
		firstname.style.backgroundColor = "white";
		ile++;
	}
	// nazwisko
	if(!wzor.test(lastname.value))
	{
		v[1].style.display = "block";
		lastname.style.backgroundColor = "#ffdddd";
	}
	else
	{
		v[1].style.display = "none";
		lastname.style.backgroundColor = "white";
		ile++;
	}
	///email
	wzor = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!wzor.test(email.value))
	{
		v[2].style.display = "block";
		email.style.backgroundColor = "#ffdddd";
	}
	else
	{
		v[2].style.display = "none";
		email.style.backgroundColor = "White";
		ile++;
	}
	//telefon
	wzor = /^\d+$/;
	if(!(wzor.test(phone.value) && phone.value.length==9))
	{
		v[3].style.display = "block";
		phone.style.backgroundColor = "#ffdddd";
	}
	else
	{
		v[3].style.display = "none";
		phone.style.backgroundColor = "white";
		ile++;
	}
	//wiadomosc
	if(msg.value.length <1)
	{
		v[4].style.display = "block";
		msg.style.backgroundColor = "#ffdddd";
		
	}
	else
	{
		v[4].style.display = "none";
		msg.style.backgroundColor = "White";
		ile++;
		
	}
	
	if(ile==5)
	{
		alert("Wszystkie dane poprawne :)");
	}
	
   
}