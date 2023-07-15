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
let num = parseInt(readLine());
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % num === 0) {
    sum += arr[i];
  }
}
console.log(sum);
