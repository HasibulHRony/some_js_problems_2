//Max number finding between two numbers using if else
const physicsMarks = 89;
const chemistryMarks = 95;
if(physicsMarks > chemistryMarks){
    console.log("Max number is in physics: ", physicsMarks)
}
else{
    console.log("Max number is in chemistry: ", chemistryMarks)
}

//max number among three numbers using if else
const mathMarks = 98;
const englishMarks = 56;
const banglaMarks = 89;
if(mathMarks>englishMarks && mathMarks>banglaMarks){
    console.log("You have gotten maximum numbers in Math: ", mathMarks)
}
else if(banglaMarks>mathMarks && banglaMarks>englishMarks){
    console.log("You have gotten maximum numbers in Bangla: ", banglaMarks);
}
else{
    console.log("You have gotten maximum numbers in English: ", englishMarks)
}



//max number among three numbers using function
function maxNum(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num3 && num2>num1){
        return num2;
    }
    else{
        return num3;
    }
}

const myAge = 25;
const fathersAge =63;
const mothersAge =43;
const max = maxNum(myAge, fathersAge, mothersAge);
console.log("Maximum age is: ", max)


//maximum numbers from an array
function maxNumOfArray(array){
    let temp = 0;
    for(let num of array){
        if(num > temp){
            temp = num;
        }
    }
    return temp;
}
const numArray = [41, 76, 56, 94, 85, 26, 2]
const maximumNum = maxNumOfArray(numArray)
console.log("Maximum number of this array is: ", maximumNum);


//maximum numbers using Math.max
let maxNumber = Math.max(9, 88, 59, 84, 25, 21, 36);
console.log("Maximum number is: ",maxNumber);