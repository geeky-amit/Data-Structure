const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let n = parseInt(readLine());
// let i = 1;
// let First = parseInt(readLine());
// let numCount = 1;
// for (; i < n; ) {
//   let num = parseInt(readLine());

//   if (num === First) {
//     numCount++;
//   }
//   i++;
// }
// console.log(numCount);
// let n = parseInt(readLine());

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < n; i++) {
//   let num = parseInt(readLine());

//   if (num % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
//}

let arr = readLine();
let arrNew = [];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  arrNew[i] = parseInt(arr[i]);
}

console.log(arrNew);
