

var slideIndex = [1,1,1,1,1,1];
var slideId = ["Slajd1", "Slajd2", "Slajd3", "Slajd4", "Slajd5", "Slajd6"]
var dotId = ["kropka1", "kropka2", "kropka3", "kropka4", "kropka5", "kropka6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);






// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}


function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  if (n > slides.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block"; 
  dots[slideIndex[no]-1].className += " active";
}