/funker med id ="slide"


const slidelist = ["slide1.png","slide2.png","slide3.png"];
var sIndex = 0;
var slide = document.getElementById("slide");

function slideshowAuto(){
    if (sIndex > slidelist.length - 1){
        sIndex = 0;
    }
    slide.src="img/"+slidelist[sIndex];
    sIndex +=1;
}
function slideRun(){
    setInterval(function(){slideshowAuto()},5000);
}
function changeClick(number){
    sIndex +=number;

    slide.src="img/"+slidelist[sIndex];
}

slideRun();
slide.onclick = function(evt){
    x = evt.clientX;
    if(x<slide.width/2){
        sIndex-=1;
        if (sIndex < 0){
            sIndex = slidelist.lenght;
        }
        }
    else{
        sIndex+=1;
        if (sIndex > slidelist.length - 1){
            sIndex = 0;
        }
    }
    slide.src="img/"+slidelist[sIndex];
}
