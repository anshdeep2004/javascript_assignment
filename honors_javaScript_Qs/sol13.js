// Write a program that creates an array of numbers and returns a new array that contains
// only the unique numbers using reduce function.

function getUniqueNumbers(arr) {
    return arr.reduce((accumulator, currentValue) => {
        // check wether the number is already taken and is not repeated.
        if(!accumulator.includes(currentValue)){
            // if it is not repeated then add it to the set of unique values.
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const uniqueNumbers = getUniqueNumbers(numbers);

console.log("Unique Numbers:", uniqueNumbers);