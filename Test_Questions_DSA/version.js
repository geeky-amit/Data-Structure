let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function compare(v1, v2) {
  let v1Arr = v1.split(".");
  let v2Arr = v2.split(".");
  let len = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < len; i++) {
    let num1 = parseInt(v1Arr[i]) || 0;
    let num2 = parseInt(v2Arr[i]) || 0;

    if (num1 === num2) {
      continue;
    } else if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    }
  }
  return 0;
}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let ver = readLine().split(" ");
  
  let v1 = ver[0];
  let v2 = ver[1];
  console.log(compare(v1, v2));
}
