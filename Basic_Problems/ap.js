let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let nums = readLine();
let data1 = nums.split(" ");
let num1 = parseInt(data1[0]);
let num2 = parseInt(data1[1]);
let num3 = parseInt(data1[2]);

if (num2 - num1 === num3 - num2) {
  let cd = num3 - num2;
  let num4 = num3 + cd;
  console.log(num4);
}
