let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function palindrome(str, left, right) {
  if (left >= right) return true;
  return str[left] === str[right] && palindrome(str, left + 1, right - 1);
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let str = readLine();
  let ans = palindrome(str, 0, str.length - 1);
  if (ans) {
    console.log("True");
  } else {
    console.log("False");
  }
}
