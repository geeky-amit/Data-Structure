console.log("Hello World!");

let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let price = parseInt(readLine());
let discount = parseInt(readLine());

let discountedPrice = price - (price * discount) / 100;

console.log(discountedPrice);
