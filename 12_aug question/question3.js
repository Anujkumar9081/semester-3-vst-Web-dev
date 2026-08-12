const fs = require('fs');

fs.writeFileSync("q3" , "learn node");

const data = fs.readFileSync("/Users/anujkumar9081/semester-3-vst-Web-dev/12_aug question/q3" , "utf-8");

console.log(data);

fs.appendFileSync( "q3", "Learn fs module");

const data1 = fs.readFileSync("/Users/anujkumar9081/semester-3-vst-Web-dev/12_aug question/q3" , "utf-8")

console.log(data1);
