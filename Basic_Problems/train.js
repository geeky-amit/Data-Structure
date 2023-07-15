const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let train = readLine();

let trainData = train.split(" ");

let frontTrain = parseInt(trainData[0]);
let fromendTrain = parseInt(trainData[1]);

let trainPosition = parseInt(frontTrain - fromendTrain + 1);

console.log(trainPosition);
