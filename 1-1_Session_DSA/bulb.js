let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

let count = 0;
let bulbStatus = false;

for (let i = 0; i < n; i++) {
  let query = readLine();
  if (query === "OFF") {
    bulbStatus = false;
  } else if (query === "ON" && bulbStatus === false) {
    count++;
    bulbStatus = true;
  } else if (query === "Toggle") {
    if (bulbStatus === false) {
      count++;
      bulbStatus = true;
    } else if (bulbStatus === true) {
      bulbStatus = false;
    }
  }
}

console.log(count);
