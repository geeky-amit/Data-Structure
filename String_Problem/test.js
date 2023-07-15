// function palindrome(str) {
//   flag = true;
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] !== str[j]) {
//       flag = false;
//       break;
//     }
//   }

//   if (flag) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let str = "abb";

// console.log(palindrome(str));

// function repeatingChar(str, k) {
//   if (str.length % k !== 0) return -1;

//   let str = str.split("");

//   newStr = newStr.split(" ").join("");
//   return newStr;
// }

// let str = "";
// let k = 3;

// console.log(repeatingChar(str, k));

function revers(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}

revers("abcde");
