let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

for (let i = n, j = 1; i > 0; i--, j++) {
  console.log(" ".repeat(i - 1) + "#".repeat(j));
}
