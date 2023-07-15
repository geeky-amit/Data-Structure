let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

class ProgressReport {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }

  enter_score() {
    let noOfTest = parseInt(readLine());
    for (let i = 0; i < noOfTest; i++) {
      this.scores.push(parseInt(readLine()));
    }
  }

  get_average_score() {
    let average = 0;
    for (let i = 0; i < this.scores.length; i++) {
      average += this.scores[i];
    }
    let averageScore = Math.round(average / this.scores.length);
    console.log(`${name} average score: ${averageScore}`);
  }

  get_test_score(testNumber) {
    if (testNumber <= this.scores.length && testNumber > 0) {
      let marks = this.scores[testNumber - 1];
      console.log(`${name} test ${testNumber} marks: ${marks}`);
    } else {
      console.log(`${name} test ${testNumber} marks: NA`);
    }
  }
}

let name = readLine();
let report = new ProgressReport(name);

report.enter_score();
let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let str = readLine();
  if (str === "get_marks") {
    let testNumber = parseInt(readLine());
    report.get_test_score(testNumber);
  } else {
    report.get_average_score();
  }
}
