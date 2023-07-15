let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let t = parseInt(readLine());

while (t--) {
  let n = parseInt(readLine());
  let a = readLine().split(" ").map(Number);
  let b = readLine().split(" ").map(Number);

  a.sort((x, y) => x - y); // increasing order
  b.sort((x, y) => y - x); // decreasing order

  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] % b[i] === 0 || b[i] % a[i] === 0) {
      sum++;
    }
  }

  console.log(sum);
}
