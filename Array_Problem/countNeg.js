let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let nums = readLine().split(" ");
let count = 0;
for (let i = 0; i < n; i++) {
  if (parseInt(nums[i]) < 0) {
    count++;
  }
}
console.log(count);
