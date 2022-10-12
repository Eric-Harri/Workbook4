
function calculateSubtotal(lunch) {
    let subtotal = 0;
    for (let i = 0; i < lunch.length; i++) {
      const item = lunch[i];
      subtotal += item.price;
    }
    return subtotal;
}

function addTip(subtotal, tipPercentage) {
    let total = subtotal + subtotal * tipPercentage;
   return total; 
}

function calculateCheck(lunch, tipPercentage) {
    let subtotal = calculateSubtotal(lunch);
    let total = addTip(subtotal, tipPercentage);
    return total;
}

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

console.log(calculateCheck(lunch, 0.18).toFixed(2));