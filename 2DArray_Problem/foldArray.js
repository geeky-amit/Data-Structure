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

let noFold = parseInt(readLine());

// function foldArray(arr) {
//   for (let left = 0, right = arr.length - 1; left <= right; left++, right--) {
//     if (arr.length % 2 === 0) {
//     }
//     if (left === right) {
//       result[i] = arr[left];
//     } else {
//       result[i] = arr[right] + arr[left];
//     }
//   }
//   return result;
// }
// //
// let result = foldArray(arr);
// noFold--;
// while (noFold !== 0) {
//   result = foldArray(result);
//   noFold--;
// }

// console.log(result.length);
// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

for (let i = 0; i < noFold; i++) {
  if (arr.length % 2 === 0) {
    for (let j = 0; j <= arr.length / 2; j++, arr.length--) {
      arr[j] = arr[j] + arr[arr.length - 1 - j];
    }

    arr.length = arr.length / 2;
  } else {
    for (let j = 0; j < arr.length / 2; j++, arr.length--) {
      arr[j] = arr[j] + arr[arr.length - 1 - j];
    }
    arr.length = (arr.length + 1) / 2;
  }
}

console.log(arr.length);
