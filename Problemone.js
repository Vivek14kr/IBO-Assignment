// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }


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

getUniqueProductCount();
function getUniqueProductCount() {
  let finalMap = {};
  let map = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    let char = listOfProducts[i].productName;

    if (map[char] == undefined) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }

  for (key in map) {
    finalMap[key] = map[key];
  }
  console.log(finalMap);
}
