let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = parseInt(readLine());

if (num === 0) {
  console.log("it is zero");
} else if (num % 2 === 0) {
  console.log("Give number is Even");
} else {
  console.log("Give number is odd");
}

let c = num % 10;
let div = parseInt(num / 10);
let b = div % 10;
let div2 = parseInt(div / 10);
let a = div2 % 10;

console.log(a);
console.log(b);
console.log(c);
