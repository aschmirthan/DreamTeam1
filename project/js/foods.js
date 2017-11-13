let foods = [
  {
    name: "Tikka Tikka",
    img: "img/tikkatikka.jpg",
    /*Image credit: https://www.slowcookerclub.com/system/recipes/images/000/000/021/timeline/chicken-tikka-masala.jpg?1419352238*/
    description: "A delicious comination of deep fried chicken and sauce from the east.",
    price: 149,
    allergy: "Lactose",
    course: "Main Course",
    takeaway: true
  },
  {
    name: "Curry Wurry",
    img: "img/currywurry.jpg",
    /*Image credit: https://i.pinimg.com/736x/dc/5b/5c/dc5b5c78840fce588f8e22ea13132416--healthy-chicken-curry-chicken-curry-recipes.jpg*/
    description: "Chef Dao's own special twist on the traditional chicken curry.",
    price: 129,
    allergy: "No allergies",
    course: "Main Course",
    takeaway: true
  },
  {
    name: "Crispy Tenders",
    img: "img/chickentenders.jpg",
    /*Image credit: https://media3.s-nbcnews.com/i/newscms/2015_34/744981/cheesy-chicken-tenders-today-150821_fd2072a0bda06ee2d2b743caac2465f9.jpg*/
    description: "The crispiest chicken strips in town with a homemade dipping sauce.",
    price: 49,
    allergy: "Gluten",
    course: "Appetizer",
    takeaway: true
  },
  {
    name: "Ice Ice",
    img: "img/iceice.jpg",
    /*Image cradit: http://btulp.com/wp-content/uploads/2017/03/chocolate-ice-cream-9.jpg*/
    description: "Ice cold ice cream topped with chocolate sauce.",
    price: 79,
    allergy: "Lactose",
    course: "Dessert",
    takeaway: false
  },
  {
    name: "Sweet and Sour Chicken",
    img: "img/sweetnsour.jpg",
    /*Image credit: http://www.seriouseats.com/recipes/assets_c/2012/01/20120107-186707-sweet-and-sour-sauce-thumb-625xauto-210245.jpg*/
    description: "A mix of chicken and vegetables served with a delicous sweet and sour sauce.",
    price: 99,
    allergy: "Egg",
    course: "Main Course",
    takeaway: false
  },
  {
    name: "Kebab" ,
    img: "img/kebab.jpg" ,
    //https://www.google.no/search?q=eastern+food&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi0renU_rvXAhWBDZoKHV0kDsIQ_AUICigB&biw=1280&bih=614#imgrc=CyAEGbBD5Q5bdM:
    description: "Traditional kebab with a Dao twist. Seasoning of your choice.",
    price: 89 ,
    allergy: "Gluten",
    course: "Main Course",
    takeaway: true
  },
  {
    name: "Asian snack" ,
    img: "img/snack1.jpg" ,
    //https://www.google.no/search?q=eastern+food&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi0renU_rvXAhWBDZoKHV0kDsIQ_AUICigB&biw=1280&bih=614#imgrc=0RyBIAc9vRXrFM:
    description: "Simply asian snacks. Contains two samosas and two south indian pastries",
    price: 65 ,
    allergy: "Lactose",
    course: "Dessert",
    takeaway: true
  },
  {
    name: "RiceNChicken" ,
    img: "img/chickenRice.jpg" ,
    //https://www.google.no/search?q=eastern+food&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi0renU_rvXAhWBDZoKHV0kDsIQ_AUICigB&biw=1280&bih=614#imgrc=aDqPa8tzHt0z_M:
    description: "Want a taste of India? Spicy marinated chicken served with rice and beans",
    price: 199 ,
    allergy: "Nuts",
    course: "Main Course",
    takeaway: false
  },

  {
    name: "Meat ball"  ,
    img: "img/chop.jpg" ,
    //https://www.google.no/search?biw=1280&bih=565&tbm=isch&sa=1&ei=7cwJWoKMAvPe6QTSwIrQDA&q=eastern+appetizers&oq=eastern+appetizers&gs_l=psy-ab.3..0i5i30k1.217674.221307.0.221446.18.16.2.0.0.0.132.1398.14j2.16.0....0...1.1.64.psy-ab..0.17.1324...0j0i19k1j0i10i19k1j0i30i19k1j0i5i30i19k1j0i8i30i19k1.0.qg0-aiL2uHg#imgrc=02OwivPE6QN4LM:
    description: "Meat balls served with cucumber and seasond sour cream",
    price: 79 ,
    allergy: "No allergies",
    course: "Appetizer",
    takeaway: false
  }
];


let allergies = [{name: "Lactose", checks: false}, {name: "Nuts", checks: false },{name: "Gluten", checks: false},{name: "Egg", checks: false}];
let sortallergy = [];

let takeawaylist = [];
for(let food of foods){
    if(food.takeaway){
        takeawaylist.push(food);
    }
}
