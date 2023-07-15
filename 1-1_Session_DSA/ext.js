let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let min = arr[0];
let max = arr[0];
for (let i = 0; i < n; i++) {
  if (arr[i] <= min) {
    min = arr[i];
  }
  if (arr[i] >= max) {
    max = arr[i];
  }
}
console.log(min * max);
