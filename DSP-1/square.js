let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let sqrtSum = 0;
for (let i = 1; i <= n; i++) {
  sqrtSum += i * i;
}

console.log(sqrtSum);
