var loginpanel = document.getElementById("loginpanel");
var leftcol = document.getElementById("left-col");
var adminpanel = document.getElementById("adminpanel");
var p = document.getElementById("incorrect");

p.style.display = "none";

leftcol.style.display = "none";
adminpanel.style.display = "none";
loginpanel.style.display = "block";

var czy_zalogowany = 0;
var czy_dodane = 0;
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
		czy_zalogowany=1
		if(window.innerWidth<830)
		{
			myFunction(x);
			czy_dodane = 1;
		}
			
		
	}	
	else
	{
		p.style.color = "red";
		p.style.display="block";
	}
}




var zdjecia = document.getElementById("zdjecia");
var statystyki = document.getElementById("statystyki");

statystyki.style.display= "none";

function B1()
{
	statystyki.style.display = "none";
	zdjecia.removeAttribute("style");
}

function B2()
{
	
	zdjecia.style.display = "none";
	statystyki.removeAttribute("style");
	chart();
	
}


function chart()
{
	Highcharts.chart('chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
           
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
        }]
    }]
});
}

function myFunction(x)
{
	var menu = document.getElementById("menu");
	var li1 = document.createElement("li");
	var li2 = document.createElement("li");
	li1.setAttribute("class", "LA")
	li2.setAttribute("class", "LA")
	var a1 = document.createElement("a");
	var a2 = document.createElement("a");
	a1.appendChild(document.createTextNode("Zdjęcia"));
	a2.appendChild(document.createTextNode("Statystyki"));
	a1.href = "#h1";
	a2.href = "#h1";
	a1.setAttribute("onclick", "B1()");
	a2.setAttribute("onclick", "B2()");
	
	
	
    if (x.matches)
	{ // If media query matches
		if(czy_zalogowany==1 && czy_dodane == 0)
		{
			li1.appendChild(a1);
			li2.appendChild(a2);
			menu.insertBefore(li1, menu.children[4]);
			menu.insertBefore(li2, menu.children[5]);
			czy_dodane =1;
		}
    } 
	else 
	{
		if(czy_zalogowany ==1 && czy_dodane == 1)
		{
			
			$('.LA').remove();
			czy_dodane = 0;
			
			
		}
       
    }
}

var x = window.matchMedia("(max-width: 830px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes