// Write a program that creates two arrays of numbers and returns a new array that contains the intersection
// of the two arrays (i.e. only the numbers that appear in both arrays) and print the results to console.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const intersection = arr1.filter(num => arr2.includes(num));

console.log("Intersection:", intersection);
