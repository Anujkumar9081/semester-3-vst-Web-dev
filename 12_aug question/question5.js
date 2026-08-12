const fs = require('fs');

fs.mkdirSync("myProject");

fs.writeFileSync("myProject/info.txt", "This is inside a folder");
const files = fs.readdirSync("myProject");
console.log(files);