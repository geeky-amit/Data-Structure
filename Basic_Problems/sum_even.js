let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = parseInt(readLine());

let sum = 0;

for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}

if (sum % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

console.log(sum);
