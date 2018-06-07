var hintIndex = 1;
showHint(hintIndex);


function plusHint(n)
{
	showHint(hintIndex+= n);
}

function showHint(n)
{
	var i;
	var hint = document.getElementsByClassName("Hint")
	if(n > hint.length)
	{
		hintIndex = 1
	}
	if(n<1)
	{
		hintIndex = hint.length
	}
	for(i = 0; i<hint.length; i++)
	{
		hint[i].style.display = "none";
	}
	hint[hintIndex-1].style.display = "block";
	
}