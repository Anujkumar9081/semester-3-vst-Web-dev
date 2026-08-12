const fs = require('fs');

fs.mkdirSync("data", { recursive: true });

fs.writeFileSync("data/notes.txt", "Note 1: Backend is fun");

fs.appendFileSync("data/notes.txt", "\nNote 2: fs module learned");
fs.appendFileSync("data/notes.txt", "\nNote 3: CRUD done");

const data = fs.readFileSync("data/notes.txt", "utf-8");
console.log(data);

const count = data.split("\n").length;
console.log("Total notes:", count);

fs.rmSync("data", { recursive: true });