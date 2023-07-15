let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  // Create temp arrays
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

let t = parseInt(readLine());

while (t--) {
  let n = parseInt(readLine());
  let arr = readLine().split(" ").map(Number);
  mergeSort(arr, 0, n - 1);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    // sum += i * arr[i];
    // sum -= (n - 1 - i) * arr[i];
    // sum %= 10e9 + 7;

    sum =
      (sum + ((i * arr[i] - (n - 1 - i) * arr[i]) % (10e9 + 7))) % (10e9 + 7);
  }
  console.log((arr[n - 1] * sum) % (10e9 + 7));
}
