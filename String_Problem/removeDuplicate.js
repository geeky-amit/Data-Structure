var removeDuplicateLetters = function (s) {
  let frequency = {};
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (frequency[key] !== undefined) {
      frequency[key]++;
    } else {
      frequency[key] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]] !== undefined) {
      str += s[i];
      delete frequency[s[i]];
    }
  }
  let newStr = str.split("").sort().join("");
  return newStr;
};

let str = "bcabc";
console.log(removeDuplicateLetters(str));
