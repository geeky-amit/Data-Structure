let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function getMaxSum(arr, k) {
  let sum = 0;
  let i = arr.length - 1;
  while (k > 0) {
    sum += arr[i];
    i--;
    k--;
  }
  return sum;
}

function getMinSum(arr, k) {
  let sum = 0;
  let i = 0;
  while (k > 0) {
    sum += arr[i];
    i++;
    k--;
  }
  return sum;
}

let t = parseInt(readLine());
while (t--) {
  let [n, m] = readLine().split(" ").map(Number);
  let arr = readLine().split(" ").map(Number);

  arr.sort(function (a, b) {
    return a - b;
  });

  console.log(getMaxSum(arr, n - m) - getMinSum(arr, n - m));
}
