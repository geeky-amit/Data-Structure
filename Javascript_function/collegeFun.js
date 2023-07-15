let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function sumOfDivisors(n) {
  //Code here
  let sum = 0;
  for (let i = 0; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum + n;
}

let n = parseInt(readLine());
console.log(sumOfDivisors(n));
