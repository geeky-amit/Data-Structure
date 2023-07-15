let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function binomialCoefficient(n, r) {
  if (r === 0 || n === r) return 1;
  return binomialCoefficient(n - 1, r - 1) + binomialCoefficient(n - 1, r);
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let nums = readLine().split(" ");
  let n = parseInt(nums[0]);
  let r = parseInt(nums[1]);
  let ans = binomialCoefficient(n, r);
  console.log(ans);
}
