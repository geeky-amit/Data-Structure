let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

let t = parseInt(readLine());
let order = [];

for (let i = 0; i < n; i++) {
  order.push(parseInt(readLine()));
}
let bill = [];
for (let i = 0; i < n; i++) {
  bill.push(parseInt(readLine()));
}

let maxBill = [];
let ans = bill[0];
for (let i = 0; i < n; i++) {
  let temp = bill[i];
  for (let j = i + 1; j < n; j++) {
    if (order[i] === order[j]) {
      temp = temp + bill[j];
    }
  }
  if (ans <= temp) {
    ans = temp;
  }
  maxBill.push(temp);
}

for (let i = 0; i < maxBill.length; i++) {
  if (maxBill[i] === ans) {
    console.log(i + 1);
  }
}
