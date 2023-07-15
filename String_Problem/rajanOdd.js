let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

let arr = readLine().split(" ").map(Number);

let frequency = {};

for (let i = 0; i < arr.length; i++) {
  let key = arr[i];

  if (!frequency[key]) {
    frequency[key] = 1;
  } else {
    frequency[key] += 1;
  }
}

for (let key in frequency) {
  if (frequency[key] % 2 !== 0) {
    console.log(parseInt(key));
    break;
  }
}
