// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

function currency(str, idx, sum) {
  if (idx === str.length) {
    console.log(sum);
    return;
  }
  sum = sum + parseInt(str[idx]);

  currency(str, idx + 1, sum);
}

let str = "789456123";
str = str.split("");

currency(str, 0, 0);
