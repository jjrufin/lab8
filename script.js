var newElement = document.createElement("div");
var newElement2 = document.createElement("div");


document.body.appendChild(newElement);
document.body.appendChild(newElement2);
newElement.className = "div1";
newElement2.className = "div2";

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
  newElement2.appendChild(itemPrice);

  total += item.price;

  // function addItem (){
  //   document.getElementById('newitem').value +=
  //
  // }
  // function addPrice() {
  //   document.getElementById('newPrice').value
  //
  // }


});


var totalPrice = document.createElement('p');
totalPrice.innerText = total.toFixed(2);
newElement2.appendChild(totalPrice);





// console.log("Total is " +total.toFixed(2));
