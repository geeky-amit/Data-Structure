const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function longestSubString(str) {
  if (str === undefined) return 0;
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let uniqueChar = new Set();

  while (end < str.length) {
    if (!uniqueChar.has(str[end])) {
      uniqueChar.add(str[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueChar.size);
    } else {
      uniqueChar.delete(str[start]);
      start++;
    }
  }
  return maxLength;
}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let str = readLine();

  let result = longestSubString(str);
  console.log(result);
}
