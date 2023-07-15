let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let str = readLine().toLowerCase();
let flag = true;

for (let i = 0, j = str.length - 1; i < j; i++, j--) {
  if (str[i] !== str[j]) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log("YES");
} else {
  console.log("NO");
}
