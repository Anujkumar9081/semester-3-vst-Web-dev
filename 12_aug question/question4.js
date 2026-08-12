const fs = require('fs');

fs.writeFileSync("demo.txt", "AAA");

let data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);

fs.writeFileSync("demo.txt", "BBB");            // write file update the full data
data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);

fs.appendFileSync("demo.txt", "CCC");     // append add at the end 
data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);