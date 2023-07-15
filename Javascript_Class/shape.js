let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculatePerimeter() {
    let perimeter = 2 * (length + width);
    return perimeter;
  }
}

let input = readLine().split(" ");
let length = parseInt(input[0]);
let width = parseInt(input[1]);
let rectangle = new Rectangle(length, width);
console.log(rectangle.calculatePerimeter());
