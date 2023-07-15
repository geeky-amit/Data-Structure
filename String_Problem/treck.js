const { log } = require("console");
let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// let t = parseInt(readLine());
// let n = parseInt(readLine());
// for (let k = 0; k < t; k++) {
//   let count = 0;
//   let valley = 0;
//   let flag = false;
//   let s = readLine();
//   for (let i = 0; i < n; i++) {
//     if (s[i] === "U") {
//       count++;
//     } else {
//       count--;
//     }
//     if (count < 0) {
//       flag = true;
//     }
//     if (flag && count === 0) {
//       valley++;
//       flag = false;
//     }
//   }
//   console.log(valley);
// }

function countValleys(steps, n) {
  let level = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (steps[i] === "U") {
      level++;
    } else {
      level--;
    }

    if (level === 0 && steps[i] === "U") {
      count++;
    }
  }

  return count;
}

let t = parseInt(readLine());
while (t--) {
  let n = parseInt(readLine());
  let steps = readLine();

  console.log(countValleys(steps, n));
}
