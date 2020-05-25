const { performance } = require('perf_hooks')
const timing = require('./timing')

function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

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

This just illustrates how to use a performance hook to time our code execution.
*/
