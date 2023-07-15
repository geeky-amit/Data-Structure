let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let arr = readLine().split(" ");
let longestString = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (longestString.length < arr[i].length) {
    longestString = arr[i];
  }
}
console.log(longestString.length);
