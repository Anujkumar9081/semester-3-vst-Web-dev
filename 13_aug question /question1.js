const os = require('os');

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total RAM (GB):", (os.totalmem() / 1024 ** 3).toFixed(2));
console.log("Free RAM (GB):", (os.freemem() / 1024 ** 3).toFixed(2));
console.log("System Uptime (hours):", (os.uptime() / 3600).toFixed(2));