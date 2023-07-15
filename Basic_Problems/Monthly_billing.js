let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let angles = readLine();
let data1 = angles.split(" ");
let a = parseInt(data1[0]);
let b = parseInt(data1[1]);

let c = 180 - (a + b);
console.log(c);

let add = a + b;
let subtract = a - b;
let mul = a * b;

console.log(add);
console.log(subtract);
console.log(mul);
