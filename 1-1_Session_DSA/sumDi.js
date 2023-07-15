let fs = require("fs");
const { parse } = require("path");
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
  arr.push(readLine().split(" "));
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i + j === arr.length - 1) {
      sum = sum + parseInt(arr[i][j]);
    }
    if (i === j) {
      sum = sum + parseInt(arr[i][j]);
    }
  }
}

console.log(sum);
