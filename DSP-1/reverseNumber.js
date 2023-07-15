// const { sign } = require("crypto");
// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

function reverseNumber(x) {
  let limit = Math.pow(2, 31);

  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = -x;
  }

  let reverse = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = parseInt(x / 10);
  }
  if (reverse > limit || reverse <= -limit) return 0;

  if (sign === -1) {
    return -reverse;
  } else {
    return reverse;
  }
}

//let x = parseInt(readLine());

let x = 1534236469;

console.log(reverseNumber(x));
