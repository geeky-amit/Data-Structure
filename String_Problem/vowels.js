let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let str = readLine();
let vowel = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
};

for (let i = 0; i < n; i++) {
  let key = str[i];

  if (vowel[key] === str[i]) {
    delete vowel[key];
  }
}

if (Object.keys(vowel).length === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
