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
  let row = readLine().split(" ").map(Number);
  arr.push(row);
}

let rotatedMatrix = [];

for (let i = 0; i < arr[0].length; i++) {
  let row = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    row.push(arr[j][i]);
  }
  rotatedMatrix.push(row);
}

console.log(rotatedMatrix.length);

for (let row of rotatedMatrix) {
  console.log(...row);
}
