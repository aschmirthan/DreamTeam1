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
//Here are the variables for max reservation date
let maxdate = new Date();
let maxdd = maxdate.getDate();
let maxmm = maxdate.getMonth()+1;
let maxyear = maxdate.getFullYear() + 1;
//Here are the variables for minimun reservation date (today)
let today = new Date();
let toddd = today.getDate();
let todmm = today.getMonth()+1; //Here we add 1 because we only want max reservation 1 year from today
let todyear = today.getFullYear();
//If the date is below 10, a 0 is added before the number
if(toddd<10){
    toddd='0'+toddd
    maxdd = "0"+maxdd;
}
//If the month is below 10, a 0 is added before the number
if(todmm<10){
    todmm='0'+todmm
    maxmm = "0"+maxmm
}
//Put the other variables in the new date
today = todyear+'-'+todmm+'-'+toddd;
maxdate = maxyear+'-'+ maxmm+'-'+maxdd;
//Here we set the attributes min and max, to the today variable and maxdate variable
document.getElementById("date").setAttribute("min", today);
document.getElementById("date").setAttribute("max", maxdate);

function alertReserve() {
    alert("Thank you for your reservation");
}
