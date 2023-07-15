let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

const abs = (a, b) => (a > b ? a - b : b - a);

let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);

let initialSum = 0;

for (let i = 0; i < n; i++) {
  initialSum += abs(arr[i], i + 1);
}

let globalMax = initialSum;

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    let initialContr = abs(arr[j], j + 1) + abs(arr[i], i + 1);
    let newContr = abs(arr[j], i + 1) + abs(arr[i], j + 1);
    let currentSum = initialSum - initialContr + newContr;

    globalMax = globalMax < currentSum ? currentSum : globalMax;
  }
}

console.log(globalMax);
