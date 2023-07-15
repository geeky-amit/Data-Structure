let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function validate(matrix) {
  // row check
  for (let row = 0; row < 9; row++) {
    let m = new Map(); // map: value -> true
    for (let col = 0; col < 9; col++) {
      let ch = matrix[row][col];
      if (ch !== "." && m.has(ch)) {
        // ch has already occured before
        return "False";
      }
      m.set(ch, true); // new mapping for ch
    }
  }

  // column check
  for (let col = 0; col < 9; col++) {
    let m = new Map();
    for (let row = 0; row < 9; row++) {
      let ch = matrix[row][col];
      if (ch !== "." && m.has(ch)) {
        return "False";
      }
      m.set(ch, true);
    }
  }

  //check 3 * 3

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let m = new Map();
      for (let row = i; row < 3; row++) {
        for (let col = j; col < 3; col++) {
          let ch = matrix[row][col];
          if (ch !== "." && m.has(ch)) {
            return "False";
          }
          m.set(ch, true);
        }
      }
    }
  }
  return "True";
}

let sudoku = [];

for (let i = 0; i < 9; i++) {
  sudoku.push(readLine().split(" "));
}

console.log(validate(sudoku));
