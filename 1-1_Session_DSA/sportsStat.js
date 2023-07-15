// const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let n = parseInt(readLine());
// let frequency = {};
// let mostLike = {};
// let footballLike = 0;
// for (let i = 0; i < n; i++) {
//   let s = readLine();
//   let str = s.split(" ");
//   if (str[1] === "football") {
//     footballLike++;
//   }
//   let key = str[0];
//   if (frequency[key] !== undefined) {
//     continue;
//   }
//   frequency[key] = str[1];
// }
// console.log(frequency);
// for (let key in frequency) {
//   console.log(key);
//   // if (mostLike[value] === undefined) {
//   //   mostLike[value] = 1;
//   // } else {
//   //   mostLike[value] += 1;
//   // }
// }
// console.log(mostLike);

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
