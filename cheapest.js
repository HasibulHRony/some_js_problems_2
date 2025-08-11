const mobiles = [
    {brand: "Samsung", price: 55000, camera: "12mp", color: "black"},
    {brand: "Xiomi", price: 25000, camera: "12mp", color: "black"},
    {brand: "Iphone", price: 125000, camera: "12mp", color: "black"},
    {brand: "Htc", price: 25000, camera: "12mp", color: "black"},
    {brand: "Oppo", price: 20000, camera: "12mp", color: "black"},
    {brand: "Vivo", price: 35000, camera: "12mp", color: "black"},
]

function cheapestPhone(phones){
    let cheap = phones[0];
    for(let phone of phones){
        if(phone["price"]<cheap["price"]){
            cheap = phone;
        }
    }
    return cheap;
}

const myPhone = cheapestPhone(mobiles);
console.log("This is my Dam E Shosta mane valo phone specification: ", myPhone)