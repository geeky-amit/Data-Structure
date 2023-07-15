let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let arr = readLine().split(" ");
let frequency = {};
for (let i = 0; i < n; i++) {
  let key = arr[i];
  if (frequency[key] !== undefined) {
    frequency[key] += 1;
  } else {
    frequency[key] = 1;
  }
}

let res = [];
for (let key in frequency) {
  res.push(parseInt(frequency[key] / 2));
}
let count = 0;
for (let i = 0; i < res.length; i++) {
  count += res[i];
}
console.log(count);
