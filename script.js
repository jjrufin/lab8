var newElement = document.createElement("div");
newElement.style.backgroundColor="blue";
newElement.style.height="800px";
newElement.style.width="600px";


document.body.appendChild(newElement);


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
groceryList.forEach(function(item) {
  // console.log(i.name + i.price);
  var itemName = document.createElement("p");
  itemName.innerText = item.name;
  var itemPrice = document.createElement("p");
  itemPrice.innerText = item.price;
  newElement.appendChild(itemName);
  newElement.appendChild(itemPrice);
  total += item.price;

  return total;
});


console.log("Total is " +total.toFixed(2));
