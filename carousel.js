var index = 1;
showSlide(index);

function plusSlide(n) {
    showSlide(index = index + n);
    // document.body.style.backgroundColor=rgba(0,0,1,0.8);
}

function currentSlide(n) {
    showSlide(index = n);
    // document.body.style.backgroundColor=rgba(0,0,1,0.8);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n < 1) {
        index = slide.length;
    }
    if (n > slide.length) {
        index = 1;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    
}

window.setInterval(function(){
    plusSlide(1);
},5000);
