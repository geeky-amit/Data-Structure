let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let x = parseInt(readLine());
let y = parseInt(readLine());

if (x > 0 && y > 0) {
  console.log("First Quadrant");
} else if (x < 0 && y > 0) {
  console.log("Second Quadrant");
} else if (x < 0 && y < 0) {
  console.log("Third Quadrant");
} else {
  console.log("Fourth Quadrant");
}
