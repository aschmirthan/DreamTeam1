/*This function runs through all the diiferent meals in the foods array(See foods.js) and appends them to the Menu.*/
        let appetizer = document.getElementById("appetizers");
        let maincourse = document.getElementById("mainCourse");
        let dessert = document.getElementById("desserts");

    function applyFood(list)  {
        appetizer.innerHTML = dessert.innerHTML = maincourse.innerHTML = "";
        for(let food of list) {
          let listElement = document.createElement("li");
          listElement.setAttribute("id", food.name);
          let header = document.createElement("h4");
          let desc = document.createElement("p");
          let price = document.createElement("p");
          let allergy = document.createElement("p");
          let image = document.createElement("div");
          listElement.style.height = "100%";
          let unordered;
          /*This loop checks which part of the menu this meal belongs to.*/
            if (food.course == "Appetizer") {
                unordered = document.getElementById("appetizers");
            } else if (food.course  ==  "Main Course") {
                unordered = document.getElementById("mainCourse");
            } else {
                unordered = document.getElementById("desserts");
            }

          image.style.backgroundImage = "url("+food.img+")";
          if(window.innerWidth<700){
              image.style.width = image.style.height = "150px";
          }
          else{
              image.style.width = image.style.height = "10vw";
          }

          header.style.width = "100%";
          header.style.height = "25%";
          desc.style.width = "100%";
          desc.style.height = "25%";
          price.innerText = food.price + "$";
          header.style.margin = desc.style.margin = "auto";
          header.innerText = food.name;
          image.setAttribute("class", "matrettBilde");
          desc.innerHTML = food.description;
          allergy.innerText = "Allergies: " + food.allergy;
          listElement.setAttribute("class", "rettCSS");
          listElement.appendChild(header);
          listElement.appendChild(desc);
          listElement.appendChild(image);
          listElement.appendChild(allergy);
          listElement.appendChild(price);


         if(list == takeawaylist){
           listElement.setAttribute("id", food.name);
           image.id = allergy.id = price.id = header.id = desc.id = listElement.id;
           listElement.addEventListener("click", addtoCart);
         }
          unordered.appendChild(listElement);
         function addtoCart(event){
        console.log(event.target.id);
        listElement.style.color = "blue";

    }
        }
    }
    applyFood(foods);
    window.onresize = function () {
        document.getElementById('appetizers').innerHTML = unordered = document.getElementById("mainCourse").innerHTML = document.getElementById('desserts').innerHTML = "";
        applyFood(foods);
    }

    let takeAway = document.getElementById("takeAway");
    let sjekker = true;

    takeAway.onclick  = function takeawayButton() {
        appetizer.innerHTML = dessert.innerHTML = maincourse.innerHTML = "";
        takeawaylist = [];
        if(sjekker){
            for(var food of foods){
                if(food.takeaway == true){
                    takeawaylist.push(food);
                    console.log(food);
                }
        }
            applyFood(takeawaylist);
            sjekker = false;
            document.getElementById("tittel").innerHTML = "Take-Away";
            document.getElementById("takeAway").innerHTML = "Menu";


        }
        else {
            applyFood(foods);
            sjekker = true;
            document.getElementById("tittel").innerHTML = "Menu";
            document.getElementById("takeAway").innerHTML = "Take-away";

        }
    }

    function allergier() {
        for(let allergi of allergies){
            let par = document.createElement("p");
            let textnode = document.createTextNode(allergi.name);
            let check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", allergi.name);
            check.addEventListener("click", sorting);
            check.style.marginLeft = "20px";
            par.appendChild(textnode);
            par.appendChild(check);
            document.getElementById("checkBox").appendChild(par);

        }
        }
sortallergy = foods;
    function sorting(event) {
        const target = event.target.id;
        for(let i = 0; i< allergies.length; i++){
            if(target == allergies[i].name){
                allergies[i].checks = !(allergies[i].checks);
            }
        }
        for(let j = 0; j<sortallergy.length; j++){
            for(let x = 0; x< allergies.length; x++){
                if(sortallergy[j].allergy === allergies[x].name && allergies[x].checks){
                    sortallergy.splice(j,1);
                }
            }
        }
        applyFood(sortallergy);
    }

    document.getElementById("showAll").onclick = function () {
        location.reload();
        applyFood(foods);
        console.log(foods);
    }




allergier();