const sopping = [
    { name: "shose", price: 2200,quintity:2 },
    { name: "shart", price: 1200,quintity:3 },
    { name: "pant", price:  1800,quintity:3 },
    { name: "clock", price: 2000,quintity:2 }

]
function totalSopping(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
const product = products[i];
const totalProducts = product.price * product.quintity
   sum = sum + totalProducts

    }
    return sum ;


}
const totalCost = totalSopping(sopping)
console.log('Total cost in sopping:',totalCost)
