const { performance } = require('perf_hooks')
const timing = require('./timing')

// O(n)
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1)
function addUpTo2(n) {
  return n * (n + 1) / 2;
}

// Timing
const function1Time1 = performance.now()
addUpTo1(1000000000)
const function1Time2 = performance.now()
timing(function1Time1, function1Time2)

const function2Time1 = performance.now()
addUpTo2(1000000000)
const function2Time2 = performance.now()
timing(function2Time1, function2Time2)

/*
Notes:

This just illustrates how to use a performance hook to time our code execution. the second function ends up being more perfomant
because it has less operations and the number of operations does not increase with the size of n. The first function will have more
operations depending on what the value of n is.

Because the first function scales linearly as a multiple of n, it is O(n). The second remains constant, regardless of input, so it is O(1).
*/
