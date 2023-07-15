const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let m = parseInt(readLine());
let n = parseInt(readLine());
let count1 = -1;
if (n >= 0 && m <= 0) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
} else if (n >= 0 && m >= 0) {
  for (let i = m; i <= n; i++) {
    console.log(i);
  }
} else {
  console.log(count1);
}
