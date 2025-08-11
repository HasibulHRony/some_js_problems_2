// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowest(array){
    let lowNum = array[0];
    for(let num of array){
        if(num<lowNum){
            lowNum = num;
        }
    }
    return lowNum;
}
const heights = [167, 190, 120, 165, 137];
const min = lowest(heights);
console.log("The lowest height is: ", min)