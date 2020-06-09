function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let startingPointer = 0;
  let leadingPointer = 1

  while (leadingPointer < arr.length) {
    if (arr[startingPointer] !== arr[leadingPointer]) {
      startingPointer++;
      arr[startingPointer] = arr[leadingPointer];
    }

    leadingPointer++;
  }

  return startingPointer + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2. -1, -1, 0, 1])) // 4
console.log(countUniqueValues([10])) // 1
