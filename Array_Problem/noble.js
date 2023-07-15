let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
console.log(arr);
// count = 0;
// let x = false;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[i]) {
//       count++;
//     }
//   }
//   if (count === arr[i]) {
//     console.log(1);
//     x = true;
//     break;
//   }
//   count = 0;
// }
// if (!x) {
//   console.log(-1);
// }
