function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);

  while (start <= end) {
    if (arr[mid] === key) {
      return mid;
    }

    // go to right part of the array
    if (key > arr[mid]) {
      start = mid + 1;
    } else {
      // go to left part of the array
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr, 5));
