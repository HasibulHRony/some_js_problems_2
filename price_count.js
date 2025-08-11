/**
 * total price count
 */
function priceCount(shirtQuantity, pantQuantity, panjabiQuantity) {
    const shirtUnitPrice = 750;
    const pantUnitPrice = 1250;
    const panjabiUnitPrice = 1850;
    const shirtTotalPrice = shirtUnitPrice * shirtQuantity;
    const pantTotalPrice = pantUnitPrice * pantQuantity;
    const panjabiTotalPrice = panjabiUnitPrice * panjabiQuantity;
    const total = shirtTotalPrice + pantTotalPrice + panjabiTotalPrice;
    return total;
}
let shirt = 3;
let pant = 4;
let panjabi = 3;
let totalPrice = priceCount(3, 4, 3)
console.log("Your total payable amount is: ", totalPrice)