// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// function firstNonRepeatingString(str) {
//   str.sort();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) return str[i];
//   }
// }

// Approch 2

function firstNonRepeatingString(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] === undefined
      ? (frequency[str[i]] = 1)
      : frequency[str[i]]++;
  }
  //console.log(frequency);
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) {
      console.log(str[i], i);
      return;
    }
  }
  console.log("-1");
  return;
}

firstNonRepeatingString("aapple");
