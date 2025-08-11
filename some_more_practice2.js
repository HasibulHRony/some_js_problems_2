// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function lowestLength(array){
    let lowestLength = array[0];
    for(let name of array){
        if(name.length<lowestLength.length){
            lowestLength = name;
        }
    }
    return lowestLength;
}


let friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let lowestText = lowestLength(friends);
console.log("The lowest name is: ",lowestText)