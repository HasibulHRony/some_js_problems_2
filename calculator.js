function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    let difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    let multi = num1 * num2;
    return multi;
}

function divided(num1, num2){
    let division = num1 / num2;
    return division;
}

function calculate(a, b, operation){
    if(operation === "add"){
        const summation = add(a, b);
        return summation;
    }
    else if(operation === "sub"){
        const diff = subtract(a, b)
        return diff;
    }
    else if(operation === "multi"){
        const mult = multiply(a, b);
        return mult;
    }
    else if(operation === "divi"){
        const division = divided(a, b);
        return division;
    }
    else{
        return "Please input a valid operation"
    }
}


let count = calculate(20, 5, "moduls");
console.log(count)