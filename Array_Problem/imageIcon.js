let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let n = parseInt(readLine());
// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr.push(parseInt(readLine()));
// }

// let icon = parseInt(readLine());

// let pixel = [];
// for (let i = 0; i < icon; i++) {
//   pixel.push(parseInt(readLine()));
// }

// let count = ;
// for (let i = 0; i < arr.length; i++) {
//   let temp = 0;
//   for (let j = 0; j < pixel.length; j++) {
//     if (arr[i] ^ pixel[j] === 0) {
//       count++;
//     }
//   }
//   count.push(temp);
// }
// for(let i = 0; i < count.length; i++) {}

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let icon = parseInt(readLine());
let pixel = [];
for (let i = 0; i < icon; i++) {
  pixel.push(parseInt(readLine()));
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == pixel[0]) {
    let m = 1;
    for (; m < pixel.length; m++) {
      if (i === arr.length - 1) {
        break;
      } else if (arr[i + 1] === pixel[m]) {
        i++;
      }
    }
    if (m === pixel.length - 1) {
      count++;
    }
  }
}
console.log(count);
