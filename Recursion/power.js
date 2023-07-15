let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function power(x, n) {
  if (n === 0) return 1;
  if (n % 2 === 0) {
    return power(x, n / 2) * power(x, n / 2);
  } else {
    return x * power(x, n / 2) * power(x, n / 2);
  }
}
let x = parseInt(readLine());
let n = parseInt(readLine());

console.log(power(x, n));
