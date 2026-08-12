const fs = require('fs');

console.log("1. Start");

fs.readFile("welcome.txt", "utf-8", function(err, data) {
    console.log(data);
});

console.log("3. End");