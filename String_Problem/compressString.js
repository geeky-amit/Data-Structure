let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let str = readLine();
  let newStr = "";
  let count = 1;
  for (let j = 0; j < str.length; j++) {
    if (str[j] == str[j + 1]) {
      count++;
    } else {
      if (count > 1) {
        newStr = newStr + str[j] + count;
        count = 1;
      } else {
        newStr = newStr + str[j];
      }
    }
  }
  console.log(newStr);
}
