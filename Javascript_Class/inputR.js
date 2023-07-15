let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

class InputReader {
  //   constructor(num) {
  //     this.num = num;
  //   }
  readStrings(num) {
    for (let i = 0; i < num; i++) {
      let flt = parseFloat(readLine()).toFixed(2);
      let str = flt.toString();
      console.log(`${i} ${str}`);
    }
  }

  readFloats(num) {
    for (let i = 0; i < num; i++) {
      let flt = parseFloat(readLine()).toFixed(2);
      console.log(`${i} ${flt}`);
    }
  }

  readIntegers(num) {
    for (let i = 0; i < num; i++) {
      let int = parseInt(readLine());
      console.log(`${i} ${int}`);
    }
  }
}

let num = parseInt(readLine());

let typeOfInput = readLine();
let NewInputReader = new InputReader();
if (typeOfInput === "string") {
  NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
  NewInputReader.readIntegers(num);
} else {
  NewInputReader.readFloats(num);
}
