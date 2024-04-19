//Q1 Write a program to find max number among two numbers passed in to a function, use ternary operator to find max number.

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let number1 = 10;
let number2 = 20;
let maxNumber = findMax(number1, number2);
console.log("The maximum number is:", maxNumber);
