// Write a program to create an array of 10 string, create a function that returns longest string from the array.

const stringsArray = ["C", "JAVA", "python", "javascript", "PHP", "mongodb", "mern", "OOP", "DSA", "DAA"];

let longestString = "";
    for (let i = 0; i < stringsArray.length; i++) {
        if (stringsArray[i].length > longestString.length) {
            longestString = stringsArray[i];
        }
    }

console.log("Longest string:", longestString);

