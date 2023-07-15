let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function matrixAddition(mat1, mat2) {
  let ans = [];
  if (mat1.length === mat2.length && mat1[0].length === mat2[0].length) {
    for (let i = 0; i < mat1.length; i++) {
      ans.push([]);
      for (let j = 0; j < mat1[i].length; j++) {
        ans[i][j] = mat1[i][j] + mat2[i][j];
      }
    }
    return ans;
  } else {
    return -1;
  }
}

let m = parseInt(readLine());
let mat1 = [];
for (let i = 0; i < m; i++) {
  mat1.push(readLine().split(" ").map(Number));
}

let n = parseInt(readLine());
let mat2 = [];
for (let i = 0; i < n; i++) {
  mat2.push(readLine().split(" ").map(Number));
}

let ans = matrixAddition(mat1, mat2);
if (ans.length > 0) {
  for (let i = 0; i < ans.length; i++) {
    console.log(...ans[i]);
  }
} else {
  console.log(ans);
}
