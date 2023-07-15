let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let arr = [];
for (i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let noFold = parseInt(readLine());
for (i = 0; i < noFold; i++) {
  if (arr.length % 2 === 0) {
    for (j = 0; j < arr.length / 2; j++) {
      arr[j] = arr[j] + arr[arr.length - j - 1];
    }
    arr.length = arr.length / 2;
  } else {
    for (j = 0; j < (arr.length - 1) / 2; j++) {
      arr[j] = arr[j] + arr[arr.length - j - 1];
    }
    arr.length = (arr.length + 1) / 2;
  }
}
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
