/**** Constructor Function ****/

function Fruit(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = `Rs.${price}/kg`;
}

Fruit.prototype.showDetails = function () {
  const { name, color, price } = this;
  console.log(`${name} is ${color} in color and is sold at ${price}.`);
};

const fruit1 = new Fruit("Mango", "red", 100);
const fruit2 = new Fruit("Orange", "orange", 60);

fruit1.showDetails();
fruit2.showDetails();
