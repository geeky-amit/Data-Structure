let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let [n, x] = readLine().split(" ").map(Number);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(readLine());
}

let newArr = [];
let i = 0;
while (i < arr[0].length) {
  let str = "";
  for (let j = 0; j < arr.length; j++) {
    str += arr[j][i];
  }
  newArr.push(str.split(""));
  i++;
}

let count = 0;
for (let k = 0; k < newArr.length; k++) {
  if (newArr[k].join("") === newArr[k].sort().join("")) {
    count++;
  }
}
console.log(newArr.length - count);
