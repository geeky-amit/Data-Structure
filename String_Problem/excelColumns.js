let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let n = parseInt(readLine());

// for (let i = 0; i < n; i++) {
//   let num = parseInt(readLine());
//   let str = "";
//   if (num <= 26) {
//     let temp = 26 - num;
//     str += String.fromCharCode(65 + temp);
//   } else {
//     let temp2 = 26 - (num % 26);
//     if (num > 26) {
//       num = parseInt(num / 26);
//     }
//     str += String.fromCharCode(65 + 26 - num);

//     str += String.fromCharCode(65 + temp2);
//   }

//   console.log(str);
// }

// function printString(num) {
//   let columnName = [];

//   while (num > 0) {
//     let rem = num % 26;

//     if (rem === 0) {
//       columnName.push("A");
//       num = 26 - Math.floor(num / 26);
//     } else {
//       columnName.push(String.fromCharCode(26 - rem + 65));
//       num = Math.floor(num / 26);
//     }
//   }
//   return columnName.join("");
// }

// let n = parseInt(readLine());
// for (let i = 0; i < n; i++) {
//   let num = parseInt(readLine());
//   console.log(printString(num));
// }

let nooftest = parseInt(readLine());
for (let i = 0; i < nooftest; i++) {
  let input = parseInt(readLine());
  let char = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let ans = "";
  while (input != 0) {
    ind = input % 26;
    if (ind == 0) {
      ind = 26;
    }
    ans = char[ind - 1] + ans;
    input -= ind;
    input = parseInt(input / 26);
  }
  console.log(ans);
}
