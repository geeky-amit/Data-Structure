function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      //swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  //swap
  let temp = arr[i];
  arr[i] = pivot;
  arr[high] = temp;
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}
let arr = [2, 6, 12, 34, 1, 9, 20, 1000, 23, 34, 90, 2000];
quickSort(arr, 0, arr.length - 1);
console.log(...arr);
