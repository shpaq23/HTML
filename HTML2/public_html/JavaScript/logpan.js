
var loginpanel = document.getElementById("loginpanel");
var leftcol = document.getElementById("left-col");
var adminpanel = document.getElementById("adminpanel");
var p = document.getElementById("incorrect");

p.style.display = "none";

leftcol.style.display = "none";
adminpanel.style.display = "none";
loginpanel.style.display = "block";


function login()
{
	
	var username = document.getElementById("uname");
	var pass = document.getElementById("psw");
	
	if(username.value == "admin" && pass.value == "admin")
	{
		adminpanel.removeAttribute("style");
		leftcol.removeAttribute("style");
		loginpanel.style.display = "none";
		p.style.display = "none";
		leftcol.classList.remove("sticky");
	}	
	else
	{
		p.style.color = "red";
		p.style.display="block";
	}
}


