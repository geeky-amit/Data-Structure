let arr = [1, 2, 3, 4, 5, 6, 1, 1, 1];
let count = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[0]) {
    count++;
  }
}

console.log(count);
