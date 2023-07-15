// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// // Approch 1
// function anagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let str1 = str1.sort();
//   let str2 = str2.sort();
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) return false;
//   }

//   return true;
// }

// Approch 2

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequency = {};

  for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
    if (frequency[key] !== undefined) {
      // key is already there!
      frequency[key] += 1;
    } else {
      // first time occure key
      frequency[key] = 1;
    }
  }
  console.log(frequency);
  for (let i = 0; i < str2.length; i++) {
    let key = str2[i];
    if (frequency[key] === undefined) {
      // key is not there
      return false;
    }
    // key is there

    frequency[key] -= 1;
    frequency[key] === 0 && delete frequency[key];
  }
  return Object.keys(frequency).length === 0;
}

console.log(isAnagram("apple", "ppale"));
