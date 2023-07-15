let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function makePalindrome(str, n) {
  if (n === 0) {
    let i = str.length - 1;
    while (i >= 0) {
      str += str[i];
      i--;
    }
  } else {
    let i = str.length - 1;
    while (i > 0) {
      str += str[i - 1];
      i--;
    }
  }
  return str;
}

let str = readLine();
let n = parseInt(readLine());

let ans = makePalindrome(str, n);
console.log(ans);
