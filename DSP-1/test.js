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

let minPrice = arr[0];

let maxProfit = 0;

for (let i = 0; i < arr.length; i++) {
  let currPrice = arr[i];
  let currProfit = currPrice - minPrice;
  if (currProfit > maxProfit) {
    maxProfit = currProfit;
  }
  if (currPrice < minPrice) {
    minPrice = currPrice;
  }
}

console.log(maxProfit);

// let n = parseInt(readLine());

// let str = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (i % 2 === 0) {
//       if (k % 2 === 0) {
//         str += "*";
//       } else {
//         str += "$";
//       }
//     } else {
//       if (k % 2 === 0) {
//         str += "$";
//       } else {
//         str += "*";
//       }
//     }
//   }
//   str += "\n";
// }

// console.log(str);
