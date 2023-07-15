let fs = require("fs");
let data = fs.readFileSync(0, "utf8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let noOfCandidates = parseInt(readLine());
let eligibleCandidates = 0;
for (let i = 0; i < noOfCandidates; i++) {
  let candidate = parseInt(readLine());
  if (candidate >= 18) {
    eligibleCandidates++;
  }
}

console.log(eligibleCandidates);
