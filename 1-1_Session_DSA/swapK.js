let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let nums = readLine().split(" ");
let n = parseInt(nums[0]);
let k = parseInt(nums[1]);
let arr = readLine().split(" ");
let temp = arr[k - 1];

arr[k - 1] = arr[arr.length - k];

arr[arr.length - k] = temp;

for (let i = 0; i < arr.length; i++) {
  console.log(parseInt(arr[i]));
}
