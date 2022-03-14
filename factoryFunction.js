/**** Factory Function ****/

function CreateFruit(name, color, price) {
  const fruit = {
    name: name,
    color: color,
    price: `Rs.${price}/kg`,

    showDetails: function () {
      const { name, color, price } = this;
      console.log(`${name} is ${color} in color and is sold at ${price}.`);
    },
  };

  return fruit;
}

const fruit1 = CreateFruit("Mango", "red", 100);
const fruit2 = CreateFruit("Orange", "orange", 50);

fruit1.showDetails();
fruit2.showDetails();
