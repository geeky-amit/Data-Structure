const { log } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

class Progress {
  name;
  score = [];

  constructor(name) {
    this.name = name;
  }
  enter_score(score) {
    this.score.push(score);
  }
  get_average_score() {
    let sum = 0;
    for (let i = 0; i < this.score.length; i++) {
      sum += this.score[i];
    }
    let avgScore = sum / this.score.length;
    return avgScore;
  }
  get_test_score(testNum) {
    if (testNum > this.score.length) {
      return "NA";
    } else {
      let res = this.score[testNum - 1];
      return res;
    }
  }
}

let name = readLine();

let progress = new Progress(name);
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let score = parseInt(readLine());
  progress.enter_score(score);
}

let num = parseInt(readLine());
for (let i = 0; i < num; i++) {
  let temp = readLine();
  if (temp == "average") {
    let avgScore = progress.get_average_score();
    console.log(`Harry average score: ${avgScore}`);
  } else {
    let testNum = parseInt(readLine());
    let score = progress.get_test_score(testNum);
    console.log(`Harry test ${testNum} marks: ${score}`);
  }
}
