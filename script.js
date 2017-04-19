var subtotal = 0;
var total = 0;
var groceryList = [
  {
    name: "Bread",
    price: 1.89
  },
  {
    name: "Cheese",
    price: 1.25
  },
  {
    name: "Ice Cream",
    price: 3.00
  },
  {
    name: "Cookies",
    price: 3.10
  },
  {
    name: "Chips",
    price: 3.25
  },
  {
    name: "Milk",
    price: 2.08
  },
  {
    name: "Granola",
    price: 1.73
  },
  {
    name: "Soda",
    price: 4.25
  },
  {
    name: "Apple Jacks",
    price: 3.35
  },
  {
    name: "Two Hearted Ale",
    price: 9.97
  },
  ];
groceryList.forEach(function(i) {
  // if (groceryList.price === 0) {
  //   subtotal = i.price * 0.006;
  // }
  console.log(i.name);
  console.log(i.price);
  total += i.price;
});


console.log("Total is " +total.toFixed(2));



var title = document.createElement("H2");

var list = document.createElement("p");
title.innerText = "This is my grocery list";

document.body.appendChild(title);
document.body.appendChild(list)
