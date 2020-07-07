/*
Given two positive integers, find out if the two numbers have the same frequency of digits.

Must be O(n) time complexity

Example of using the frequency counter pattern.
*/

function sameFrequency(int1, int2) {
  // Add checks for postive integer requirement and digit counts
  if (String(int1).lenght !== String(int2).lenght || Math.sign(int1) !== 1 || Math.sign(int2) !== 1) {
    return false;
  }

  // Declare lookup objecta to store frequency matches
  const number1Frequency = {};
  const number2Frequency = {};

  // Array.from() will create the array from the array like string (coerced by String() and mapped to the Number() function)
  const convertedInt1Array = Array.from(String(int1), Number);
  const convertedInt2Array = Array.from(String(int2), Number);

  // Set our lookup object 1
  for (let number of convertedInt1Array) {
    number1Frequency[number] = (number1Frequency[number] || 0) + 1;
  }

  // Set our lookup object 2
  for (let number of convertedInt2Array) {
    number2Frequency[number] = (number2Frequency[number] || 0) + 1;
  }

  // Validate counts using keys of object one
  for (let key in number1Frequency) {
    if (number1Frequency[key] !==  number2Frequency[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
console.log(sameFrequency(-1, 222)) // false
console.log(sameFrequency(33, -20)) // false
