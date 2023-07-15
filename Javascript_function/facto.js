let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function factorial(number) {
  if (number === 0) {
    return 1;
  } else if (number < 0) {
    return undefined;
  } else {
    let res = 1;
    for (let i = 1; i <= number; i++) {
      res *= i;
    }
    return res;
  }
}

let number = parseInt(readLine());

console.log(factorial(number));
