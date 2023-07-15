let fs = require("fs");
const { log } = require("util");
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
  let num = arr.push(parseInt(readLine()));
}

for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      count++;
    }
  }
  console.log(count);
}
