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

for (let i = 0; i < n; i++) {
  arr.push(readLine().split(" "));
}
let matArray = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    matArray[i] = [];
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    matArray[i][j] = parseInt(arr[i][j]);
    if (i === j) {
      if (matArray[i][j] < 0) {
        matArray[i][j] = 0;
      } else {
        matArray[i][j] = 1;
      }
    }
  }
}
let arrE = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j === n - 1) {
      arrE = arrE + matArray[i][j];
    } else {
      arrE = arrE + matArray[i][j] + " ";
    }
  }
  console.log(arrE);
  arrE = "";
}
