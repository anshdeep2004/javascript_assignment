const readline = require('readline');

const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur", "Mumbai"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a city name: ", function(userInput) {
    
    const index = cities.indexOf(userInput);

    if (index !== -1) {
        console.log(`Index of ${userInput}: ${index}`);
    } else {
        console.log("Not Found");
    }

    rl.close();
});
