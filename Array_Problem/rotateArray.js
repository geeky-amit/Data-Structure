let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let nums = readLine().split(" ");
let m = parseInt(readLine());
let arr = [];
for (let i = 0; i < nums.length; i++) {
  arr.push(parseInt(nums[i]));
}
let k = arr.length;
m = m % nums.length;
for (let i = 0; i < k; i++) {
  if (i < m) {
    let num = arr[k + i - m];
    console.log(num);
  } else {
    let num = arr[i - m];
    console.log(num);
  }
}
