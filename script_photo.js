  <!-- product photo change function -->


            
            
var slideM13Index = 0;
showSlidesM13();

function showSlidesM13() {
let i;
let slidesM13 = document.getElementsByClassName("mySlidesM13");
let dotsM13 = document.getElementsByClassName("dotM13");
for (i = 0; i < slidesM13.length; i++) {
slidesM13[i].style.display = "none";  
}
slideM13Index++;
if (slideM13Index > slidesM13.length) {slideM13Index = 1}    
for (i = 0; i < dotsM13.length; i++) {
dotsM13[i].className = dotsM13[i].className.replace(" active", "");
}
slidesM13[slideM13Index-1].style.display = "block";  
dotsM13[slideM13Index-1].className += " active";
setTimeout(showSlidesM13, 2000); // Change image every 2 seconds
}

          
