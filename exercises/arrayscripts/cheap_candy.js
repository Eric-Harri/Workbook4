let productsArray = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

let lessThanFour = [];

for (let i = 0; i < productsArray.length; i++) {
    const prices = productsArray[i];

    if (prices.price < 4) {
        lessThanFour.push(prices.price)
    }
    
}

console.log(lessThanFour);

function searchCandy(products, name) {
    for (let i = 0; i < products.length; i++) { 
        const candy = products[i];
        if (candy.product.indexOf(name) !== -1) {
            console.log(candy.product);
        }
    }
}

searchCandy(productsArray, 'M&M'); 



