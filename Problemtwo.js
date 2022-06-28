// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];


getUniqueProducts();

function getUniqueProducts() {
  let finalArr = [];
  let map = {};
  let sum = 0;
  for (let i = 0; i < listOfProducts.length; i++) {
    let char = listOfProducts[i].productName;
    sum = listOfProducts[i].quantity;

    if (map[char] == undefined) {
      map[char] = {
        productName: listOfProducts[i].productName,
        quantity: listOfProducts[i].quantity,
        description: listOfProducts[i].description,
      };
    } else {
      map[char] = {
        productName: listOfProducts[i].productName,
        quantity: map[char].quantity + listOfProducts[i].quantity,
        description: listOfProducts[i].description,
      };
    }
  }
  for (key in map) {
    finalArr.push(map[key]);
  }

  console.log(finalArr);
}