//
// let x = 10;
// function a() {
//   function b() {
//     let y = 20;
//     console.log(x, y);
//   }
//   console.log(y);
// }
// cd;

// function sum(n) {
//   if (n === 0) return 0;
//   return n + sum(n - 1); // time complexity O(n)
// }

// function product(n) {
//   if (n === 1) return 1;
//   return n * product(n - 1); // time complexity O(n)
// }
// console.log(sum(5));
// console.log(product(5));

// function subset(arr, pos, target, subAns, ans) {
//   if (target === 0) {
//     ans.push(subAns);
//   }

//   if (target < 0) return;

//   if (pos === arr.length) return;

//   subset(arr, pos, target - arr[pos], subAns.push(arr[pos]), ans);
//   subset(arr, pos + 1, target, subAns, ans);
// }

// function printNum(n) {
//   if (n === 0) return;

//   //console.log(n);
//   printNum(n - 1);
//   console.log(n);
// }

// printNum(5);

function sum(n) {
  if (n === 0) return 0;
  let sum1 = sum(n - 1);
  let sum = sum1 + n;
  return sum;
}

console.log(sum(5));
