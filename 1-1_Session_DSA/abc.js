let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = readLine().split(" ");
let a = parseInt(num[0]);
let b = parseInt(num[1]);
let flag = true;
for (let c = 1; c < 4; c++) {
  let product = a * b * c;
  if (product % 2 !== 0) {
    console.log("Yes");
    flag = false;
    break;
  }
}
if (flag) {
  console.log("No");
}
