const products = [
    {name: "Shirt", price: 750, quantity: 4},
    {name: "Pant", price: 1250, quantity: 3},
    {name: "Panjabi", price: 1750, quantity: 3},
]

function totalBill(products){
    let bills = 0;
    for(let product of products){
        const bill = product["price"]*product["quantity"];
        bills = bills + bill;
    }
    return bills;
}

const totalPrice = totalBill(products);
console.log("Total payable amount is: ", totalPrice)