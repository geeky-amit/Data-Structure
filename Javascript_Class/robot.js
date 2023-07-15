let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'RobotMovement' and method names as 'moveUp', 'moveDown', 'moveLeft' and 'moveRight'

class RobotMovement {
  x;
  y;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  moveUp() {
    this.y++;
  }
  moveDown() {
    this.y--;
  }
  moveRight() {
    this.x++;
  }
  moveLeft() {
    this.x--;
  }
  xCoordinate() {
    return this.x;
  }

  yCoordinate() {
    return this.y;
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index < Num; index++) {
  let currentMovement = readLine();
  if (currentMovement === "up") {
    myRobotMove.moveUp();
  } else if (currentMovement === "down") {
    myRobotMove.moveDown();
  } else if (currentMovement === "left") {
    myRobotMove.moveLeft();
  } else {
    myRobotMove.moveRight();
  }
}

console.log(myRobotMove.xCoordinate());
console.log(myRobotMove.yCoordinate());
