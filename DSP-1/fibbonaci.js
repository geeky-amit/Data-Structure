const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
if (n === 0) {
  console.log(-1);
} else if (n === 1) {
  console.log(0);
} else {
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 0; i < n - 2; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(b);
  }
}
