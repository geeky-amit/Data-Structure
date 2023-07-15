let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let t = parseInt(readLine());

while (t--) {
  let n = parseInt(readLine());
  let girls = [];
  let angerSum = 0;

  for (let i = 0; i < n; i++) {
    let girl = readLine().split(" ").map(Number);
    girls.push(girl);
    angerSum += girl[1];
  }

  let maxHappyness =
    girls[0][0] + girls[1][0] - (angerSum - (girls[0][1] + girls[1][1]));

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let currentFavourSum = girls[i][0] + girls[j][0];
      let remainingAngSum = angerSum - (girls[i][1] + girls[j][1]);

      if (maxHappyness < currentFavourSum - remainingAngSum) {
        maxHappyness = currentFavourSum - remainingAngSum;
      }
    }
  }
  console.log(maxHappyness);
}
