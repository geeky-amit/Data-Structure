let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let a = parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());

if (a + b > c && b + c > a && c + a > b) {
  console.log("valid triangle");
} else {
  console.log("invalid triangle");
}
