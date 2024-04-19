//Q2 Write a program to accept a number from user input and print whether the number is even or odd.

// Accepting user input
var number_ip = prompt("Enter a number: ");

// Converting user input to a number
let number = parseInt(userInput);

// Checking if the number is even or odd and printing the result
if (!isNaN(number)) {
    if(number % 2 == 0){
        console.log("The number", number, "is even.");
    }
    else{
        console.log("The number", number, "is odd.");
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
