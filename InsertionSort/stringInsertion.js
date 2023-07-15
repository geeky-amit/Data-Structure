let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let stringArr = readLine().split("");

for (let i = 1; i < stringArr.length; i++) {
  let current = stringArr[i];
  let j = i - 1;
  while (j >= 0 && current < stringArr[j]) {
    stringArr[j + 1] = stringArr[j];
    j--;
  }
  stringArr[j + 1] = current;
}
console.log(stringArr.join(""));
