let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function facto(n) {
  if (n < 0) return undefined;

  if (n === 0) return 1;
  return n * facto(n - 1);
}

let n = parseInt(readLine());
console.log(facto(n));
