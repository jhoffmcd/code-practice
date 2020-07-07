/*
  Implement a function called, areThereDuplicates which accepts a variable number of arguments, and
  checks whether there are any duplicates among the arguments passed in.

  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  This solution uses a frequency counter to count the occurences and returns true only when the loop encounters a
  key that already exists in the array.

  Note the use of the arguments object (using object spread notation). This is also available inside the function
  as the "arguments" keyword.
*/

function areThereDuplicates(...args) {
    const argumentFrequency = {};

    for (const arg of args) {
      if (argumentFrequency[arg]) {
        return true;
      } else {
        argumentFrequency[arg] = (argumentFrequency[arg] || 0) + 1;
      }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
