let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let arr = readLine().split(" ");
let maxIdx = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);

  if (arr[maxIdx] < arr[i]) {
    maxIdx = i;
  }
}
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let temp = arr[i];
  if (arr[i] === arr[maxIdx]) {
    sum = sum + 0;
  } else if (i < maxIdx) {
    sum = sum + (arr[maxIdx] - arr[i]);
  } else {
    for (let j = i; j < arr.length; j++) {
      if (temp < arr[j]) {
        temp = arr[j];
      }
    }
  }
  sum = sum + (temp - arr[i]);
}

console.log(sum);

// var maximumWealth = function (accounts) {
//   let max = 0;
//   for (let i = 0; i < accounts.length; i = i + 1) {
//     let m = accounts[i];
//     let sum = 0;
//     for (let j = 0; j < accounts[i].length; j = j + 1) {
//       sum = sum + parseInt(m[j]);
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// };
// let accounts = [];
// let max = 0;
// console.log(max);
