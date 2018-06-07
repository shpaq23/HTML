// Next/previous controls
var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var ktore = document.getElementById("ktore");
					
  if (n > slides.length) {slideIndex = 1} 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 

  ktore.innerHTML = slideIndex + "/" + slides.length;
  

}


window.onload = function(){
        
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("files");
        
        filesInput.addEventListener("change", function(event)
		{
            
            var files = event.target.files; //FileList object
            var output = document.getElementById("result");
            
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i];
                
                //Only pics
                if(!file.type.match('image'))
                  continue;
                
                var picReader = new FileReader();
                
                picReader.addEventListener("load",function(event){
                    
                    var picFile = event.target;
                    
                    var div = document.createElement("div");
					div.className = "mySlides fade"
					var pom = document.getElementsByClassName("mySlides");
					div.style.display="none";
					var liczba = document.getElementById("liczba");
					liczba.innerHTML = pom.length+1;
					var ktore = document.getElementById("ktore");
					ktore.innerHTML = slideIndex + "/" + parseInt(pom.length+1);
					if(pom.length==0)
					{
						div.style.display= "block";
						
					}
					
                    
                    div.innerHTML = "<img src='" + picFile.result + "'" +"onclick = plusSlides(1)" + ">";
                    
                    output.insertBefore(div,null);            
                
                });
                
                 //Read the image
                picReader.readAsDataURL(file);
				
            }
			
		
			
					
        });
		
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}


