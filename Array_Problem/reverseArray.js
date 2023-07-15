let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Aproch 1
let revArrays = [];

for (let i = arr.length - 1; i >= 0; i--) {
  revArrays.push(arr[i]);
}

console.log(revArrays);

// Approch 2

// unshift method add element in the array in begning

let output = [];
for (let i = 0; i < arr.length; i++) {
  output.unshift(arr[i]);
}
console.log(output);

// Aproch 3 two pionter time complexity o(n) S(1)

for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

console.log(arr);
