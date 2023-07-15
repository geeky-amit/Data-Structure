let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function calculateTotalFund(salaries, peopleCount) {
  let cess = 0;
  for (let i = 0; i < peopleCount; i++) {
    cess = cess + Math.ceil((salaries[i] * 0.07).toFixed(2));
  }
  return cess;
}

function ConvertToNumber(list) {
  for (let each in list) {
    list[each] = Number(list[each]);
  }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);
