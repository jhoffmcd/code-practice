/*
Given two strings, write a function to determine if the second string is an anagram of
the first. An anagram is a word, phrase, or name formed by rearranging the letters of
another, such as cinema, formed from iceman.

Example of frequency counter pattern. We can avoid a nested loop O(n^2) and uses objects to
store the occurance of characters in the string, which gives us an O(n) solution.

Features for...of for the string iteration and fo...in for the object iteration.
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const characterFrequency1 = {};
  const characterFrequency2 = {};

  for (let char of str1) {
    characterFrequency1[char] = (characterFrequency1[char] || 0) + 1;
  }
  for (let char of str2) {
    characterFrequency2[char] = (characterFrequency2[char] || 0) + 1;
  }
  for (let key in characterFrequency1) {
    if (characterFrequency1[key] !== characterFrequency2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'azz')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
