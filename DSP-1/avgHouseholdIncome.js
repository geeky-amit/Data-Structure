let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

let householdIncomes = [];
let householdChildrens = [];

for (let i = 0; i < n; i++) {
  householdIncomes.push(parseInt(readLine()));
}

for (let i = 0; i < n; i++) {
  householdChildrens.push(parseInt(readLine()));
}

let averageIncome = 0;
let count = 0;

for (let i = 0; i < n; i++) {
  if (householdChildrens[i] > 2) {
    averageIncome += householdIncomes[i];
    count++;
  }
}

if (count === 0) {
  console.log(-1);
} else {
  console.log(parseInt(averageIncome / count));
}
