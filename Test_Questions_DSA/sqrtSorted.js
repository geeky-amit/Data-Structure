let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function conquer(arr, si, mid, ei) {
  let merged = [];
  let indx1 = si;
  let indx2 = mid + 1;
  let x = 0;

  while (indx1 <= mid && indx2 <= ei) {
    if (arr[indx1] <= arr[indx2]) {
      merged[x++] = arr[indx1++];
    } else {
      merged[x++] = arr[indx2++];
    }
  }
  while (indx1 <= mid) {
    merged[x++] = arr[indx1++];
  }

  while (indx2 <= ei) {
    merged[x++] = arr[indx2++];
  }

  for (let i = 0, j = si; i < merged.length; i++, j++) {
    arr[j] = merged[i];
  }
}

function divide(arr, si, ei) {
  if (si >= ei) {
    return;
  }
  let mid = Math.floor((si + ei) / 2);
  divide(arr, si, mid);
  divide(arr, mid + 1, ei);
  conquer(arr, si, mid, ei);
}

let n = parseInt(readLine());

let arr = [];
for (let i = 0; i < n; i++) {
  let sqrt = parseInt(readLine());
  arr.push(sqrt * sqrt);
}

divide(arr, 0, arr.length - 1);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
