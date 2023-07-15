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

let check = -1;
let count = 1;
for (let i = 0; i < arr.length; i++) {
  // [2 3 3 3 4  4]

  if (arr[i] === arr[i + 1]) {
    count++;
  } else {
    if (count === arr[i]) {
      console.log(count);
      check = 1;
      break;
    }
    count = 1;
  }
}

if (check === -1) {
  console.log(-1);
}

// for (let i = 0; i < n; i++) {
//   let count = 0;
//   for (let j = 0; j < n; j++) {
//     if (arr[j] === arr[i]) {
//       count++;
//     }
//   }
//   if (count >= arr[i]) {
//     console.log(arr[i]);
//     break;
//   } else if (i === arr.length - 1) {
//     console.log(-1);
//   }
// }
