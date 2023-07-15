let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function getMorseCode(arr) {
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let codedMassage = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];

    let tempCodedMassage = "";
    for (let j = 0; j < str.length; j++) {
      let code = str.charCodeAt(j) - 97;

      tempCodedMassage += morseCode[code];
    }
    codedMassage.push(tempCodedMassage);
  }
  return codedMassage;
}

let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
  let arr = readLine().split(" ");
  let codedMassege = getMorseCode(arr);
  let frequency = {};
  for (let j = 0; j < codedMassege.length; j++) {
    let key = codedMassege[j];
    if (frequency[key] == undefined) {
      frequency[key] = 1;
    } else {
      frequency[key] += 1;
    }
  }

  console.log(Object.keys(frequency).length);
}
