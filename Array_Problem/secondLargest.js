let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine());

for (i = 0; i < n; i++) {
  let num = parseInt(readLine());
  let temp = readLine();
  let data = temp.split(" ");
  let arr = [];
  for (let j = 0; j < num; j++) {
    arr.push(parseInt(data[j]));
  }
  let max = arr[0];
  let secondLarg = Number.NEGATIVE_INFINITY; // -999999999 //-Infinity -Infinity -Infinity
  for (let j = 0; j < arr.length; j++) {
    // max 35
    if (arr[j] > max) {
      max = arr[j];
    }
  }
  //10 10 10
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < max && arr[j] > secondLarg) {
      // 10
      secondLarg = arr[j];
    }
  }

  if (secondLarg === -Infinity) {
    console.log("NA");
  } else {
    console.log(secondLarg);
  }
}
