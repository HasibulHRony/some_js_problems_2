function layerDiscount(quantity){
    const first100UnitPrice = 100;
    const second100UnitPrice = 90;
    const above200UnitPrice = 70;
    if(quantity <= 100){
        const total = first100UnitPrice * quantity;
        return total;
    }
    else if(quantity<=200){
        const first100Price = 100 * first100UnitPrice;
        const remainingQuantity = quantity - 100;
        const remainingPrice = second100UnitPrice * remainingQuantity;
        const total = first100Price + remainingPrice;
        return total;
    }
    else{
        const first100Price = 100 * first100UnitPrice;
        const second100Price = 100 * second100UnitPrice;
        const remainingQuantity = quantity - 200;
        const remainingPrice = remainingQuantity * above200UnitPrice;
        const total = first100Price + second100Price + remainingPrice;
        return total;
    }
}

const discountedPrice = layerDiscount(250);
console.log("Total discounted price is: ", discountedPrice)