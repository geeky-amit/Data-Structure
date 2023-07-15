const { Template } = require("ejs");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function maximumValue(inputNumbers) {
  // write below this here
  let max = inputNumbers[0];
  for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] > max) {
      max = inputNumbers[i];
    }
  }
  return max;
}

function minimumValue(inputNumbers) {
  // Please write below this
  let temp = inputNumbers[0];
  for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] < temp) {
      temp = inputNumbers[i];
    }
  }
  return temp;
}

function getNumbersInRange(inputNumbers, m1, m2) {
  // Please write below this line
  let res = [];
  if (m1 >= m2) {
    for (let i = 0; i < inputNumbers.length; i++) {
      if (inputNumbers[i] >= m2 && inputNumbers[i] <= m1) {
        res.push(inputNumbers[i]);
      }
    }
  } else if (m1 <= m2) {
    for (let i = 0; i <= inputNumbers.length; i++) {
      if (inputNumbers[i] <= m2 && inputNumbers[i] >= m1) {
        res.push(inputNumbers[i]);
      }
    }
  } else {
    res.push(-1);
  }

  return res;
}

function ConvertToNumber(list) {
  for (let each in list) {
    list[each] = Number(list[each]);
  }
  return list;
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ");
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange);
