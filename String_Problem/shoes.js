let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n1 = parseInt(readLine());

let arr = readLine().split(" ").map(Number);

let shoeSizeFrequency = {};
for (let i = 0; i < n1; i++) {
  let key = arr[i];
  if (!shoeSizeFrequency[key]) {
    shoeSizeFrequency[key] = 1;
  } else {
    shoeSizeFrequency[key] += 1;
  }
}

let n2 = parseInt(readLine());
let totalPrice = 0;
for (let i = 0; i < n2; i++) {
  let shoeInfo = readLine().split(" ").map(Number);
  let shoeSize = shoeInfo[0];
  let shoePrice = shoeInfo[1];
  if (shoeSizeFrequency[shoeSize]) {
    shoeSizeFrequency[shoeSize] -= 1;
    totalPrice += shoePrice;
  }
}

console.log(totalPrice);
