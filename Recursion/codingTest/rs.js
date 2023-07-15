const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function temp(m, idx, ans) {
  if (idx < 0) return ans;
  ans = m * temp(m + 1, idx - 1, ans);
}

function recursiveSeqence(n, idx, ans, k) {
  if (n === 1) return;
  k = idx + k;

  ans = ans + temp(k, idx, 1);
  idx++;
  recursiveSeqence(n - 1, idx, ans, k);
}
recursiveSeqence(5, 1, 1, 1);
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  let ans = recursiveSeqence(5, 1, 1, 1);
  console.log(ans);
}
