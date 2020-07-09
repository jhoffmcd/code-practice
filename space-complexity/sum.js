function sum(array) {
  let total = 0

  for (let i = 0; i < array.length; i++) {
    total += arr[i]
  }

  return total
}


/*
Notes:

You can use Big O notation to descript space complexity, as well as time complexity. In this example, there is one variable assignment that remains constant in memory.
In terms of space complexity, nothing changes due to the size of the array as far as the space needed for the variable total, so the space complexity for this would be O(1).

However, if we we're looking at time complexity, this runtime increases linearly based on the input array length, so it's time complexity would be O(n).
*/
