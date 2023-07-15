let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

class InputReader {
  readStrings(n) {
    for (let i = 0; i < n; i++) {
      let str = readLine();
      console.log(`${i} ${str}`);
    }
  }

  readIntegers(n) {
    for (let i = 0; i < n; i++) {
      let num = parseInt(readLine());
      console.log(`${i} ${num}`);
    }
  }

  readFloats(n) {
    for (let i = 0; i < n; i++) {
      let num = parseFloat(readLine()).toFixed(2);
      console.log(`${i} ${num}`);
    }
  }
}

let n = parseInt(readLine());
let type = readLine();

let inputR = new InputReader();

if (type === "float") {
  inputR.readFloats(n);
} else if (type === "number") {
  inputR.readIntegers(n);
} else {
  inputR.readStrings(n);
}
