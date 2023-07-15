let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function combinations(binaryString, indx) {
  if (binaryString.length === indx) {
    console.log(binaryString);
    return;
  }
  if (binaryString[indx] === "?") {
    for (ch in "01") {
      binaryString =
        binaryString.substring(0, indx) + ch + binaryString.substring(indx + 1);
      combinations(binaryString, indx + 1);
      binaryString =
        binaryString.substring(0, indx) +
        "?" +
        binaryString.substring(indx + 1);
    }
  } else {
    combinations(binaryString, indx + 1);
  }
}

let binaryString = readLine();
let indx = 0;

combinations(binaryString, indx);
