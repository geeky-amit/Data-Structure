let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let cord = readLine();
  let data1 = cord.split(" ");
  let x = parseInt(data1[0]);
  let y = parseInt(data1[1]);

  if (x > 0 && y > 0) {
    console.log("Q1");
  } else if (x < 0 && y > 0) {
    console.log("Q2");
  } else if (x < 0 && y < 0) {
    console.log("Q3");
  } else {
    console.log("Q4");
  }
}
