function conquer(arr, si, mid, ei) {
  let merged = [];
  let idx1 = si;
  let idx2 = mid + 1;
  let x = 0;

  while (idx1 <= mid && idx2 <= ei) {
    if (arr[idx1] <= arr[idx2]) {
      merged[x] = arr[idx1];
      x++;
      idx1++;
    } else {
      merged[x] = arr[idx2];
      x++;
      idx2++;
    }
  }

  while (idx1 <= mid) {
    merged[x] = arr[idx1];
    x++;
    idx1++;
  }

  while (idx2 <= ei) {
    merged[x] = arr[idx2];
    x++;
    idx2++;
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

let arr = [2, 6, 12, 34, 1, 9, 20, 1000, 23, 34, 90, 2000];
divide(arr, 0, arr.length - 1);
console.log(...arr);
