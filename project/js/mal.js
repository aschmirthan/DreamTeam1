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
        let meny1 = document.getElementById('meny');
        function openMenu(){


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
                changeMenu();
        }

        function changeMenu() {
            if(window.innerWidth>700){
                meny1.style.display = "block";
                openedMenu = false;
            }
            else{
                openedMenu = true;
                openMenu();
            }
        }