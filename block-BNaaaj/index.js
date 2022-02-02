console.log("Welcome to Nodejs");
console.log(os.cpus);
console.log(process.freemem());
console.log(os.versions);
let fs = require("fs");
var buff1 = Buffer.alloc(12);
buff1.write("I am Pavan Bandichode");
console.log(buff1.toString());
