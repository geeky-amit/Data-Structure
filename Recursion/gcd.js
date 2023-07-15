let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function gcd(m, n) {
  if (n === 0) {
    return m;
  }

  return gcd(n, m % n);
}

let m = parseInt(readLine());
let n = parseInt(readLine());

console.log(gcd(m, n));
