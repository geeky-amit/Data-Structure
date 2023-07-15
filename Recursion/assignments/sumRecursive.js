let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine());

function recurSum(n) {
  let sum = 0;
  if (n === 1) {
    sum = 1;
  } else {
    sum = n + recurSum(n - 1);
  }
  console.log(n, sum);
  return sum;
}

// Driver code

recurSum(n);
