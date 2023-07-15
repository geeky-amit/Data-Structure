let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let first = parseInt(readLine());
let r = parseInt(readLine());
let n = parseInt(readLine());

let nthTerm = first * Math.pow(r, n - 1);

console.log(nthTerm);
