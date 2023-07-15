let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let prevNum = parseInt(readLine());
let flag = false;

for (let i = 0; i < n - 1; i++) {
  let num = parseInt(readLine());
  if (prevNum + num > 100) {
    flag = true;
  }
  prevNum = num;
}
if (flag) {
  console.log("true");
} else {
  console.log("false");
}
