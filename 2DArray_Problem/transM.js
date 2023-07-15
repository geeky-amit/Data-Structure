let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
// let n = parseInt(readLine());
// let arr = [];

// for (let i = 0; i < n; i++) {
//   arr.push(readLine().split(" "));
// }

// let transArray = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[0].length; j++) {
//     transArray[i] = [];
//   }
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     transArray[j][i] = arr[i][j];
//   }
// }

// let arrE = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (j === n - 1) {
//       arrE = arrE + transArray[i][j];
//     } else {
//       arrE = arrE + transArray[i][j] + " ";
//     }
//   }
//   console.log(arrE);
//   arrE = "";
// }

// function transposeMatrix(arr) {
//   let transArray = [];
//   // for (let i = 0; i < arr[0].length; i++) {
//   //   for (let j = 0; j < arr.length; j++) {

//   //   }
//   // }

//   for (let i = 0; i < arr[0].length; i++) {
//     transArray[i] = [];
//     for (let j = 0; j < arr.length; j++) {
//       transArray[i][j] = arr[j][i];
//     }
//   }
//   return transArray;
// }
// let res = transposeMatrix(arr);
// for (let i = 0; i < res.length; i++) {
//   console.log(...res[i]);
// }

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let icon = parseInt(readLine());

if (icon === 0) {
  console.log(0);
} else {
  let pixel = [];
  for (let i = 0; i < icon; i++) {
    pixel.push(parseInt(readLine()));
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < pixel.length; j++) {
      if (arr[i] === pixel[j]) {
        count++;
      }
    }
  }

  console.log(Math.floor(count / pixel.length));
}
