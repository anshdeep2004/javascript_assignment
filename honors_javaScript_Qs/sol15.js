// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError'
// when accessing a property of an undefined object.

try {
    // Trying to access a property of an undefined object
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    // Handling the 'TypeError' and printing a custom error message
    if (error instanceof TypeError) {
        console.log("Caught a TypeError: The property does not exist or the object is undefined.");
    } else {
        // If it's not a 'TypeError', rethrow the error
        throw error;
    }
}
