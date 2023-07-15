let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// let n = parseInt(readLine());

// let num = readLine().split(" ");
// let arr = [];

// for (let i = 0; i < num.length; i++) {
//   arr.push(parseInt(num[i]));
// }
// let max = [0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(num);
// console.log(arr);
// let num = readLine().split("");
// let mul = 1;
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += parseInt(num[i]);
//   mul *= parseInt(num[i]);
// }

// let result = mul - sum;

// console.log(parseInt(result));
// let str = "o a kak ushakov lil vo kashu kakao";
// let st = str.split("");
// let count = 0;
// console.log(st);
// for (let i = 0; i < st.length; i++) {
//   if (st[i] === "a") {
//     count++;
//   } else if (st[i] === "e") {
//     count++;
//   } else if (st[i] === "i") {
//     count++;
//   } else if (st[i] === "o") {
//     count++;
//   } else if (st[i] === "u") {
//     count++;
//   }
// }
// console.log(count);
// let data = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ];
// let result = [];
// for (let i = 0; i < data.length; i++) {
//   if (data[i][0] > 54 && data[i][1] > 7) {
//     result.push("Senior");
//   } else {
//     result.push("Open");
//   }
// }
// console.log(result);

// function nbYear(p0, percent, aug, p) {
//   let sum = p0;
//   let count = 0;

//   for (let i = 0; ; i++) {
//     if (sum >= p) {
//       break;
//     }
//     sum += (sum * percent) / 100 + aug;
//     count++;
//   }

//   return count;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// const construct2DArray = function (original, m, n) {
//   let ans = [];
//   let i = 0;
//   for (let j = 0; j < m; j++) {
//     ans[j] = [];
//     for (let k = 0; k < n; k++) {
//       ans[j][k] = original[i++];
//     }
//   }
//   return ans;
// };
// let arr = [1, 2, 3, 4];
// let m = 2;
// let n = 2;
// console.log(construct2DArray(arr, m, n));

let n = parseInt(readLine());

let sum = 0;

for (let i = 0; i < n; i++) {
  sum = sum + parseInt(readLine());
}

let avgSum = sum / n;

if (avgSum > 100) {
  console.log("Excellent!");
} else {
  console.log("Not Excellent!");
}
