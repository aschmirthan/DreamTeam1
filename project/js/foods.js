let foods = [
  {
    name: "Tikka Tikka",
    img: "img/tikkatikka.jpg",
    /*Image credit: https://www.slowcookerclub.com/system/recipes/images/000/000/021/timeline/chicken-tikka-masala.jpg?1419352238*/
    description: "A delicious comination of deep fried chicken and sauce from the east.",
    price: 89,
    allergy: "Allergies: Lactose",
    course: "Main Course",
    takeaway: true
  },
  {
    name: "Curry Wurry",
    img: "img/currywurry.jpg",
    /*Image credit: https://i.pinimg.com/736x/dc/5b/5c/dc5b5c78840fce588f8e22ea13132416--healthy-chicken-curry-chicken-curry-recipes.jpg*/
    description: "Chef Dao's own special twist on the traditional chicken curry.",
    price: 79,
    allergy: "No allergies.",
    course: "Main Course",
    takeaway: true
  },
  {
    name: "Crispy Tenders",
    img: "img/chickentenders.jpg",
    /*Image credit: https://media3.s-nbcnews.com/i/newscms/2015_34/744981/cheesy-chicken-tenders-today-150821_fd2072a0bda06ee2d2b743caac2465f9.jpg*/
    description: "The crispiest chicken strips in town with a homemade dipping sauce.",
    price: 49,
    allergy: "Allergies: Gluten",
    course: "Appetizer",
    takeaway: true
  },
  {
    name: "Ice Ice",
    img: "img/iceice.jpg",
    /*Image cradit: http://btulp.com/wp-content/uploads/2017/03/chocolate-ice-cream-9.jpg*/
    description: "Ice cold ice cream topped with chocolate sauce.",
    price: 49,
    allergy: "Allergies: Lactose",
    course: "Dessert",
    takeaway: false
  },
  {
    name: "Sweet and Sour Chicken",
    img: "img/sweetnsour.jpg",
    /*Image credit: http://www.seriouseats.com/recipes/assets_c/2012/01/20120107-186707-sweet-and-sour-sauce-thumb-625xauto-210245.jpg*/
    description: "A mix of chicken and vegetables served with a delicous sweet and sour sauce.",
    price: 79,
    allergy: "No allergies.",
    course: "Main Course",
    takeaway: true
  },
];




let takeawaylist = [];
for(let food of foods){
    if(food.takeaway){
        takeawaylist.push(food);
    }
}


