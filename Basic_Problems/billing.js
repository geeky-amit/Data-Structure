let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//let name = readLine();
//console.log("Hello " + name);

let unitPrice = parseInt(readLine());
let GST = parseInt(readLine());

let Price = unitPrice + unitPrice * (GST / 100);
console.log(Price);
