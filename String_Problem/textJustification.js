// const { log } = require("console");
// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

let words = ["This", "is", "an", "example", "of", "text", "justification."];

let maxWidth = 16;
let line = 0;
let index = 0;
let ans = [];

while (index < words.length) {
  let currentLineCapacity = maxWidth;
  let currentLine = [];
  let totalChars = 0;

  while (words[index].length <= currentLineCapacity) {
    currentLine.push(words[index]);
    totalChars += words[index].length;
    currentLineCapacity -= words[index].length + 1;
    index++;
  }

  let str = "";
  let spaces = maxWidth - totalChars;
  let numberOfWords = currentLine.length;
  let gaps = numberOfWords - 1;
  let residue = spaces % gaps;
  let singleSpace = " ".repeat(parseInt(spaces / gaps));

  if (numberOfWords > 1) {
    for (let i = 0; i < currentLine.length; i++) {
      str += currentLine[i];
      str += singleSpace;
      if (residue) {
        str += " ";
        residue--;
      }
    }
  } else {
    str += currentLine[0] + " ".repeat(spaces);
  }
  ans.push(str);
}

console.log(ans);
