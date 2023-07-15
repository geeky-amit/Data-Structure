let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let prevNum = parseInt(readLine()); //2 2 2
let count = 1;
let notFound = -1;
for (let i = 1; i < n; i++) {
  // 1 2 3
  if (count === 4) {
    break;
  } else {
    let num = parseInt(readLine()); // 2 2 4

    if (num === prevNum) {
      count++; // 2 3
    } else {
      prevNum = num;
      count = 1;
    }
  }
}
if (count === 4) {
  console.log(prevNum);
} else {
  console.log(notFound);
}
