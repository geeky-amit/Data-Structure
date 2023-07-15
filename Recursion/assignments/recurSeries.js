let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function recurSeries(n) {
  if (n <= 9) {
    return n;
  }
  if (n % 2 === 0) {
    return recurSeries(n - 10);
  } else {
    return recurSeries(n - 9);
  }
}

let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  console.log(recurSeries(n));
}
