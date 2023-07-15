let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let nums = readLine().split(" ");
let arr = [];
for (let i = 0; i < nums.length; i++) {
  arr.push(parseInt(nums[i]));
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      count++;
    }
  }
}
console.log(count);
