/*
  Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

  The approach here is an example of multiple pointers pattern. Must be used on a sorted array.
*/

function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.ceil((right + left) / 2);

  while(arr[mid] !== val && left <= right) {
    if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.ceil((right + left) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

binarySearch([1, 2, 3, 4, 5], 2) // 1
binarySearch([1, 2, 3, 4, 5], 3) // 2
binarySearch([1, 2, 3, 4, 5], 5)// 4
binarySearch([1, 2, 3, 4, 5], 6) // -1
