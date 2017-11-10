var navbar = document.getElementById("heleMenybar");
var sticky = navbar.offsetTop;
var classSticky = document.getElementsByClassName('menyCss');
for(var i=0; i<classSticky.length;i++){
    classSticky[i].style.width = (navbar.style.width/5)-20;
}

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

let openedMenu = false;
function openMenu(){
    meny1 = document.getElementById('meny');
    if(!openedMenu){
        meny1.style.display = "block";
        openedMenu = true;
    }
    else{
        meny1.style.display = "none";
        openedMenu = false;
    }
}

function shownavbarIcon(x) {
    x.classList.toggle("change");
    openMenu();
}
window.onresize = function(){
    if(window.innerWidth>700){
        meny1.style.display = "block";
        openedMenu = false;
    }
    else{
        openedMenu = true;
        openMenu();
    }
}

//* reservation.js

let maxdate = new Date();
let maxdd = maxdate.getDate();
let maxmm = maxdate.getMonth()+1;
let maxyear = maxdate.getFullYear() + 1;
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
    maxdd = "0"+maxdd;
}
if(mm<10){
    mm='0'+mm
    maxmm = "0"+maxmm
}
today = yyyy+'-'+mm+'-'+dd;
maxdate = maxyear+'-'+ maxmm+'-'+maxdd;
document.getElementById("date").setAttribute("min", today);
document.getElementById("date").setAttribute("max", maxdate);

function alertReserve() {
    alert("Thank you for your reservation");
}
