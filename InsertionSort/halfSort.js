let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let str = readLine().split("");

let n = parseInt(str.length / 2);

for (let i = n + 1; i < str.length; i++) {
  let current = str[i];

  let j = i - 1;
  while (j >= n && current < str[j]) {
    str[j + 1] = str[j];

    j--;
  }
  str[j + 1] = current;
}
console.log(str.join(""));
