let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function recurMul(n) {
  if (n < 0) {
    n = -n;
  }
  if (n > 0 && n < 10) {
    return n;
  } else {
    return (n % 10) * recurMul(parseInt(n / 10));
  }
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  console.log(recurMul(n));
}
