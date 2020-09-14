// Points means inputs
function complement(fn) {
  return function (...args) {
    return !fn(...args);
  };
}

function isOdd(v) {
  return v % 2 === 1;
}

let isEven = complement(isOdd);

function isShortEnough(str) {
  return str.length <= 5;
}

let isLongEnough = complement(isShortEnough);
let output = console.log;
function printIf(shouldPrintIt) {
  return function (msg) {
    if (shouldPrintIt(msg)) {
      output(msg);
    }
  };
}

printIf(isLongEnough)("Test");

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}
