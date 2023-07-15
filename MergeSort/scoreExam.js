let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let [n, q] = readLine().split(" ").map(Number);

let times = readLine().split(" ").map(Number);
let scores = readLine().split(" ").map(Number);

let questions = [];

for (let i = 0; i < n; i++) {
  questions.push([scores[i], times[i]]);
}

questions.sort((a, b) => {
  return b[0] - a[0];
});

let c = [questions[0][1]];
for (let i = 1; i < questions.length; i++) {
  let last = c[c.length - 1];
  c.push(last + questions[i][1]);
}

for (let i = 1; i < n; i++) {
  let j = i;
  while (j > 0 && questions[j - 1][0] < questions[j][0]) {
    let temp = questions[j - 1];
    questions[j - 1] = questions[j];
    questions[j] = temp;
    j--;
  }
}

for (let i = 0; i < q; i++) {
  let query = parseInt(readLine());
  console.log(c[query - 1]);
}
