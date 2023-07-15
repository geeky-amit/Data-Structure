// let num = 11211;

const { parse } = require("nodemon/lib/cli");

// let arr = num.toString().split("");

// for (let left = 0, right = arr.length - 1; left <= right; left++, right--) {
//   if (arr[left] !== arr[right]) {
//     console.log("not");
//   }
// }

// while (left < right) {
//   if (arr[left] !== arr[right]) {
//     console.log("Not a Palindrome");
//   }
//   left++;
//   right--;
// }
const palindrome = function (num) {
  let sum = 0;
  let temp = num;
  while (num > 0) {
    let rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
  }
  if (sum === temp) {
    console.log("True");
  } else {
    console.log("False");
  }
};

palindrome(121);
console.log(Number.NEGATIVE_INFINITY);
