let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = parseInt(readLine());
let flag = false;
for (let number = 2; number < num / 2; number++) {
  let i = 2;
  for (; i < number; i++) {
    if (number % 2 === 0) {
      flag = true;
      break;
    }
  }
}

if (!flag) {
  console.log("Yes");
} else {
  console.log("No");
}
