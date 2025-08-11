function maxTall(array){
    let height = array[0]
    for(let num of array){
        if(num<height){
            height = num;
        }
    }
    return height;
}
let heights = [66, 62, 71, 68, 66, 64, 63]
let shortest = maxTall(heights);
console.log("The min height is: ", shortest)