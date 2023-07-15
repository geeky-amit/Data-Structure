let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let t = parseInt(readLine());
for (let a0 = 0; a0 < t; a0++) {
  let n = parseInt(readLine());
  let str = readLine();
  let frequency = {};
  let starSum = 0;
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] !== undefined) {
      frequency[str[i]] += 1;
    } else {
      frequency[str[i]] = 0;
    }
  }

  for (let key in frequency) {
    let temp = frequency[key];

    starSum += (temp * (temp + 1)) / 2;
  }

  console.log(starSum);
}

const map = new Map();
map.set("a", 10);
map.set("b", 20);
console.log(map.get("a"));
