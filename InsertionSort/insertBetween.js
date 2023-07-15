let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let [n, x] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
let updatedArr = [];

if (x < arr[0]) {
  arr.unshift(x);
  console.log(...arr);
} else if (x > arr[arr.length - 1]) {
  arr.push(x);
  console.log(...arr);
} else {
  for (let i = 0; i < n; i++) {
    if (x >= arr[i] && x < arr[i + 1]) {
      updatedArr.push(arr[i]);
      updatedArr.push(x);
      i++;
    }
    updatedArr.push(arr[i]);
  }
  if (arr.length === updatedArr.length) {
    updatedArr.push(x);
    console.log(...updatedArr);
  } else {
    console.log(...updatedArr);
  }
}
