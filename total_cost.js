const products = [
    { name: "shampoo", price: 300 },
    { name: "soap", price: 50 },
    { name: "ciruni", price: 100 }
]

function totalBill(products) {
    let payAbleAmount = 0;
    for (let product of products) {
        payAbleAmount = payAbleAmount + product["price"];
    }
    return payAbleAmount;
}
let totalPrice = totalBill(products);
console.log("Your total price is: ", totalPrice);