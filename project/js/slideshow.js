//funker med id ="slide"
const slidelist = ["slide0.png", "slide1.png","slide2.jpg","slide3.jpg", "slide10.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg", "slide8.jpg", "slide9.jpg"];
var sIndex = 0;
var slide = document.getElementById("slide");

//functions which maintains the slideshow
function slideshowAuto(){
    sIndex +=1;
    if (sIndex > slidelist.length - 1){
        sIndex = 0;
    }
    slide.style.opacity = 0;
    title.style.color = "gold";
    setTimeout('slideRun()',3000);
}
function slideRun(){
    slide.src="img/"+slidelist[sIndex];
    slide.style.opacity = 1;
    title.style.color = "white";
    setTimeout('slideshowAuto()',3000);
}
slideshowAuto();
//change slide with the arrows
//We got this idea from another site http://junctionmoama.com.au/, but the javascript code we made ourself
document.getElementById("next").onclick = function Next(){
        sIndex+=1;
        if (sIndex > slidelist.length - 1){
            sIndex = 0;
        }
    console.log(slidelist[sIndex]);
    slide.src="img/"+slidelist[sIndex];
}

document.getElementById("prev").onclick = function Prev(){
        sIndex-=1;
        if (sIndex < 0){
            sIndex = (slidelist.length-1);
        }
    console.log(slidelist[sIndex]);
    slide.src="img/"+slidelist[sIndex];
}
