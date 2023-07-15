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
for (let i = 0; i < 2 * n; i++) {
  arr.push(parseInt(readLine()));
}

let mid = Math.floor(arr.length / 2);

let j = 0;
let k = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log(arr[j]);
    j++;
  } else {
    console.log(arr[mid + k]);
    k++;
  }
}
